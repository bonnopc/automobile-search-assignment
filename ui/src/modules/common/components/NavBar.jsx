import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from "@material-ui/core/styles"
import { Button } from '@material-ui/core';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { useLocation } from 'react-router';
import Spacer from './Spacer';

const useStyles = makeStyles(theme => ({
    toolbar: {
        width: "100%",
        paddingLeft: "1rem",
        paddingRight: "1rem",

        ...NavBar.getContainerStyles(theme)
    }
}))

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function NavBar(props) {
    const classes = useStyles()

    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar
                    color="default"
                >
                    <Toolbar className={classes.toolbar}>
                        <Spacer/>
                        <Button
                            startIcon={<AddOutlinedIcon/>}
                        >
                            Add A Car
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </React.Fragment>
    );
}

NavBar.getContainerStyles = theme => ({
    [theme.breakpoints.up('sm')]: {
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: 720
    },

    [theme.breakpoints.up('md')]: {
        maxWidth: 1170
    }
});