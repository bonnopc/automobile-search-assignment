import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    headers: {
        display: "flex",
        marginBottom: "0.5rem",
        alignItems: "center",
    },
    avatar: {
        marginRight: "1rem",
    }
})

export default function InlineLoader(){
    const classes = useStyles()

    return (
        <>
            <div className={classes.headers}>
                <div className={classes.avatar}>
                    <Skeleton variant="circle" width="5rem" height="5rem" />
                </div>
                <div>
                    <Skeleton width="8rem" />
                    <Skeleton width="12rem" />
                    <Skeleton width="6rem" />
                </div>
            </div>
            {/* <Skeleton variant="rect" height="5vh"/> */}
            <Skeleton />
            <Skeleton />
            <Skeleton width="90%" />
            <Skeleton />
            <Skeleton width="90%" />
            <Skeleton width="50%" />
            <Skeleton width="20%" />
        </>
    )
}