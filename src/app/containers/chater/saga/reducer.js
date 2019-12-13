/* eslint-disable no-param-reassign */
import produce from 'immer';
import * as nameConst from './const';

export const initialState = {
    error: null,
    data: null,
};

const roomReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case nameConst.ROOM_CALL_SUCCESS:
                draft.data = action.data;
                draft.error = initialState.error;
                return draft;
            case nameConst.ROOM_CALL_FAILED:
                draft.data = initialState.data;
                draft.error = action.error;
                return draft;
            default:
                return draft;
        }
    });

export default roomReducer;
