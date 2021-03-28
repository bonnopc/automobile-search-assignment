import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import PriorityHighOutlinedIcon from '@material-ui/icons/PriorityHighOutlined';
import { useHistory } from "react-router";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10rem"
    },
    icon: {
        fontSize: "5rem",
        color: theme.palette.text.secondary
    },
    addButton: {
        marginTop: "3rem"
    }
}))

export default function NoCarFound({ searchValue }){
    const classes = useStyles()
    const history = useHistory()

    const goToAddCar = () => {
        history.push("/car/add")
    }
    
    return (
        <div className={classes.root}>
            <PriorityHighOutlinedIcon
                className={classes.icon}
            />
            <Typography
                variant="h4"
                component="h3"
                align="center"
                color="textSecondary"
            >No Car Found!</Typography>
            <Typography
                variant="h5"
                component="h3"
                align="center"
                color="textSecondary"
            >{ searchValue ? `We can't find any car named '${searchValue}'.` : "Try searching by a keyword." }</Typography>

            <Typography
                variant="body1"
                component="p"
                color="textSecondary"
            >OR</Typography>
            <Button
                startIcon={<AddOutlinedIcon fontSize="large"/>}
                size="large"
                variant="outlined"
                color="primary"
                className={classes.addButton}
                onClick={goToAddCar}
            >
                Add A Car
            </Button>
        </div>
    )
}