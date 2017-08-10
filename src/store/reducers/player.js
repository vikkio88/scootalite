import {SELECT_PODCAST} from  '../actions';

const initialState = {
    selectedPodcast: null
};
export default function game(state = initialState, action = {}) {
    switch (action.type) {
        case SELECT_PODCAST:
            return {
                selectedPodcast: action.data
            };
        default:
            return state;
    }
}