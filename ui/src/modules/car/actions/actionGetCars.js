import ApiClient from "libs/apiClient"
import { SET_CARS } from "../reducer/constants"

const actionGetCars = () => async dispatch => {
    try {
        const carResponse = await ApiClient('/cars')
                                    .then(res => res.result)

        return dispatch({
            type: SET_CARS,
            payload: carResponse
        })
    } catch (error) {
        console.error("Error in getCars", error)
    }
}

export default actionGetCars