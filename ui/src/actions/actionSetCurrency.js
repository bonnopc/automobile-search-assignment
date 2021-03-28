import { supportedCurrencies } from "modules/common/components/CurrencyConverterDropdown"
import { SET_CURRENCY, SET_CURRENCY_RATES } from "reducers/constants"

const actionSetCurrency = val => async dispatch => {
    dispatch({
        type: SET_CURRENCY,
        payload: val
    })

    try {
        const response = await fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${supportedCurrencies.join(",")}`);
        const data =  await response.json();

        if(data?.rates){
            dispatch({
                type: SET_CURRENCY_RATES,
                payload: data.rates
            })
        }
    } catch (error) {
        console.error("Err at exchangeratesapi", error)
    }
        
}

export default actionSetCurrency