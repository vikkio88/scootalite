import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import player from './reducers/player';
import podcasts from './reducers/podcasts';

const reducers = combineReducers({
    player,
    podcasts
});


const middlewares = [thunk];
export const store = compose(
    applyMiddleware(...middlewares)
)(createStore)(reducers);