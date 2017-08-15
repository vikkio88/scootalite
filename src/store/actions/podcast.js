import {services} from '../../libs/services';
export const SELECT_PODCAST = 'select_podcast';
export const FETCH_TRENDS_SUCCESS = 'fetch_trends_success';
export const FETCH_SHOW_SUCCESS = 'fetch_show_success';
export const FETCH_MORE_PODCASTS_SUCCESS = 'fetch_more_podcasts_success';

export const selectPodcast = podcast => {
    return {
        type: SELECT_PODCAST,
        data: podcast
    }
};

export const remoteFetchTrends = () => {
    return dispatch => {
        services.show.getAll()
            .then(trendingShows => dispatch(fetchTrendsSuccess({trendingShows})));
    }
};

export const remoteFetchShow = slug => {
    return dispatch => {
        services.show.getBySlug(slug)
            .then(show => dispatch(fetchShowSuccess({show})));
    }
};

export const remoteFetchMorePodcasts = (showId, page) => {
    return dispatch => {
        services.show.getPodcastsById(showId, page)
            .then(data => dispatch(fetchMorePodcastsSuccess(data)));
    }
};

export const fetchMorePodcastsSuccess = (podcasts = []) => {
    return {
        type: FETCH_MORE_PODCASTS_SUCCESS,
        data: podcasts
    };
};

export const resetShow = () => {
    return fetchShowSuccess({show: null});
};

export const fetchShowSuccess = data => {
    return {
        type: FETCH_SHOW_SUCCESS,
        data
    }
};

export const fetchTrendsSuccess = data => {
    return {
        type: FETCH_TRENDS_SUCCESS,
        data
    }
};
