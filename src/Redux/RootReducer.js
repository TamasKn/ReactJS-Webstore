
import {combineReducers} from 'redux'
import UserReducer from './UserReducer/UserReducer'
import CartReducer from './CartReducer/CartReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import directoryReducer from './Directory/DirectoryReducer'
import shopReducer from './Shop/ShopReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)