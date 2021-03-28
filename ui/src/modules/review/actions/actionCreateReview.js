import ApiClient from "libs/apiClient"

const actionCreateReview = review => async () => {
    try {
        const createResponse = await ApiClient("/review/create", {
            method: "post",
            body: JSON.stringify(review),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        
        }).then(res => res.result)

        return createResponse
    } catch (error) {
        console.error("Err in actionCreateReview", error)
    }
}

export default actionCreateReview