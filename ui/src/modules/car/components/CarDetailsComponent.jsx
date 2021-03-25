import CommonCard from "modules/common/components/CommonCard"
import PageHeader from "modules/common/components/PageHeader"
import { Fragment } from "react"
import { useParams } from "react-router"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Rating from '@material-ui/lab/Rating';
import CarCommentList from "./CarCommentList"
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    imgContainer: {
        width: "100%",
        height: "30rem",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "2rem"
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },
    ratingContainer: {
        display: "flex",
        alignItems: "center"
    }
})

const PHOTO_URL = "https://www.pngkey.com/png/detail/99-996330_black-and-white-girl-driving-a-car-clip.png"

export default function CarDetailsComponent(props){
    const classes = useStyles()
    const { uid } = useParams()

    return (
        <Fragment>
            <PageHeader
                hasBack
                withCard
            >
                Car Details
            </PageHeader>
            <CommonCard>
                <div className={classes.imgContainer}>
                    <img 
                        src={PHOTO_URL} 
                        alt="Car"
                        className={classes.img}
                    />
                </div>
                <Typography
                    variant="h4"
                    component="h4"
                    color="primary"
                    gutterBottom
                >
                    Toyota Corolla
                </Typography>
                <div className={classes.ratingContainer}>
                    <Rating 
                        name="read-only" 
                        precision={0.5}
                        value={3.5} 
                        readOnly 
                    />
                    <Box ml={2}>{3.5}</Box>
                </div>
                <p>
                    Toyota Corolla
                </p>
            </CommonCard>
            <CarCommentList/>
        </Fragment>
    )
}