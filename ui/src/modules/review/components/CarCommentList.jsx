import CommonCard from "modules/common/components/CommonCard"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from '@material-ui/core/Avatar'
import Typography from "@material-ui/core/Typography"
import Rating from '@material-ui/lab/Rating';
import PageHeader from "modules/common/components/PageHeader";
import { Button } from "@material-ui/core";
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { Fragment, useEffect, useState } from "react";
import CreateReview from "./CreateReview";


const useStyles = makeStyles(theme => ({
    root: {
        marginTop: "1rem"
    },
    commentRoot: {
        padding: "1rem 0",

        [`&:not(:first-child)`]: {
            marginTop: "1rem",
            borderTop: `1px solid ${theme.palette.action.focus}`
        }
    },
    metaRoot: {
        display: "flex",
        alignItems: "center",
        marginBottom: "0.5rem",

        
    },
    avatar: {
        marginRight: "0.5rem",
        width: "1.5rem",
        height: "1.5rem",
        fontSize: theme.spacing(2),

    },
    textContainer: {
        padding: "0.5rem 1rem",
        width: "100%",
    },
    participantName: {
        marginRight: "1rem"
    }
}))

function Comment({ classes, review }){
    return (
        <div className={classes.commentRoot}>
            <div className={classes.metaRoot}>
                <Avatar
                    className={classes.avatar}
                >{review.name.substr(0, 1).toUpperCase()}</Avatar>
                <Typography
                    component="p"
                    variant="caption"
                    className={classes.participantName}
                >
                    {review.name}
                </Typography>
                {review.rating ? (
                    <Rating 
                        name="read-only" 
                        value={review.rating} 
                        size="small"
                        readOnly 
                    />
                ) : ""}
            </div>
            <div>
                {review.comment}
            </div>
        </div>
    )
}

export default function CarCommentList({ carUid, ...restProps }){
    const classes = useStyles()
    const [ isOpenAddReviewDialog, setOepnReviewDialog ] = useState(false)
    const [ reviews, setReviews ] = useState([])

    const getReviews = async carUid => {
        console.log("", carUid)
        const _reviews = await restProps.actionGetCommentsByCarUid(carUid);

        if(_reviews) setReviews(_reviews)
    }

    useEffect(() => {
        if(carUid) getReviews(carUid)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carUid])

    const closeDialog = () => {
        setOepnReviewDialog(false)
    }

    const openCreateDialog = () => {
        if(carUid) setOepnReviewDialog(true)
    }

    const addReviewAfterCreate = review => {
        closeDialog()
        setReviews(revs => [...revs, review])
        restProps.actionGetCars()
    }

    return (
        <Fragment>
            <CommonCard
                className={classes.root}
            >
                <PageHeader
                    rightButton={(
                        <Button
                            startIcon={<AddOutlinedIcon/>}
                            variant="outlined"
                            size="small"
                            onClick={openCreateDialog}
                        >
                            Add a review
                        </Button>
                    )}
                >
                    Reviews
                </PageHeader>
                <div>
                    { reviews?.length ? reviews.map((review,i) => (
                        <Comment
                            key={i}
                            rating={i % 2 ? 3 : null}
                            classes={classes}
                            review={review}
                        />
                    )) : "Be the first one to review"}
                </div>
            </CommonCard>
            <CreateReview
                carUid={carUid}
                isOpen={isOpenAddReviewDialog}
                onCreate={addReviewAfterCreate}
                onClose={closeDialog}
                {...restProps}
            />
        </Fragment>
    )
}