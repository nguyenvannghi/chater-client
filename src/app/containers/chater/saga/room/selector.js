import { createSelector } from 'reselect';

import { ROOM_KEY_REDUCER_SAGA } from './const';
import { initialState } from './reducer';

const selectRoomState = state => state[ROOM_KEY_REDUCER_SAGA] || initialState;

const makeSelectRooms = () => createSelector(selectRoomState, selectRoomState => selectRoomState.rooms);

const makeSelectRoom = () => createSelector(selectRoomState, selectRoomState => selectRoomState.roomSelected);

const makeSelectRoomUpdated = () => createSelector(selectRoomState, selectRoomState => selectRoomState.roomUpdated);

const makeSelectLoadingRooms = () => createSelector(selectRoomState, selectRoomState => selectRoomState.isLoading);

const makeSelectError = () => createSelector(selectRoomState, selectRoomState => selectRoomState.error);

export { makeSelectRooms, makeSelectRoom, makeSelectRoomUpdated, makeSelectLoadingRooms, makeSelectError };
