import CommonCard from "modules/common/components/CommonCard"
import PageHeader from "modules/common/components/PageHeader"
import { Fragment, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import InlineLoader from "modules/common/components/InlineLoader"
import CarCommentsContainer from "modules/review/containers/CarCommentsContainer"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

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
    },
    actions: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    }
})

function CarMeta({
    car, 
}){
    const classes = useStyles()
    const history = useHistory()

    const goToEditCarPage = () => {
        history.push(`/car/update/${car.uid}`)
    }

    return (
        <Fragment>
            <div className={classes.imgContainer}>
                <img 
                    src={car.image} 
                    alt="Car"
                    className={classes.img}
                />
            </div>
            <Grid container>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={8}
                >
                    <Typography
                        variant="h4"
                        component="h4"
                        color="primary"
                        gutterBottom
                    >
                        { car.name }
                    </Typography>
                    <div className={classes.ratingContainer}>
                        <Rating 
                            name="read-only" 
                            precision={0.5}
                            value={car.rating} 
                            readOnly 
                        />
                        {car.rating ? <Box ml={2}>{car.rating}</Box> : ""}
                    </div>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    className={classes.actions}
                >
                    <IconButton
                        size="medium"
                        onClick={goToEditCarPage}
                    >
                        <EditOutlinedIcon/>
                    </IconButton>
                    <IconButton
                        size="medium"
                    >
                        <CloseOutlinedIcon/>
                    </IconButton>
                </Grid>
            </Grid>
            
            <p>{ car.description }</p>
        </Fragment>
    )
}

export default function CarDetailsComponent(props){
    
    const { uid } = useParams()
    const [ _car, setCar ] = useState({})
    const [ isLoadingCarInfo, setLoader ] = useState(true)

    const getCar = async uid => {
        const car = await props.actionGetCarByUid(uid)

        if(car) setCar(car)
        setLoader(false)
    }

    useEffect(() => {
        if(uid) getCar(uid)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uid])

    return (
        <Fragment>
            <PageHeader
                hasBack
                withCard
            >
                Car Details
            </PageHeader>
            <CommonCard>
                {
                    isLoadingCarInfo ?
                    <InlineLoader/> :
                    <CarMeta
                        car={_car}
                    />
                }
            </CommonCard>
            
            <CarCommentsContainer
                carUid={_car.uid}
                carName={_car.name}
            />
        </Fragment>
    )
}