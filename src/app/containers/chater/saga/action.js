import * as nameConst from './const';

export const roomCall = () => ({
    type: nameConst.ROOM_CALL,
});

export const roomCallSuccess = rooms => ({
    type: nameConst.ROOM_CALL_SUCCESS,
    data: rooms,
});

export const roomCalFailed = error => ({
    type: nameConst.ROOM_CALL_FAILED,
    ...error,
});
