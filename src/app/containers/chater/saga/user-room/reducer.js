/* eslint-disable no-param-reassign */
import produce from 'immer';
import * as nameConst from './const';

export const initialState = {
    error: null,
    userRooms: null,
    isLoading: true,
};

const userRoomReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case nameConst.USER_ROOM_SUCCESS:
                const { userRooms } = action.query.data;
                console.log(userRooms);
                draft.userRooms = userRooms;
                draft.isLoading = action.query.loading;
                draft.error = initialState.error;
                return draft;
            case nameConst.USER_ROOM_FAILED:
                draft.userRooms = initialState.userRooms;
                draft.isLoading = initialState.isLoading;
                draft.error = action.error;
                return draft;
            default:
                return draft;
        }
    });

export default userRoomReducer;
