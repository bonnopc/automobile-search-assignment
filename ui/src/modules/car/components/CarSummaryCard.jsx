import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import getPriceByCurrency from 'helpers/getPriceByCurrency';

const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function CarSummaryCard({
    name, description, image, rating, onClick, uid, price, currency, app
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
                    <Grid container>
                        <Grid item xs={8}>
                            <Typography gutterBottom color="primary" variant="h5" component="h2">
                                { name }
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography align="right" gutterBottom variant="body2" component="h4">
                                { app.currency ?? "USD" } { getPriceByCurrency(price,app.currency,app.rates) }
                            </Typography>
                        </Grid>
                    </Grid>
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