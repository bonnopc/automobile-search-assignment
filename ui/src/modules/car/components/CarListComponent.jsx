import SearchBox from "modules/home/components/SearchBox";
import { makeStyles } from "@material-ui/core/styles"
import { useLocation } from "react-router";

const useStyles = makeStyles(theme => ({
    searchContainer: {
        display: "flex",
        justifyContent: "center",
        
    },
    textInput: {
        margin: "0 2rem",

        [theme.breakpoints.up("sm")]: {
            margin: "0 auto",
            width: "40rem"
        },

        [`& svg`]: {
            [theme.breakpoints.up("sm")]: {
                fontSize: "1.5rem"
            }
        },

        [`& input`]: {
            textAlign: "center",
            fontSize: "1.25rem",
            
            [theme.breakpoints.up("sm")]: {
                fontSize: "2rem"
            }
        },
    }
}))

export default function CarListComponent(props){
    const classes = useStyles()
    const { search } = useLocation()
    
    const initialSearchValue = new URLSearchParams(search).get("car")

    return (
        <div>
            <div className={classes.searchContainer}>
                <SearchBox
                    initialValue={initialSearchValue}
                    placeholder="Search your car"
                    type="search"
                    disableHelperText
                    hideSubmitButton
                    className={classes.textInput}
                />
            </div>
        </div>
    )
}