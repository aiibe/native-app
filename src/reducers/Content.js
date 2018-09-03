const initialState = {
	loading: false,
	items:[{
      id: 3,
      title: "Wowww",
      type: "image",
      media: "https://i.imgur.com/WHnh74Q.jpg",
      liked: false,
      comments: [
        {
          id: 116,
          author: "Alice",
          say: "Sout X"
        },
        {
          id: 126,
          author: "John",
          say: "Ohoho"
        }
      ],
      likes: 135
   }]
}

export function posts(state=initialState, action){
	let posts, post, index

	switch(action.type){

		case "LATEST_FETCHING":
			return {...state, loading: true}

		case "LATEST_FETCHED":
			posts = [...action.payload]
			return {...state, items:posts, loading: false}

		case "LIKE":
			posts = state.items.map( (each, index) => {
				if (each.id == action.payload.id){
					return {...each, liked: !each.liked, likes: each.likes+1}
				}
				return {...each}
			})
			return {...state, items:posts}

		case "UNLIKE":
			posts = state.items.map( (each, index) => {
				if (each.id == action.payload.id){
					return {...each, liked: !each.liked, likes: each.likes-1}
				}
				return {...each}
			})
			return {...state, items:posts}

		default:
			return state
	}
}