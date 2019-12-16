import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../routes/history';

import reducerLoadingApp from '../components/loadingApp/reducer';
import reducerConfirmAction from '../components/confirmPopup/reducer';
import reducerToastApp from '../components/toast/reducer';
import reducerAuth from 'app/containers/signin/saga/reducer';

const rootReducer = (asyncReducers = {}) => {
    return combineReducers({
        router: connectRouter(history),
        reducerLoadingApp,
        reducerConfirmAction,
        reducerToastApp,
        reducerAuth,
        ...asyncReducers,
    });
};
export default rootReducer;
