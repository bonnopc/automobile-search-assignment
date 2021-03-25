import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import IconButton from "@material-ui/core/IconButton";
import useDebouncedEffect from "helpers/hooks/useDebouncedEffect";
// import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

export default function SearchBox({
    className, onDebounce, onSubmit, disableHelperText,
    initialValue, hideSubmitButton, ...restProps
}){
    const [value,setValue] = useState(initialValue ? initialValue : "")

    useDebouncedEffect(onDebounce ? 
        () => onDebounce(value) : () => null,800,[value]);

    const handleChange = event => {
        setValue(event.target.value)
    }

    const handleSubmit = event => {
        if(event) event.preventDefault()
        if(onSubmit) onSubmit(value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                value={value}
                onChange={handleChange}
                className={className}
                InputProps={{
                    endAdornment: !hideSubmitButton && value && (
                        <InputAdornment>
                            <IconButton
                                type="submit"
                            >
                                <SearchOutlinedIcon/>
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                type="text"
                helperText={!disableHelperText && value && "Press 'Enter' to search"}
                {...restProps}
            />
        </form>
    )
}