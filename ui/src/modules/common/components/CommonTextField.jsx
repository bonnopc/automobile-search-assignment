import React from "react"
import TextField from "@material-ui/core/TextField"

export default function CommonTextField(props){
    const { errorText, disableFullWidth, ...restProps } = props

    return (
        <TextField
            variant="outlined"
            fullWidth={!disableFullWidth}
            error={Boolean(errorText)}
            helperText={errorText}
            { ...restProps }
        />
    )
}