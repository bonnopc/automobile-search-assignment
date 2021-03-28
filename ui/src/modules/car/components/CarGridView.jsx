import { Grid } from "@material-ui/core"
import React from "react"
import { useCallback } from "react";
import { useHistory } from "react-router";
import CarSummaryCard from "./CarSummaryCard"

export default function CarGridView({
    items
}){
    const history = useHistory()

    const handleCardClick = useCallback(uid => {
        history.push(`/car/${uid}`)
    }, [history])

    return (
        <Grid container spacing={3}>
            {items.map((item,i) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={i}
                >
                    <CarSummaryCard
                        {...item}
                        onClick={handleCardClick}
                    />
                </Grid>
            ))}
        </Grid>
    )
}