export function posts(state=[], action){
	let posts, post, index

	switch(action.type){
		case "LATEST_FETCHED":
			posts = [...action.payload]
			return posts
		case "LIKE":
			posts = state.map( (each, index) => {
				if (each.id == action.payload.id){
					return {...each, liked: !each.liked, likes: each.likes+1}
				}
				return {...each}
			})
			return posts
		case "UNLIKE":
			posts = state.map( (each, index) => {
				if (each.id == action.payload.id){
					return {...each, liked: !each.liked, likes: each.likes-1}
				}
				return {...each}
			})
			return posts
		default:
			return state
	}
}