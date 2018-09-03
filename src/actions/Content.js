// Actions
import axios from 'axios';
import {source} from '../../Settings';

export function fetchUpdates(){
	return dispatch => {
		dispatch({type: 'LATEST_FETCHING'})

		return axios.get(source.fakePosts)
			.then( res => {
				return dispatch({type: "LATEST_FETCHED", payload: res.data.posts})
			})
			.catch( err => {
				console.log('Content Action Error:', err)
				return dispatch({type: "LATEST_ERROR", payload: err})
			})
	}
}


export function like(payload){
	return {
		type: 'LIKE',
		payload
	}
}

export function unlike(payload){
	return {
		type: 'UNLIKE',
		payload
	}
}