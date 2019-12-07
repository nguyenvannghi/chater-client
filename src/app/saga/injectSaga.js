/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';
import { ReactReduxContext } from 'react-redux';

import getInjectors from './sagaInjectors';

const useInjectSaga = (key, saga, mode) => {
    const context = useContext(ReactReduxContext);

    useEffect(() => {
        const injectors = getInjectors(context.store);
        injectors.injectSaga(key, { saga, mode });

        return () => {
            injectors.ejectSaga(key);
        };
    }, []);
};

export default useInjectSaga;
