import {SELECT_PODCAST, PLAY, PAUSE, STOP} from '../actions';
import {services} from '../../libs/services';

const initialState = {
    selectedPodcast: null,
    playing: false,
    initialSeek: null,
    originalTitle: null
};
export default function game(state = initialState, action = {}) {
    switch (action.type) {
        case PLAY:
            const newState = {playing: true};
            if (!state.originalTitle) {
                newState.originalTitle = document.title;
            }
            document.title = `▶️ ${state.selectedPodcast.name}`;
            return {
                ...state,
                ...newState
            };
        case PAUSE:
            document.title = `⏸️ ${state.selectedPodcast.name}`;
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
            const {podcast, initialSeek} = action.data;
            services.stats.push(`SELECTED ${podcast.slug}, seek: ${initialSeek}`);
            return {
                ...state,
                selectedPodcast: podcast,
                initialSeek,
                playing: false
            };
        default:
            return state;
    }
}
