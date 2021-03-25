import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux" 
import { BrowserRouter as Router } from "react-router-dom"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import WebFont from 'webfontloader';
import { ApolloProvider } from "@apollo/client"

import App from 'app';
import configureStore from "./store"
import reportWebVitals from './reportWebVitals';
import { Theme } from 'config';
import client from 'libs/apolloClient';

const materialTheme = createMuiTheme({
  	palette: {
		// type: "dark",
		primary: {
			main: Theme.primaryColor
		},
		secondary: {
			main: Theme.secondaryColor
		},
		text: {
			primary: Theme.fontColor
		},
		success: {
			main: Theme.successColor
		},
		error: {
			main: Theme.errorColor
		},
		warning: {
			main: Theme.warningColor
		}
	},
	typography: {
		fontFamily: Theme.fontFamily,
		fontSize: Theme.fontSize,
		body1: {
			fontSize: Theme.fontSize,
			"@media (max-width: 960px)": {
				fontSize: `calc(${Theme.fontSize}px - 2px)`
			},
		},
		body2: {
			fontSize: Theme.fontSize,
			"@media (max-width: 960px)": {
				fontSize: `calc(${Theme.fontSize}px - 2px)`
			},
		}
	}
});

WebFont.load({
    google: {
        families: ['Poppins:300,400,700', 'sans-serif']
    }
});

const { store } = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={materialTheme}>
			<ApolloProvider client={client}>
				<Router>
					<React.StrictMode>
						<App />
					</React.StrictMode>
				</Router>
			</ApolloProvider>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
