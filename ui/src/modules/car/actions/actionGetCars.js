import apolloClient from "libs/apolloClient"
import getCars from "../gql/getCars"

const actionGetCars = () => async dispatch => {
    try {
        const carResponse = await apolloClient.query({
            query: getCars
        })

        console.log("carResponse", carResponse)
    } catch (error) {
        console.error("Error in getCars", error)
    }
}

export default actionGetCars