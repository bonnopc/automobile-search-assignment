import React from "react"
import Snackbar from '@material-ui/core/Snackbar'
import Slide from "@material-ui/core/Slide"
import SnackbarContent from "@material-ui/core/SnackbarContent"
import { makeStyles } from "@material-ui/core/styles"
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
    container: {
        "& .MuiSnackbarContent-root": {
            padding: "0.5rem 0.75rem 0.5rem 2rem",
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary
        }
    },

    content: {
        display: "flex",
        alignItems: "center",
        position: "relative",
        padding: "0 2rem 0 0",

        "& .close-button": {
            position: "absolute",
            top: 0,
            right: 0
        }
    },
    text: {
        maxWidth: "20rem"
    },
    loaderContainer: {
        width: "10rem"
    }
}))

function Content(props){
    const { classes, message, secondaryMessage, onClose, type } = props

    return (
        <div className={classes.content}>
            
            <div className={classes.text}>
                <Typography
                    component="h3"
                    variant="h6"
                    gutterBottom
                    color={type === "success" ? "primary" : "error"}
                >{ message }</Typography>
                { 
                    secondaryMessage ? (
                    <Typography
                        component="p"
                        variant="p"
                    >
                        { secondaryMessage }
                    </Typography>) : "" 
                }
            </div>

            <IconButton 
                aria-label="close" 
                className="close-button" 
                size="small"
                onClick={onClose}
            >
                <CloseIcon/>
            </IconButton>
        </div>
    )
}

function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
}

export default function CommonSnackBar(props){
    const { app } = props, classes = useStyles()

    // let backgroundColor = ""

    // if(app && app.snackbar && app.snackbar.type){
    //     if(app.snackbar.type.toLowerCase() === "success") backgroundColor = Theme.successColor
    //     else if(app.snackbar.type.toLowerCase() === "error") backgroundColor = Theme.errorColor
    // }

    const closeSnackbar = () => {
        props.actionHideSnackbar()
        // console.log("closeSnackbar")
    }

    return(
        <Snackbar
            open={Boolean(app && app.snackbar && app.snackbar.message)}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            autoHideDuration={5000}
            TransitionComponent={TransitionLeft}
            onExited={() => { console.log("Snackbar Exited") }}
            onClose={closeSnackbar}
            className={classes.container}
        >
            <SnackbarContent
                // style={{ backgroundColor }}
                message={(
                    <Content 
                        classes={classes}
                        type={app && app.snackbar && app.snackbar.type && app.snackbar.type.toLowerCase()}
                        onClose={closeSnackbar}
                        secondaryMessage={app && app.snackbar && app.snackbar.secondaryMessage} 
                        message={app && app.snackbar && app.snackbar.message} />
                )}
            />
        </Snackbar>
    )
}