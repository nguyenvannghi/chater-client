import { createSelector } from 'reselect';

import { USER_ROOM_KEY_REDUCER_SAGA } from './const';
import { initialState } from './reducer';

const selectRoomState = state => state[USER_ROOM_KEY_REDUCER_SAGA] || initialState;

const makeSelectRooms = () => createSelector(selectRoomState, selectRoomState => selectRoomState.userRooms);

const makeSelectError = () => createSelector(selectRoomState, selectRoomState => selectRoomState.error);

export { makeSelectRooms, makeSelectError };
