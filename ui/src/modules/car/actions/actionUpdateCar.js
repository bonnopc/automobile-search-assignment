import ApiClient from "libs/apiClient";

const actionUpdateCar = car => async dispatch => {
    try {
        const formData = new FormData();

        Object.keys(car).forEach(key => {
            formData.append(key, car[key])
        })

        const createResponse = await ApiClient('/car/update', {
            method: "put",
            body: formData,
        }).then(res => res.result)

        return createResponse
    } catch (error) {
        console.error("Error in actionUpdateCar", error)
    }
}

export default actionUpdateCar