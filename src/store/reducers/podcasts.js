import {FETCH_TRENDS_SUCCESS, FETCH_SHOW_SUCCESS} from '../actions';

const initialState = {
    show: null,
    trendingShows: [],
    trendingPodcasts: []
};
export default function podcasts(state = initialState, action = {}) {
    switch (action.type) {
        case FETCH_TRENDS_SUCCESS:
        case FETCH_SHOW_SUCCESS:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}