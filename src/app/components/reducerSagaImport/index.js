/* eslint-disable react-hooks/rules-of-hooks */
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

const injectReducerSaga = (KEY_REDUCER_SAGA, reducer, saga) => {
    useInjectReducer({ key: KEY_REDUCER_SAGA, reducer });
    useInjectSaga({ key: KEY_REDUCER_SAGA, saga });
};

export default injectReducerSaga;
