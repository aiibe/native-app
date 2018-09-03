import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { posts } from './reducers/Content';
import { auth } from './reducers/Auth'

const reducers = combineReducers({ posts, auth })
const store = createStore(reducers, applyMiddleware(thunk))
export default store