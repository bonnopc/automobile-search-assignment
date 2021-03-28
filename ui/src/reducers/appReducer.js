import { HIDE_SNACKBAR_MESSAGE, SHOW_SNACKBAR_MESSAGE } from "./constants"

const initialState = {
    snackbar: {
        message: "",
        type: "",
        secondaryMessage: ""
    },
}

const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SHOW_SNACKBAR_MESSAGE:
            return { ...state, snackbar: { message: payload && payload.message, type: payload && payload.type, secondaryMessage: payload && payload.secondaryMessage } }

        case HIDE_SNACKBAR_MESSAGE:
            return { ...state, snackbar: { message: "", type: "", secondaryMessage: "" } }
    
        default:
            return state
    }
}

export default appReducer