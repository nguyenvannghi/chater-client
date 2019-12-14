/* eslint-disable no-param-reassign */
import produce from 'immer';
import * as nameConst from './const';

export const initialState = {
    error: null,
    messages: null,
    isLoading: true,
};

const messageReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case nameConst.MESSAGE_CALL_SUCCESS:
                const { messages } = action.query.data;
                draft.messages = messages;
                draft.isLoading = action.query.loading;
                draft.error = initialState.error;
                return draft;
            case nameConst.MESSAGE_CALL_FAILED:
                draft.messages = initialState.messages;
                draft.isLoading = initialState.isLoading;
                draft.error = action.error;
                return draft;
            default:
                return draft;
        }
    });

export default messageReducer;
