import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from "@material-ui/core/styles"
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import Spacer from './Spacer';
import { withRouter } from 'react-router';
import CurrencyConverterDropdown from './CurrencyConverterDropdown';

export const NavHeight = 48

const useStyles = makeStyles(theme => ({
    appBar: {
        height: NavHeight
    },
    toolbar: {
        width: "100%",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        minHeight: NavHeight,

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

function NavBar(props) {
    const classes = useStyles()

    const goToHome = () => {
        props.history.push("/")
    }

    const goToAddCar = () => {
        props.history.push("/car/add")
    }

    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar
                    color="default"
                    className={classes.appBar}
                >
                    <Toolbar className={classes.toolbar}>
                        {props.location.pathname !== "/" && (
                            <IconButton
                                onClick={goToHome}
                                color="primary"
                            >
                                <SearchOutlinedIcon/>
                            </IconButton>
                        )}
                        <Spacer/>
                        <CurrencyConverterDropdown
                            {...props}
                        />
                        <Button
                            startIcon={<AddOutlinedIcon/>}
                            onClick={goToAddCar}
                            color="primary"
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

export default withRouter(NavBar)