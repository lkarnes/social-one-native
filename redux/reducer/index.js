export const initialState = {
    userData: {
        id: null,
        username: null,
        email: null,
        first_name: null,
        last_name: null,
        profile_picture: null
    },
    feedArray: [],
    friendList: null,
    likes: null

}


export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case"SIGN_IN":
            return {
                ...state,
                userData: action.payload.userData,
                token: action.payload.token,
            }
        case "ADD_POST":
            return {
                ...state,
                feedArray: [action.payload , ...state.feedArray]
            }
        case "FILL_FEED":
            return {
                ...state,
                feedArray: [...action.payload]
            }
        case "ADD_TO_FEED":
            return {
                ...state,
                feedArray: [...state.feedArray, ...action.payload]
            }
        case "REMOVE_FROM_FEED":
            return {
                ...state,
                feedArray: state.feedArray.filter(p => p.id !== action.payload)
            }
        case "GET_FRIENDS":
            return {
                ...state,
                friendList: action.payload
            }
        case "REMOVE_FRIEND":
            return {
                ...state,
                friendList: state.friendList.filter(f => f.id !== action.payload)
            }
        case "ADD_FRIEND":
            return {
                ...state,
                friendList: [action.payload , ...state.friendList]
            }
        case "LIKE_POST":
            if(state.likes.includes(action.payload)){
                var newLikes = state.likes
                var index = state.likes.indexOf(action.payload)
                newLikes.pop(index)
                return {
                    ...state,
                    likes: newLikes
                }
            }
            return {
                ...state,
                likes: [action.payload, ...state.likes]
            }
        case "LOAD_LIKES":
            return {
                ...state,
                likes: [...action.payload]
            }
        case "CLEAR_STATE":
            return {
                ...initialState
            }
        case "SET_TOKEN":
            return {
                ...state,
                token : action.payload
            }
        case "SET_ID": 
            return {
                ...state,
                userData : {
                    ...state.userData,
                    id: action.payload
                }
            }
        default:
            return state
        }
}