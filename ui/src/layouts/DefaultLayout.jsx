import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import NavBar from "modules/common/components/NavBar"
import CommonSnackBar from "modules/common/components/CommonSnackBar"

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1
    },
    container: {
        padding: "1rem",

        ...NavBar.getContainerStyles(theme)
    }
}))

export default function DefaultLayout({ children, ...restProps }){
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <NavBar/>
            <CommonSnackBar {...restProps} />
            <div className={classes.container}>
                { children }
            </div>
        </div>
    )
}