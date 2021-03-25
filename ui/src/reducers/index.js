import carReducer from "modules/car/reducer"
import { combineReducers } from "redux"

export default combineReducers({
    car: carReducer,
})