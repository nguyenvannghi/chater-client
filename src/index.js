import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Grommet } from 'grommet';
import ApolloClient from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
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

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URI,
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = getCookie.getCookie(listCookieStorageName.access_token);
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});
console.log(httpLink);
const client = new ApolloClient({
    link: authLink.concat(httpLink),
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
