import React, { Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import CssBaseline from '@material-ui/core/CssBaseline';
import RehydrationCheckPost from "./RehydrationCheckPost";
import Routes from "routes";

function App(props){
    return (
        <Fragment>
            <CssBaseline/>
            <RehydrationCheckPost {...props}>
                <Switch>
                    {Routes.map((route,i) => (
                        <Route
                            key={i}
                            exact={route.exact}
                            path={route.path}
                            component={route.component}
                        />
                    ))}
                </Switch>
            </RehydrationCheckPost>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    ...state
})

export default withRouter(connect(mapStateToProps, null)(App))