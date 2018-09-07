

export function auth(state=null, action){
	switch(action.type){
		case "AUTH_RECEIVED":
			return action.payload
		default:
			return state
	}
}