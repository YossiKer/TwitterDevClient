import { createStore, combineReducers, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import TweetsReducer from './Reducers/TweetsReducer';
import LikesReducer from './Reducers/LikesReducer';
import RetweetsReducer from './Reducers/RetweetsReducer';

const rootReducer = combineReducers({
    tweets: TweetsReducer,
    likes: LikesReducer,
    retweets: RetweetsReducer
});

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(rootReducer, middleware);

export default store;