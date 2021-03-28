import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton";
import { Fragment } from 'react';
import Spacer from './Spacer';
import { useHistory } from 'react-router';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    headerCard: {
        marginBottom: "1rem",
        padding: "1rem 3rem",
        display: "flex",
        alignItems: "center"
    },
    backBtn: {
        marginRight: "1rem",
    },
    icon: {
        marginRight: "0.25rem"
    },
    header: {
        color: theme.palette.primary.main,
        marginBottom: 0
    },
    headerOnly: {
        color: theme.palette.primary.main,
        marginBottom: "2rem"
    },
    onlyHeaderAndBtn: {
        marginBottom: "3rem",
        display: "flex",
        alignItems: "center",

        "& h3": {
            color: theme.palette.primary.main,
            marginBottom: 0
        }
    }
}))

function Text({ children, className }){
    return (
        <Typography 
            variant="h6"
            component="h6"
            className={className}> { children } </Typography>
    )
}

export default function PageHeader({ children, withCard, hasBack, onBack, rightButton }){
    const history = useHistory()
    const classes = useStyles()

    const goBack = () => {
        if(onBack) onBack()
        else history.goBack()
    }

    return (
        <>
            {
                withCard ?
                <Card className={classes.headerCard}>
                    { 
                        hasBack ? 
                        <IconButton
                            color="primary"
                            type="button"
                            onClick={goBack} 
                            className={classes.backBtn}>
                            <ChevronLeftIcon className={classes.icon}/>
                        </IconButton> : '' 
                    }
                    <Text className={classes.header}> { children } </Text>
                    {
                        rightButton ?
                        <Fragment>
                            <Spacer/>
                            { rightButton }
                        </Fragment> : ""
                    }
                </Card> :
                rightButton ?
                <div className={classes.onlyHeaderAndBtn}>
                    { 
                        hasBack ? 
                        <IconButton
                            color="primary"
                            onClick={goBack} 
                            className={classes.backBtn}>
                            <ChevronLeftIcon className={classes.icon}/>
                        </IconButton> : '' 
                    }
                    <Text className={classes.header}> { children } </Text>
                    <Spacer/>
                    { rightButton }
                </div> :
                hasBack ?
                <div className={classes.onlyHeaderAndBtn}>
                    <IconButton
                        color="primary"
                        onClick={goBack} 
                        className={classes.backBtn}>
                        <ChevronLeftIcon className={classes.icon}/>
                    </IconButton>
                    <Text className={classes.header}>{ children }</Text>
                </div> :
                <Text className={classes.headerOnly}>{ children }</Text>
            }
        </>
    )
}