import React from 'react';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types"

const useStyles = makeStyles(theme => ({
    title: {
        [theme.breakpoints.down("sm")]: {
            padding: "0.5rem 1rem"
        }
    }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function CommonDialog(props) {
    const theme = useTheme(), classes = useStyles();

    const { isFullScreen, isOpen, onClose, keepMounted, header, content, footerClassName,
        footer, removeFullScreenFromSm } = props

    const fullScreen = (useMediaQuery(theme.breakpoints.down('sm')) && !removeFullScreenFromSm) || isFullScreen;

    return (
        <div>
            <Dialog
                open={isOpen}
                TransitionComponent={Transition}
                maxWidth="md"
                fullScreen={fullScreen}
                disableBackdropClick={keepMounted}
                onClose={onClose}
                aria-labelledby="dialog-slide-title"
                aria-describedby="dialog-slide-description"
            >
                { 
                    header && 
                    <DialogTitle className={`${classes.title} text-uppercase`}>
                        { header }
                    </DialogTitle>
                }
                { 
                    content && 
                    <DialogContent className={props.contentClassName}>
                        { content }
                    </DialogContent> 
                }
                { footer && <DialogActions className={footerClassName}> { footer } </DialogActions> }
            </Dialog>
        </div>
    );
}

CommonDialog.propTypes = {
    header: PropTypes.any,
    content: PropTypes.any.isRequired,
    footer: PropTypes.any,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    keepMounted: PropTypes.bool,
    isFullScreen: PropTypes.bool,
    contentClassName: PropTypes.string,
    footerClassName: PropTypes.string
}