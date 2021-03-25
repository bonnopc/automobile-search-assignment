import CommonCard from "modules/common/components/CommonCard"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from '@material-ui/core/Avatar'
import Typography from "@material-ui/core/Typography"
import Rating from '@material-ui/lab/Rating';
import PageHeader from "modules/common/components/PageHeader";
import { Button } from "@material-ui/core";
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { Fragment, useState } from "react";
import CommonDialog from "modules/common/components/CommonDialog";


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

function Comment({ classes, rating }){
    return (
        <div className={classes.commentRoot}>
            <div className={classes.metaRoot}>
                <Avatar
                    className={classes.avatar}
                >P</Avatar>
                <Typography
                    component="p"
                    variant="caption"
                    className={classes.participantName}
                >
                    Prosenjit Chowdhury
                </Typography>
                {rating ? (
                    <Rating 
                        name="read-only" 
                        value={rating} 
                        size="small"
                        readOnly 
                    />
                ) : ""}
            </div>
            <div>
                This is Comment
            </div>
        </div>
    )
}

export default function CarCommentList(props){
    const classes = useStyles()
    const [ isOpenAddReviewDialog, setOepnReviewDialog ] = useState(false)

    const closeDialog = () => {
        setOepnReviewDialog(false)
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
                            onClick={() => setOepnReviewDialog(true)}
                        >
                            Add a review
                        </Button>
                    )}
                >
                    Reviews
                </PageHeader>
                <div>
                    {[1,2,3,4].map(i => (
                        <Comment
                            key={i}
                            rating={i % 2 ? 3 : null}
                            classes={classes}
                        />
                    ))}
                </div>
            </CommonCard>
            <CommonDialog
                isOpen={isOpenAddReviewDialog}
                onClose={closeDialog}
                header="Add a Review"
                content={(
                    <div>
                        Add a reviiew
                    </div>
                )}
                footer={(
                    <Fragment>
                        <Button
                            size="large"
                            color="primary"
                            onClick={closeDialog}
                        >
                            Cancel
                        </Button>
                        {/* <Button
                            size="large"
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Submit
                        </Button> */}
                    </Fragment>
                )}
            />
        </Fragment>
    )
}