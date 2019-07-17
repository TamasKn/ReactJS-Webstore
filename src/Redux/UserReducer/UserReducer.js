import {userActionTypes} from './UserActionTypes'

const INITIAL_STATE = {
    userData: null
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                userData: action.payload
            }
        default:
            return state
    }
}

export default userReducer