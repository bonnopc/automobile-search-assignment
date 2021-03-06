import React from "react";
import * as actions from "modules/car/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HomeComponent from "../components/HomeComponent";

const HomeContainer = (props) => <HomeComponent {...props} />

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);