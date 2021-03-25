import { SET_SEARCH_RESULT } from "../reducer/constants"

const actionSearchCar = (text,carList = []) => dispatch => {
    try {
        if(text){
            const regex = new RegExp(text.toLowerCase()+'*');
            const result = carList.filter(car => car.name && car.name.toLowerCase().match(regex))

            console.log("search result", result)

            return dispatch({
                type: SET_SEARCH_RESULT,
                payload: result
            })
        }

        return;
    } catch (error) {
        console.error("Error in actionSearchCar", error)
    }
}

export default actionSearchCar