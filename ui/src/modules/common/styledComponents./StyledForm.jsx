import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    formRoot: {
        [theme.breakpoints.up("sm")]: {
            marginLeft: "auto",
            marginRight: "auto",
            width: "30rem"
        }
    },
    input: {
        marginTop: "1rem"
    },
    inputWithLabel: {
        marginTop: "1rem !important",
        textAlign: "center",
        
        [theme.breakpoints.up("sm")]: {
            textAlign: "left",
        }
    }
}))

export default function StyledForm({ children }){
    const classes = useStyles()
    return children(classes)
}