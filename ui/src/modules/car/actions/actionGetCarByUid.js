const { default: ApiClient } = require("libs/apiClient")

const actionGetCarByUid = uid => async () => {
    try {
        const car = await ApiClient(`/car/${uid}`).then(res => res.result)

        return car
    } catch (error) {
        console.error("Err in actionGetCarByUid", error)
    }
}

export default actionGetCarByUid