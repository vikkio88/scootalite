import {SELECT_PODCAST, PLAY, PAUSE, STOP} from  '../actions';

const initialState = {
    selectedPodcast: null,
    playing: false,
    originalTitle: null
};
export default function game(state = initialState, action = {}) {
    switch (action.type) {
        case PLAY:
            const newState = {playing: true};
            if (!state.originalTitle) {
                newState.originalTitle = document.title;
            }
            document.title = `► - ${state.selectedPodcast.name}`;
            return {
                ...state,
                ...newState
            };
        case PAUSE:
            document.title = `■ - ${state.selectedPodcast.name}`;
            return {
                ...state,
                playing: false
            };
        case STOP:
            document.title = state.originalTitle;
            return {
                ...state,
                selectedPodcast: null,
                playing: false
            };
        case SELECT_PODCAST:
            return {
                ...state,
                selectedPodcast: action.data,
                playing: true
            };
        default:
            return state;
    }
}