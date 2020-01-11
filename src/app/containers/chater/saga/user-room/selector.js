import { createSelector } from 'reselect';

import { USER_ROOM_KEY_REDUCER_SAGA } from './const';
import { initialState } from './reducer';

const selectRoomState = state => state[USER_ROOM_KEY_REDUCER_SAGA] || initialState;

const makeSelectUserRooms = () =>
    createSelector(selectRoomState, selectRoomState => selectRoomState.userRooms && selectRoomState.userRooms.map(item => item.user));

const makeSelectError = () => createSelector(selectRoomState, selectRoomState => selectRoomState.error);

export { makeSelectUserRooms, makeSelectError };
