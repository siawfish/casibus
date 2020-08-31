let iniState = {
    user:{},
    users:[]
}

export default function userReducer(state = iniState, action){
    switch(action.type){
        case "User":
            return {
                ...state,
                user:action.user
            }
        case "UserErr":
            console.log(action.err);
            return state
        case "AllUsers":
            return {
                ...state,
                users:action.users
            }
        case "Followed":
            return state
        case "FollowErr":
            console.log("hi")
            return state
        default:
            return state
    }
}