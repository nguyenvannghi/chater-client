import * as nameConst from './const';

export const roomCall = (query, params) => ({
    type: nameConst.ROOM_CALL,
    query: query,
    params: params,
});

export const roomCallSuccess = data => ({
    type: nameConst.ROOM_CALL_SUCCESS,
    query: data,
});

export const roomCalFailed = error => ({
    type: nameConst.ROOM_CALL_FAILED,
    ...error,
});

export const roomCallSelected = data => ({
    type: nameConst.ROOM_CALL_SELECTED,
    room: data,
});

export const roomCallSelectedSuccess = data => ({
    type: nameConst.ROOM_CALL_SELECTED_SUCCESS,
    room: data,
});

export const roomCallSelectedFailed = error => ({
    type: nameConst.ROOM_CALL_SELECTED_FAILED,
    ...error,
});
