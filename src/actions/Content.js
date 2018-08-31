export function init(payload){
	return {
		type: 'INITIAL_LOAD',
		payload
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