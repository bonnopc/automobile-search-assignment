const actionHideSnackbar = () => dispatch => {
    dispatch({
        type: 'HIDE_SNACKBAR_MESSAGE',
        payload: ""
    })
}

export default actionHideSnackbar