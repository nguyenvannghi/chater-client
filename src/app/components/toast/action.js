import { OPEN_TOAST, INIT_TOAST } from './const';

export const openToast = (typeToast, message, isOpen) => {
    return {
        type: OPEN_TOAST,
        typeToast,
        message,
        isOpen,
    };
};

export const initToast = () => ({
    type: INIT_TOAST,
});
