export const SELECT_PODCAST = 'select_podcast';

export const selectPodcast = podcast => {
    return {
        type: SELECT_PODCAST,
        data: podcast
    }
};

