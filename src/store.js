import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { posts } from './reducers/Content';
import { auth } from './reducers/Auth';
import { update } from './reducers/Update';

const reducers = combineReducers({ posts, auth, update })
const store = createStore(reducers, applyMiddleware(thunk))
export default store