export const NEW_INFO = 'new_info';
export const NEW_ERROR = 'new_error';
export const CLEAR_ERROR = 'clear_error';
export const CLEAR_INFO = 'clear_info';

export const flashError = message => {
    return {
        type: NEW_ERROR,
        data: message
    }
};
export const finishedFlashError = () => {
    return {
        type: CLEAR_ERROR,
        data: null
    }
};
export const flashInfo = message => {
    return {
        type: NEW_INFO,
        data: message
    }
};

export const finishedFlashInfo = () => {
    return {
        type: CLEAR_INFO,
        data: null
    }
};
