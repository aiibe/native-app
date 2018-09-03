import {fetchUpdates} from './Content'

export function newUpdates(){
	return dispatch => {
		return dispatch({type:"UPDATES_AVAILABLE"})
	}
}

export function getUpdates(){
	return dispatch => {
		dispatch(fetchUpdates())
		return dispatch({type:"FETCH_UPDATES"})
	}
}