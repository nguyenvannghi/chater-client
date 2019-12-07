import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../routes/history';

import reducerLoadingApp from '../components/loadingApp/reducer';
import reducerToastApp from '../components/toast/reducer';

const rootReducer = (asyncReducers = {}) => {
    return combineReducers({
        router: connectRouter(history),
        reducerLoadingApp,
        reducerToastApp,
        ...asyncReducers,
    });
};
export default rootReducer;
