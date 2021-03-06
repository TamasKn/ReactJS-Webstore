// Setup middleware between action and reducers

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './RootReducer'
import { persistStore } from 'redux-persist'

const middlewares = [logger] // Remove logger in production
export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store)

export default { store, persistor }