import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Grommet } from 'grommet';
import clientConfig from 'graphql.config';
import { ApolloProvider } from '@apollo/react-hooks';

import store from './app/stores';
import Routes from './app/routes';
import LoadingApp from './app/components/loadingApp';
import Toast from './app/components/toast';
import ConfirmPopup from './app/components/confirmPopup';

import './styles/index.scss';
import 'emoji-mart/css/emoji-mart.css';

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
            // family: 'Luckiest Guy',
            family: 'Baloo',
            size: '14px',
            height: '20px',
        },
    },
};

ReactDOM.render(
    <ApolloProvider client={clientConfig}>
        <Provider store={store()}>
            <Grommet theme={theme} full>
                <Toast />
                <LoadingApp />
                <ConfirmPopup />
                <Routes />
            </Grommet>
        </Provider>
    </ApolloProvider>,
    document.getElementById('root'),
);
