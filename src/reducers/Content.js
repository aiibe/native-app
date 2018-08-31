export function posts(state=[], action){
	let posts, post, index

	switch(action.type){
		case "INITIAL_LOAD":
			posts = [...action.payload]
			return posts
		case "LIKE": // expected a post object in action.payload
			posts = state.map( (each, index) => {
				if (each.id == action.payload.id){
					return {...each, liked: !each.liked, likes: each.likes+1}
				}
				return {...each}
			})
			return posts
		case "UNLIKE": // expected a post object in action.payload
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