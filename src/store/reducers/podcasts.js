import {FETCH_TRENDS_SUCCESS, FETCH_SHOW_SUCCESS, FETCH_MORE_PODCASTS_SUCCESS, SYNC_HISTORY} from '../actions';

const initialState = {
    show: null,
    trendingShows: [],
    trendingPodcasts: [],
    history: {
        history: [],
        lastPlayed: {podcast: null, seek: null}
    }
};
export default function podcasts(state = initialState, action = {}) {
    switch (action.type) {
        case FETCH_TRENDS_SUCCESS:
        case FETCH_SHOW_SUCCESS: {
            return {
                ...state,
                ...action.data
            };
        }
        case FETCH_MORE_PODCASTS_SUCCESS: {
            const podcasts = [...state.show.podcasts, ...action.data];
            return {
                ...state,
                show: {
                    ...state.show,
                    podcasts
                }
            };
        }
        case SYNC_HISTORY: {
            const history = action.data;
            return {
                ...state,
                history
            }
        }
        default:
            return state;
    }
}
