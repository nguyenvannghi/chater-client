import { createSelector } from 'reselect';

import { USER_KEY_REDUCER_SAGA } from './const';
import { initialState } from './reducer';

const selectUserState = state => state[USER_KEY_REDUCER_SAGA] || initialState;

const makeSelectUsers = () => createSelector(selectUserState, selectUserState => selectUserState.users);

const makeSelectLoadingUsers = () => createSelector(selectUserState, selectUserState => selectUserState.isLoading);

const makeSelectError = () => createSelector(selectUserState, selectUserState => selectUserState.error);

export { makeSelectUsers, makeSelectLoadingUsers, makeSelectError };
