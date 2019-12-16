import { createSelector } from 'reselect';

import { KEY_REDUCER_SAGA } from './const';
import { initialState } from './reducer';

const selectLoginState = state => state[KEY_REDUCER_SAGA] || initialState;

const makeSelectLoginStatus = () => createSelector(selectLoginState, selectLoginState => selectLoginState.isLogin);

const makeSelectError = () => createSelector(selectLoginState, selectLoginState => selectLoginState.error);

export { makeSelectLoginStatus, makeSelectError };
