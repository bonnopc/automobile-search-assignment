import React, { Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import CssBaseline from '@material-ui/core/CssBaseline';
import RehydrationCheckPost from "./RehydrationCheckPost";
import Routes from "routes";
import DefaultLayout from "layouts/DefaultLayout";

function App(props){
    return (
        <Fragment>
            <CssBaseline/>
            <RehydrationCheckPost loader={<div>Loading</div>} {...props}>
                <DefaultLayout>
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
                </DefaultLayout>
            </RehydrationCheckPost>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    ...state
})

export default withRouter(connect(mapStateToProps, null)(App))