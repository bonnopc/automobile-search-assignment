import ButtonBase from "@material-ui/core/ButtonBase"
import { makeStyles } from "@material-ui/core/styles"
import { useRef } from "react"
import FormHelperText from '@material-ui/core/FormHelperText';
import isValidURL from "helpers/isValidUrl";

const useStyles = makeStyles(theme => ({
    root: {
        border: "1px solid rgba(0, 0, 0, 0.23)",
        borderRadius: theme.shape.borderRadius,
        padding: "18.5px 14px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "15rem",
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.fontSize,
        color: theme.palette.text.secondary,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",

        "&.error": {
            color: theme.palette.error.main,
            borderColor: theme.palette.error.main,

        }
    },
    hidden: {
        display: "none"
    },
    imgPreview: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }
}))

export default function ImageInput({
    label, className, required, onChange, value, errorText
}){
    const classes = useStyles()
    const InputRef = useRef(null)

    const openFileExplorer = event => {
        if(event) event.stopPropagation()

        if(InputRef?.current) InputRef.current.click();
    }

    const handleFileChange = event => {
        const { files: [file], validity } = event.target;

        if(file && validity.valid) onChange(file)
    }

    return (
        <ButtonBase 
            className={`${classes.root} ${className ?? ""} ${errorText ? 'error' : ''}`}
            onClick={openFileExplorer}
            type="button"
        >
            

            {   value ?
                <img
                    src={isValidURL ? value : URL.createObjectURL(value)}
                    className={classes.imgPreview}
                    alt="uploaded file"
                /> : 
                `${ label ? label : "Click here to upload an image"}${required ? " *" : ""}`
            }

            {
                !value && errorText ?
                <FormHelperText error>
                    {errorText}
                </FormHelperText> : ""
            }

            <input 
                type="file" 
                accept="image/x-png,image/jpeg"
                className={classes.hidden}
                ref={InputRef}
                onChange={handleFileChange}
            />        
        </ButtonBase>    
    )
}