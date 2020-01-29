import { createAction } from '@reduxjs/toolkit';
import * as nameConst from './const';

const openToast = createAction(nameConst.OPEN_TOAST, (typeToast, message, isOpen) => ({
    payload: { typeToast, message, isOpen },
}));
const initToast = createAction(nameConst.INIT_TOAST);

export { openToast, initToast };
