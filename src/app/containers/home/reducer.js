/* eslint-disable no-param-reassign */
import produce from 'immer';
import * as nameConst from './const';

export const initialState = {
    error: null,
    data: null,
};

// const employeeReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case nameConst.EMPLOYEE_CALL_SUCCESS:
//             return produce(state, draft => {
//                 draft.data = action.data;
//                 draft.error = initialState.error;
//             });
//         case nameConst.EMPLOYEE_CALL_FAILED:
//             return produce(state, draft => {
//                 draft.data = initialState.data;
//                 draft.error = action.error;
//             });
//         default:
//             return state;
//     }
// };

const employeeReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case nameConst.EMPLOYEE_CALL_SUCCESS:
                draft.data = action.data;
                draft.error = initialState.error;
                return draft;
            case nameConst.EMPLOYEE_CALL_FAILED:
                draft.data = initialState.data;
                draft.error = action.error;
                return draft;
            default:
                return draft;
        }
    });

export default employeeReducer;
