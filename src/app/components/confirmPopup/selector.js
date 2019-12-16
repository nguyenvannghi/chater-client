import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectAction = state => state.reducerConfirmAction || initialState;

const makeSelectConfirmAction = () => createSelector(selectAction, selectAction => selectAction.isClose);

const makeSelectStatusConfirmAction = () => createSelector(selectAction, selectAction => selectAction.data);

const makeSelectConfirmMessage = () => createSelector(selectAction, selectAction => selectAction.message);

const makeSelectConfirmActions = () => createSelector(selectAction, selectAction => selectAction.actions);

export { makeSelectConfirmAction, makeSelectConfirmMessage, makeSelectConfirmActions, makeSelectStatusConfirmAction };
