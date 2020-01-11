import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectAction = state => state.reducerConfirmAction || initialState;

const makeSelectConfirmAction = () => createSelector(selectAction, selectAction => selectAction.isClose);

const makeSelectStatusConfirmAction = () =>
    createSelector(selectAction, selectAction => ({ data: selectAction.data, key: selectAction.key }));

const makeSelectConfirmMessage = () => createSelector(selectAction, selectAction => selectAction.message);

const makeSelectConfirmActions = () => createSelector(selectAction, selectAction => selectAction.actions);

export { makeSelectConfirmAction, makeSelectConfirmMessage, makeSelectConfirmActions, makeSelectStatusConfirmAction };
