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
