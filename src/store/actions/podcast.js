export const SELECT_PODCAST = 'select_podcast';
export const FETCH_TRENDS_SUCCESS = 'fetch_trends_success';

export const selectPodcast = podcast => {
    return {
        type: SELECT_PODCAST,
        data: podcast
    }
};

export const fetchTrendsSuccess = trends => {
    return {
        type: FETCH_TRENDS_SUCCESS,
        data: trends
    }
};
