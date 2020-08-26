let iniState = {
    signupErr:'',
    signinErr:''
}

export default function authReducer(state = iniState, action){
    switch(action.type){
        case 'AuthSuccess':
            return state
        case 'AuthErr_SU':
            return {
                signupErr:action.err
            }
        case 'AuthErr_SI':
            return {
                signinErr:action.err
            }
        case 'SignedOut':
            return state
        default:
            return state
    }
}
