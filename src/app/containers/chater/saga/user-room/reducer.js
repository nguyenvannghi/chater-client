/* eslint-disable no-param-reassign */
import produce from 'immer';
import * as nameConst from './const';

export const initialState = {
    error: null,
    userRooms: null,
    isLoading: true,
    userRoomUpdated: null,
    userRoomAdded: null,
};

const userRoomReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case nameConst.USER_ROOM_SUCCESS:
                const { userRooms } = action.query.data;
                draft.userRooms = userRooms;
                draft.isLoading = action.query.loading;
                draft.error = initialState.error;
                return draft;
            case nameConst.USER_ROOM_FAILED:
                draft.userRooms = initialState.userRooms;
                draft.isLoading = initialState.isLoading;
                draft.error = action.error;
                return draft;
            case nameConst.USER_ROOM_UPDATED_SUCCESS:
                const { updateUserRoom } = action.query.data;
                draft.error = initialState.error;
                draft.userRoomUpdated = updateUserRoom;
                return draft;
            case nameConst.USER_ROOM_UPDATED_FAILED:
                draft.error = action.error;
                draft.userRoomUpdated = initialState.userRoomUpdated;
                return draft;
            case nameConst.USER_ROOM_ADDED_SUCCESS:
                const { addUserRoom } = action.query.data;
                draft.error = initialState.error;
                draft.userRoomAdded = addUserRoom;
                return draft;
            case nameConst.USER_ROOM_ADDED_FAILED:
                draft.error = action.error;
                draft.userRoomAdded = initialState.userRoomAdded;
                return draft;
            default:
                return draft;
        }
    });

export default userRoomReducer;
