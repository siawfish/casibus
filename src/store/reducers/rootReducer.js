import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import authReducer from './authReducer'
import userReducer from './userReducer'
import caseReducer from './caseReducer'

const rootReducer = combineReducers({
    auth:authReducer,
    user:userReducer,
    cases:caseReducer,
    firebase:firebaseReducer
})

export default rootReducer