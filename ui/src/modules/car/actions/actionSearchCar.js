import { SET_SEARCH_RESULT, TOGGLE_CAR_SEARCH_LOADER } from "../reducer/constants"

const actionSearchCar = (text,carList = []) => dispatch => {
    try {
        let result = []

        if(text){
            dispatch({ type: TOGGLE_CAR_SEARCH_LOADER, payload: true })
            const regex = new RegExp(text.toLowerCase()+'*');
            result = carList.filter(car => car.name && car.name.toLowerCase().match(regex))

            console.log("search result", result)

            
        } else {
            result = [...carList]
        }

        return dispatch({
            type: SET_SEARCH_RESULT,
            payload: result
        })

    } catch (error) {
        console.error("Error in actionSearchCar", error)
    }
}

export default actionSearchCar