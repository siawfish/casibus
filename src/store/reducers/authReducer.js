let iniState = {
    status:false,
    err:''
}

export default function authReducer(state = iniState, action){
    switch(action.type){
        case 'AuthSuccess':
            return{
                status:true,
            }
        case 'AuthErr':
            return {
                err:action.err
            }
        case 'SignedOut':
            return {
                status:false,
                err:''
            }
        default:
            return {
                state
            }
    }
}