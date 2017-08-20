import {NEW_INFO, NEW_ERROR, CLEAR_ERROR, CLEAR_INFO} from '../actions';

const initialState = {
    info: null,
    error: null
};
export default function notifications(state = initialState, action = {}) {
    switch (action.type) {
        case NEW_ERROR:
        case CLEAR_ERROR:
            return {
                ...state,
                error: action.data
            };
        case NEW_INFO:
        case CLEAR_INFO:
            return {
                ...state,
                info: action.data
            };
        default:
            return state;
    }
}