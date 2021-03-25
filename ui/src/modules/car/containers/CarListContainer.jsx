import React from "react";
import * as actions from "modules/car/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CarListComponent from "../components/CarListComponent";

const CarListContainer = (props) => <CarListComponent {...props} />

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CarListContainer);