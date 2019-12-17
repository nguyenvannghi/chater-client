/* eslint-disable no-param-reassign */
import produce from 'immer';
import * as nameConst from './const';

export const initialState = {
    error: null,
    isLogin: false,
};

const loginReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case nameConst.LOGIN_CALL_SUCCESS:
                draft.isLogin = true;
                draft.error = initialState.error;
                return draft;
            case nameConst.LOGIN_CALL_CANCELLED:
                draft.isLogin = false;
                draft.error = action.error;
                return draft;
            default:
                return draft;
        }
    });

export default loginReducer;
