import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import authReducer from './authReducer'
import userReducer from './userReducer'
import caseReducer from './caseReducer'
import contributionReducer from './contributionReducer'

const rootReducer = combineReducers({
    auth:authReducer,
    user:userReducer,
    cases:caseReducer,
    contributions: contributionReducer,
    firebase:firebaseReducer
})

export default rootReducer