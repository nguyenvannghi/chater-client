import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import ENV, { envNameConfig } from '../../config';
import createReducer from '../reducers';
import rootSaga from '../saga';
import history from '../routes/history';

const storeConfig = (initialState = {}) => {
    let reduxSagaMonitorOptions = {};
    // Dev Tools once it supports redux-saga version 1.x.x
    if (window.__SAGA_MONITOR_EXTENSION__) {
        reduxSagaMonitorOptions = {
            sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
        };
    }

    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
    const routesMiddleware = routerMiddleware(history);

    const middlewares = [sagaMiddleware, routesMiddleware];

    const enhancers = [applyMiddleware(...middlewares)];
    let composeEnhancers = compose;
    if (ENV !== envNameConfig.production && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            shouldHotReload: false,
        });
    }

    const store = createStore(createReducer(), initialState, composeEnhancers(...enhancers));

    sagaMiddleware.run(rootSaga);

    store.runSaga = sagaMiddleware.run;

    store.injectedReducers = {};
    store.injectedSagas = {};
    store.replaceReducer(createReducer(store.injectedReducers));

    return store;
};

export default storeConfig;
