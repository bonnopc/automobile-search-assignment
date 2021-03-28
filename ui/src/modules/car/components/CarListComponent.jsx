import SearchBox from "modules/home/components/SearchBox";
import { makeStyles } from "@material-ui/core/styles"
import { useLocation } from "react-router";
import CarGridView from "./CarGridView";
import { useState } from "react";
import NoCarFound from "./NoCarFound";

const useStyles = makeStyles(theme => ({
    searchContainer: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "3rem"
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
    const initialSearchValue = new URLSearchParams(search).get("car");
    const [ searchValue, setSearchValue ] = useState(initialSearchValue);

    const searchCar = value => {
        console.log("SEARCH CAR", value, initialSearchValue)
        setSearchValue(value)
        props.actionSearchCar(value,props.car.list)
    }

    return (
        <div>
            <div className={classes.searchContainer}>
                <SearchBox
                    initialValue={initialSearchValue}
                    placeholder="Search your car"
                    type="search"
                    disableHelperText
                    hideSubmitButton
                    onDebounce={searchCar}
                    className={classes.textInput}
                />
            </div>
            {
                props.car?.isLoading ?
                <div>Loading</div> :
                props.car?.searchResult?.length ?
                    <CarGridView
                        items={props.car?.searchResult}
                    /> :
                    <NoCarFound
                        searchValue={searchValue}
                    />
            }
            
        </div>
    )
}