import apolloClient from "libs/apolloClient"
import createCar from "../gql/createCar"

const actionCreateCar = car => async dispatch => {
    try {
        console.log({ car })
        const { image, ...restInfo } = car

        console.log({ image })


        const createResponse = await apolloClient.mutate({
            mutation: createCar,
            context: {
                hasUpload: true
            },
            variables: { 
                car: restInfo,
                image 
            }
        })

        console.log("createResponse", createResponse)
    } catch (error) {
        console.error("Error in actionCreateCar", error)
    }
}

export default actionCreateCar