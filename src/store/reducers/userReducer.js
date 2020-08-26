let iniState = {
    user:{}
}

export default function userReducer(state = iniState, action){
    switch(action.type){
        case "User":
            return {
                user:action.user
            }
        case "UserErr":
            console.log(action.err);
            return state
        default:
            return state
    }
}