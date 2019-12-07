import { COMMON_LOADING_OPEN, COMMON_LOADING_CLOSE } from './const';

export const loadingOpen = () => ({
    type: COMMON_LOADING_OPEN,
    isLoading: true,
});

export const loadingClose = () => ({
    type: COMMON_LOADING_CLOSE,
    isLoading: false,
});
