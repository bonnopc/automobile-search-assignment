import carReducer from "modules/car/reducer"
import { combineReducers } from "redux"
import appReducer from "./appReducer"

export default combineReducers({
    car: carReducer,
    app: appReducer
})