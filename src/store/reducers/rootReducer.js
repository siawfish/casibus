import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import authReducer from './authReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    auth:authReducer,
    user:userReducer,
    firebase:firebaseReducer
})

export default rootReducer