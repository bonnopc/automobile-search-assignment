import { HIDE_SNACKBAR_MESSAGE, SET_CURRENCY, SET_CURRENCY_RATES, SHOW_SNACKBAR_MESSAGE } from "./constants"

const initialState = {
    snackbar: {
        message: "",
        type: "",
        secondaryMessage: ""
    },
    currency: "USD",
    rates: {}
}

const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SHOW_SNACKBAR_MESSAGE:
            return { ...state, snackbar: { message: payload && payload.message, type: payload && payload.type, secondaryMessage: payload && payload.secondaryMessage } }

        case HIDE_SNACKBAR_MESSAGE:
            return { ...state, snackbar: { message: "", type: "", secondaryMessage: "" } }
        
        case SET_CURRENCY:
            return { ...state, currency: payload }

        case SET_CURRENCY_RATES:
            return { ...state, rates: payload }
    
        default:
            return state
    }
}

export default appReducer