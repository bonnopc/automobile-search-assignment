import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    container: {
        padding: "4rem"
    }
}))

export default function CommonCard({ className, children, ...restProps }){
    const classes = useStyles()

    return (
        <Card 
            className={`${classes.container} ${className ? className : ''}`}
            {...restProps}
        >
            { children }
        </Card>
    )
}