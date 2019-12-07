import produce from 'immer';
import { COMMON_LOADING_OPEN, COMMON_LOADING_CLOSE } from './const';

export const initialState = {
    isLoading: false,
};

const Loading = (state = initialState, action) => {
    switch (action.type) {
        case COMMON_LOADING_OPEN:
        case COMMON_LOADING_CLOSE:
            return produce(state, draft => {
                draft.isLoading = action.isLoading;
            });
        default:
            return state;
    }
};

export default Loading;
