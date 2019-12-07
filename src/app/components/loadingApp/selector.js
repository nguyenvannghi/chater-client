import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectLoading = state => state.reducerLoadingApp || initialState;

const makeSelectLoading = () => {
    return createSelector(selectLoading, selectLoading => {
        return selectLoading.isLoading;
    });
};

export default makeSelectLoading;
