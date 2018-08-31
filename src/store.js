import { createStore, combineReducers } from 'redux';
import { posts } from './reducers/Content';
import { auth } from './reducers/Auth'

const reducers = combineReducers({ posts, auth })
const store = createStore(reducers)
export default store