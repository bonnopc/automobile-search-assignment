import { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { NavHeight } from "modules/common/components/NavBar"
// import Typography from "@material-ui/core/Typography"
import SearchBox from "./SearchBox"
import { useHistory } from "react-router"

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: `calc(100vh - ${NavHeight}px - 3rem)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        textAlign: "center"
    },
    textField: {
        margin: "0 2rem",

        [theme.breakpoints.up("sm")]: {
            margin: "0 auto",
            width: "40rem"
        },

        [`& svg`]: {
            [theme.breakpoints.up("sm")]: {
                fontSize: "3rem"
            }
        },

        [`& input`]: {
            textAlign: "center",
            fontSize: "1.5rem",
            
            [theme.breakpoints.up("sm")]: {
                fontSize: "4rem"
            }
        },

        [`& .MuiFormHelperText-root`]: {
            textAlign: "center"
        }
    },
    heading: {
        fontSize: "1.5rem",

        [theme.breakpoints.up("sm")]: {
            fontSize: "4rem"
        }
    }
}))

export default function HomeComponent(props){
    const classes = useStyles()
    const history = useHistory()
    
    const getCars = async () => {
        await props.actionGetCars();
    } 

    useEffect(() => {
        props.actionResetSearchResult()
        getCars()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSubmitSearch = value => {
        history.push({
            pathname: "cars",
            search: `?car=${value}`
        })
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                {/* <Typography
                    align="center"
                    component="h2"
                    variant="h3"
                    gutterBottom
                    className={classes.heading}
                >Search your car</Typography> */}
                <SearchBox
                    className={classes.textField}
                    placeholder="Search your car"
                    autoFocus
                    onSubmit={handleSubmitSearch}
                />
            </div>
        </div>
    )
}