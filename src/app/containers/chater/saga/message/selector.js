import { createSelector } from 'reselect';

import { MESSAGE_KEY_REDUCER_SAGA } from './const';
import { initialState } from './reducer';

const selectMessageState = state => state[MESSAGE_KEY_REDUCER_SAGA] || initialState;

const makeSelectMessages = () => createSelector(selectMessageState, selectMessageState => selectMessageState.messages);

const makeSelectLoadingMessages = () => createSelector(selectMessageState, selectMessageState => selectMessageState.isLoading);

const makeSelectError = () => createSelector(selectMessageState, selectMessageState => selectMessageState.error);

export { makeSelectMessages, makeSelectLoadingMessages, makeSelectError };
