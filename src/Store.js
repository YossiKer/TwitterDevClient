import { createStore, combineReducers, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import TweetsReducer from './Reducers/TweetsReducer';

import { getTweets } from './Actions/TweetsActions';

const rootReducer = combineReducers({
    tweets: TweetsReducer
});

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(rootReducer, middleware);

export default store;