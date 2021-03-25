import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    spacer: {
        flexGrow: "1 !important"
    }
})

export default function Spacer(props){
    const classes = useStyles()

    return (
        <div className={classes.spacer}/>
    )
}