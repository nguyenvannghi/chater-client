import { createAction } from '@reduxjs/toolkit';
import * as nameConst from './const';

const userRoomsCall = createAction(nameConst.USER_ROOM_CALL, (query, params) => ({ payload: { query: query, params: params } }));
const userRoomsSuccess = createAction(nameConst.USER_ROOM_SUCCESS, data => ({ payload: data }));
const userRoomsFailed = createAction(nameConst.USER_ROOM_FAILED, error => ({ payload: error }));

const userRoomUpdateCall = createAction(nameConst.USER_ROOM_UPDATE_CALL, (mutate, params) => ({
    payload: { mutation: mutate, params: params },
}));
const userRoomUpdatedSuccess = createAction(nameConst.USER_ROOM_UPDATED_SUCCESS, data => ({ payload: data }));
const userRoomUpdatedFailed = createAction(nameConst.USER_ROOM_UPDATED_FAILED, error => ({ payload: error }));

const userRoomAddCall = createAction(nameConst.USER_ROOM_ADD_CALL, (mutate, params) => ({ payload: { mutation: mutate, params: params } }));
const userRoomAddedSuccess = createAction(nameConst.USER_ROOM_ADDED_SUCCESS, data => ({ payload: data }));
const userRoomAddedFailed = createAction(nameConst.USER_ROOM_ADDED_FAILED, error => ({ payload: error }));

export {
    userRoomsCall,
    userRoomsSuccess,
    userRoomsFailed,
    userRoomUpdateCall,
    userRoomUpdatedSuccess,
    userRoomUpdatedFailed,
    userRoomAddCall,
    userRoomAddedSuccess,
    userRoomAddedFailed,
};
