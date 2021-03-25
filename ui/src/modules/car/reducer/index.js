import { SET_CARS, TOGGLE_CAR_SEARCH_LOADER, SET_SEARCH_RESULT } from "./constants"

const initialState = {
    list: [],
    isLoading: false,
    searchResult: []
}

const carReducer = (state = initialState, { type, payload }) => {
    switch (type) {        
        case SET_CARS:
            return { ...state, list: payload }

        case TOGGLE_CAR_SEARCH_LOADER:
            return { ...state, isLoading: typeof payload !== "undefined" ? payload : !state.isLoading }

        case SET_SEARCH_RESULT:
            return { ...state, searchResult: payload }
   
        default:
            return state
    }
}

export default carReducer