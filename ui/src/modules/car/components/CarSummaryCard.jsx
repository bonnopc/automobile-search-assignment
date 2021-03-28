import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function CarSummaryCard({
    name, description, image, rating, onClick, uid
}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea
                onClick={() => onClick(uid)}
            >
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={name ?? "Car"}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        { name }
                    </Typography>
                    {description ? (
                        <Typography variant="body2" color="textSecondary" component="p">
                            { description }
                        </Typography>
                    ) : ""}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Rating 
                    name="read-only" 
                    value={rating} 
                    size="small"
                    readOnly 
                />
            </CardActions>
        </Card>
    );
}