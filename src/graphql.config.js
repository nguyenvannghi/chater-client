import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, concat, split, from } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { ApolloClient } from 'apollo-client';
import { getMainDefinition } from 'apollo-utilities';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { listCookieStorageName, getCookie } from 'app/_utils/cookieStorage';

// const wsLink = () => {
//     return new WebSocketLink({
//         uri: 'ws://localhost:5002/subscriptions',
//         options: {
//             reconnect: true,
//         },
//     });
// };

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
        console.log(query);
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    concat(authMiddleware, httpLink),
);
const clientConfig = new ApolloClient({
    link: from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors)
                graphQLErrors.forEach(({ message, locations, path }) =>
                    console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
                );
            if (networkError) console.error(`[Network error]: ${networkError.message}`);
        }),
        link,
    ]),
    cache: new InMemoryCache(),
});

export default clientConfig;
