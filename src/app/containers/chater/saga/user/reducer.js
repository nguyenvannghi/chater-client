/* eslint-disable no-param-reassign */
import produce from 'immer';
import * as nameConst from './const';

export const initialState = {
    error: null,
    users: null,
    isLoading: true,
};

const userReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case nameConst.USER_CALL_SUCCESS:
                const { users } = action.query.data;
                draft.users = users;
                draft.isLoading = action.query.loading;
                draft.error = initialState.error;
                return draft;
            case nameConst.USER_CALL_FAILED:
                draft.users = initialState.users;
                draft.isLoading = initialState.isLoading;
                draft.error = action.error;
                return draft;
            default:
                return draft;
        }
    });

export default userReducer;
