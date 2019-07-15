// List of all reducers

import {combineReducers} from 'redux'
import userReducer from './UserReducer/UserReducer'

export default combineReducers({
    user: userReducer
})