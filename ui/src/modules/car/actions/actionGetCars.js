import apolloClient from "libs/apolloClient"
import getCars from "../gql/getCars"
import { SET_CARS } from "../reducer/constants"

const actionGetCars = () => async dispatch => {
    try {
        const carResponse = await apolloClient.query({
            query: getCars
        }).then(resp => resp.data.cars.result)

        console.log("carResponse", carResponse)

        return dispatch({
            type: SET_CARS,
            payload: carResponse
        })
    } catch (error) {
        console.error("Error in getCars", error)
    }
}

export default actionGetCars