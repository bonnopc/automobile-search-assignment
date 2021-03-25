import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import logger from "redux-logger"

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
    let store = createStore(persistedReducer, {}, applyMiddleware(thunk, logger))
    let persistor = persistStore(store)
    return { store, persistor }
}

export default configureStore