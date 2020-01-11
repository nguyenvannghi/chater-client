import React, { Suspense, lazy } from 'react';

import LoadingComp from '../loadingComp';

export default ImportComponent => {
    const LazyComp = lazy(ImportComponent);

    const AsyncComponent = props => {
        return (
            <Suspense fallback={<LoadingComp />}>
                <LazyComp {...props} />
            </Suspense>
        );
    };

    return AsyncComponent;
};
