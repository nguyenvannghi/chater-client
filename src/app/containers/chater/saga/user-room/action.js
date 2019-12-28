import * as nameConst from './const';

export const userRoomsCall = (query, params) => ({
    type: nameConst.USER_ROOM_CALL,
    query: query,
    params: params,
});

export const userRoomsSuccess = data => ({
    type: nameConst.USER_ROOM_SUCCESS,
    query: data,
});

export const userRoomsFailed = error => ({
    type: nameConst.USER_ROOM_FAILED,
    ...error,
});

export const userRoomAddCall = (mutate, params) => ({
    type: nameConst.USER_ROOM_ADD_CALL,
    mutation: mutate,
    params: params,
});

export const userRoomAddedSuccess = data => ({
    type: nameConst.USER_ROOM_ADDED_SUCCESS,
    query: data,
});

export const userRoomAddedFailed = error => ({
    type: nameConst.USER_ROOM_ADDED_FAILED,
    ...error,
});

export const userRoomUpdateCall = (mutate, params) => ({
    type: nameConst.USER_ROOM_UPDATE_CALL,
    mutation: mutate,
    params: params,
});

export const userRoomUpdatedSuccess = data => ({
    type: nameConst.USER_ROOM_UPDATED_SUCCESS,
    query: data,
});

export const userRoomUpdatedFailed = error => ({
    type: nameConst.USER_ROOM_UPDATED_FAILED,
    ...error,
});
