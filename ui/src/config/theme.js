const Theme = {
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    WebkitFontSmoothing: 'auto',
                },
                [`*, :after, :before`]: {
                    boxSizing: "border-box"
                }
            },
        },
    },
	typography: {
		fontFamily: "'Poppins', sans-serif",
		fontDisplay: "swap",
		h1: {
			fontWeight: 500,
			fontSize: '6rem'
		},
		h2: {
			fontWeight: 500,
			fontSize: '4rem'
		},
		body1: {
			fontSize: 14,
			"@media (min-width: 960px)": {
				fontSize: 16
			},
		},
        body2: {
			fontSize: 14,
			"@media (min-width: 960px)": {
				fontSize: 16
			},
		},
	},
	palette: {
		primary: {
			// main: '#2c689d',
			main: '#0779e4',
		},
		secondary: {
			main: '#77d8d8',
		},
		error: {
			main: '#e66767',
		},
		success: {
			main: '#3aaf00'
		},
		background: {
            default: '#f2f2f2',
            paper: "#fff"
		},
		text: {
			primary: "#333333"
		}
	},
};

export default Theme;