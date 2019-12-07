import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectToast = state => state.reducerToastApp || initialState;
const makeSelectToastConfig = () => {
    return createSelector(selectToast, selectToast => {
        return {
            isOpen: selectToast.isOpen,
            typeToast: selectToast.typeToast,
            message: selectToast.message,
            hideDuration: selectToast.hideDuration,
        };
    });
};

export default makeSelectToastConfig;
