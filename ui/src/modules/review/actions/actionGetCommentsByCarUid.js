import ApiClient from "libs/apiClient"

const actionGetCommentsByCarUid = carUid => async () => {
    try {
        const cars = await ApiClient(`/reviews/${carUid}`).then(res => res.result)

        if(cars) return cars
    } catch (error) {
        console.error("Err in actionGetCommentsByCarUid", error)
    }
}

export default actionGetCommentsByCarUid