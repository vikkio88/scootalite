import {services} from '../../libs/services';
import {flashError} from './app';
import {historyHelper} from "../../libs/utils/historyHelper";

export const SELECT_PODCAST = 'select_podcast';
export const FETCH_TRENDS_SUCCESS = 'fetch_trends_success';
export const FETCH_SHOW_SUCCESS = 'fetch_show_success';
export const FETCH_MORE_PODCASTS_SUCCESS = 'fetch_more_podcasts_success';
export const SYNC_HISTORY = 'sync_history';

export const selectPodcast = (podcast, initialSeek) => {
    return {
        type: SELECT_PODCAST,
        data: {podcast, initialSeek}
    }
};

export const remoteFetchTrends = () => {
    return dispatch => {
        services.show.getAll()
            .then(trendingShows => dispatch(fetchTrendsSuccess({trendingShows})));
    }
};

export const remoteFetchPodcast = (slug, initialSeek = null) => {
    return (dispatch) => {
        services.podcast.getBySlug(slug)
            .then(podcast => {
                if (podcast) {
                    dispatch(selectPodcast(podcast, initialSeek));
                } else {
                    dispatch(flashError("Invalid podcast url"));
                }
            });
    }
};

export const remoteFetchShow = slug => {
    return dispatch => {
        services.show.getBySlug(slug)
            .then(show => dispatch(fetchShowSuccess({show})));
    }
};

export const remoteParseFeed = url => {
    return dispatch => {
        services.show.parse(url)
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

export const loadHistory = () => {
    const data = historyHelper().getHistory();
    return {
        type: SYNC_HISTORY,
        data
    };
};

export const deleteHistory = () => {
    const helper = historyHelper();
    helper.clearHistory();
    const data = historyHelper().getHistory();
    return {
        type: SYNC_HISTORY,
        data
    };
};

export const pushPlayed = podcast => {
    const helper = historyHelper();
    helper.pushPodcast(podcast);

    const data = helper.getHistory();
    return {
        type: SYNC_HISTORY,
        data
    };
};

export const resumeLastPlayed = (podcast, seek) => {
    return dispatch => {
        dispatch(remoteFetchPodcast(podcast.slug, seek));
        historyHelper().deleteLastPlayed();
        dispatch(loadHistory())
    };
};
