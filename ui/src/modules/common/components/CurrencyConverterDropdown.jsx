import React, { Fragment } from "react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export const supportedCurrencies = [
    "CAD", 'EUR', 'CHF', 'GBP', 'SEK', 'USD'
]

export default function CurrencyConverterDropdown(props){
    const currentValue = props.app.currency || "USD";

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const selectCurrency = val => {
        console.log({val})
        props.actionSetCurrency(val)
        handleClose()
    }


    return (
        <Fragment>
            <Button aria-controls="currency-menu" aria-haspopup="true" onClick={handleClick}>
                { currentValue }
            </Button>
            <Menu
                id="currency-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {supportedCurrencies.map((curr,i) => (
                    <MenuItem 
                        onClick={() => selectCurrency(curr)}
                        key={i}
                    >
                            {curr}
                    </MenuItem>
                ))}
            </Menu>
        </Fragment>
    )
}