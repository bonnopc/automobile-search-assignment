const actionShowSnackbar = ({ message, secondaryMessage, type }) => dispatch => {
    dispatch({
        type: 'SHOW_SNACKBAR_MESSAGE',
        payload: { message, type, secondaryMessage }
    })
}

export default actionShowSnackbar