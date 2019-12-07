/* eslint-disable react-hooks/rules-of-hooks */
import useInjectReducer from 'app/reducers/injectReducer';
import useInjectSaga from 'app/saga/injectSaga';

const injectReducerSaga = (KEY_REDUCER_SAGA, reducer, saga) => {
    useInjectReducer(KEY_REDUCER_SAGA, reducer);
    useInjectSaga(KEY_REDUCER_SAGA, saga);
};

export { useInjectReducer, useInjectSaga, injectReducerSaga };
