/* eslint-disable no-param-reassign */
import produce from 'immer';
import * as nameConst from './const';

export const initialState = {
    error: null,
    rooms: null,
    roomSelected: null,
    roomUpdated: null,
    isLoading: true,
};

const roomReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case nameConst.ROOM_SELECTED_SUCCESS:
                draft.roomSelected = action.room;
                draft.error = initialState.error;
                return draft;
            case nameConst.ROOM_SELECTED_FAILED:
                draft.roomSelected = initialState.roomSelected;
                return draft;
            case nameConst.ROOM_SUCCESS:
                const { rooms } = action.query.data;
                draft.rooms = rooms;
                draft.isLoading = action.query.loading;
                draft.error = initialState.error;
                return draft;
            case nameConst.ROOM_FAILED:
                draft.rooms = initialState.rooms;
                draft.isLoading = initialState.isLoading;
                draft.error = action.error;
                return draft;
            case nameConst.ROOM_UPDATED_SUCCESS:
                const { updateRoom } = action.query.data;
                draft.error = initialState.error;
                draft.roomUpdated = updateRoom;
                return draft;
            case nameConst.ROOM_UPDATED_FAILED:
                draft.error = action.error;
                draft.roomUpdated = initialState.roomUpdated;
                return draft;
            default:
                return draft;
        }
    });

export default roomReducer;
