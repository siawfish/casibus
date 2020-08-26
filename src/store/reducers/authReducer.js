let iniState = {
    status:false,
    signupErr:'',
    signinErr:''
}

export default function authReducer(state = iniState, action){
    switch(action.type){
        case 'AuthSuccess':
            return{
                status:true,
            }
        case 'AuthErr_SU':
            return {
                signupErr:action.err
            }
        case 'AuthErr_SI':
            return {
                signinErr:action.err
            }
        case 'SignedOut':
            return {
                status:false,
                err:''
            }
        default:
            return state
            
    }
}
