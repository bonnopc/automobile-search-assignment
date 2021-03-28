const { RESET_SEARCH_RESULT } = require("../reducer/constants")

const actionResetSearchResult = () => dispatch => {
    dispatch({ type: RESET_SEARCH_RESULT })
}

export default actionResetSearchResult