import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Grommet } from 'grommet';
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { listCookieStorageName, getCookie } from 'app/_utils/cookieStorage';

import store from './app/stores';
import Routes from './app/routes';
import LoadingApp from './app/components/loadingApp';
import Toast from './app/components/toast';

import './styles/index.scss';

const theme = {
    global: {
        colors: {
            error: '#FF4040',
            success: '#00C781',
            warning: '#FFAA15',
            info: '#7D4CDB',
            white: '#fff',
        },
        font: {
            family: 'Roboto',
            size: '14px',
            height: '20px',
        },
    },
};

const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_URI });

const authLink = new ApolloLink((operation, forward) => {
    // Retrieve the authorization token from cookie
    const token = getCookie(listCookieStorageName.access_token);
    console.log(token);
    // Use the setContext method to set the HTTP headers.
    operation.setContext({
        headers: {
            authorization: token ? `Bearer ${token}` : '',
        },
    });
    // Call the next link in the middleware chain.
    return forward(operation);
});

const client = new ApolloClient({
    link: authLink.concat(httpLink), // Chain it with the HttpLink
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store()}>
            <Grommet theme={theme} full>
                <Toast />
                <LoadingApp />
                <Routes />
            </Grommet>
        </Provider>
    </ApolloProvider>,
    document.getElementById('root'),
);
