import { SET_CARS } from "./constants"

const initialState = {
    car: []
}

const carReducer = (state = initialState, { type, payload }) => {
    switch (type) {        
        case SET_CARS:
            return { ...state, cars: payload }
   
        default:
            return state
    }
}

export default carReducer