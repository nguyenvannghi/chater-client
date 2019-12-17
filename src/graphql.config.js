import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import apolloLogger from 'apollo-link-logger';
import { ApolloLink, concat, split, from } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { ApolloClient } from 'apollo-client';
import { getMainDefinition } from 'apollo-utilities';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { listCookieStorageName, getCookie } from 'app/_utils/cookieStorage';
import { logoutAction } from 'app/_services/authAction';
const clientSub = new SubscriptionClient('ws://localhost:5002/subscriptions', {
    reconnect: true,
});

const wsLink = new WebSocketLink(clientSub);
const httpLink = new HttpLink({ uri: 'http://localhost:5002/' });
const authMiddleware = new ApolloLink((operation, forward) => {
    const token = getCookie(listCookieStorageName.access_token);
    operation.setContext({
        headers: {
            authorization: token ? `Bearer ${token}` : '',
        },
    });
    return forward(operation);
});
const link = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    concat(authMiddleware, httpLink),
);

const cache = new InMemoryCache();
const clientConfig = new ApolloClient({
    link: from([
        apolloLogger,
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors)
                graphQLErrors.forEach(({ message, statusCode }) => {
                    if (statusCode === 401) {
                        return logoutAction();
                    }
                });
            if (networkError) console.error(`[Network error]: ${networkError.message}`);
        }),
        link,
    ]),
    cache,
});

export default clientConfig;
