import { createSelector } from 'reselect';

import { USER_ROOM_KEY_REDUCER_SAGA } from './const';
import { initialState } from './reducer';

const selectRoomState = state => state[USER_ROOM_KEY_REDUCER_SAGA] || initialState;

const unique = (arr, key) => Object.values(arr.reduce((acc, cur) => Object.assign(acc, { [cur[key]]: cur }), {}));

const makeSelectUserRooms = () =>
    createSelector(
        selectRoomState,
        selectRoomState =>
            selectRoomState.userRooms &&
            unique(
                selectRoomState.userRooms.map(item => item.user),
                '_id',
            ),
    );

const makeSelectRoomUsers = () =>
    createSelector(
        selectRoomState,
        selectRoomState =>
            selectRoomState.roomUsers &&
            unique(
                selectRoomState.roomUsers.map(item => item.room),
                '_id',
            ),
    );

const makeSelectError = () => createSelector(selectRoomState, selectRoomState => selectRoomState.error);

export { makeSelectUserRooms, makeSelectRoomUsers, makeSelectError };
