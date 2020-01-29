import { createAction } from '@reduxjs/toolkit';
import * as nameConst from './const';

const loadingOpen = createAction(nameConst.COMMON_LOADING_OPEN, () => ({
    payload: { isLoading: true },
}));
const loadingClose = createAction(nameConst.COMMON_LOADING_CLOSE, () => ({ payload: { isLoading: false } }));

export { loadingOpen, loadingClose };
