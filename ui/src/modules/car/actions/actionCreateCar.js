import ApiClient from "libs/apiClient";

const actionCreateCar = car => async dispatch => {
    try {

        const formData = new FormData();

        Object.keys(car).forEach(key => {
            formData.append(key, car[key])
        })

        const createResponse = await ApiClient('/car/create', {
            method: "post",
            body: formData,
        }).then(res => res.result)

        return createResponse
    } catch (error) {
        console.error("Error in actionCreateCar", error)
    }
}

export default actionCreateCar