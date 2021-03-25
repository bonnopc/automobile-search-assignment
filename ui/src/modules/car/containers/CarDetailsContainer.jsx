import React from "react";
import * as actions from "modules/car/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CarDetailsComponent from "../components/CarDetailsComponent";

const CarDetailsContainer = (props) => <CarDetailsComponent {...props} />

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CarDetailsContainer);