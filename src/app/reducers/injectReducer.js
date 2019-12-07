/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';
import { ReactReduxContext } from 'react-redux';

import getInjectors from './reducerInjectors';

const useInjectReducer = (key, reducer) => {
    const context = useContext(ReactReduxContext);
    useEffect(() => {
        getInjectors(context.store).injectReducer(key, reducer);
    }, []);
};

export default useInjectReducer;
