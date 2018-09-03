export function update(state=false, action){
	switch(action.type){
		case "UPDATES_AVAILABLE":
			return true
		case "FETCH_UPDATES":
			return false
		default:
			return state
	}
}