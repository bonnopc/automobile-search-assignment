import React from "react";
import * as actions from "modules/car/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AddCarComponent from "../components/AddCarComponent";

const AddCarContainer = (props) => <AddCarComponent {...props} />

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddCarContainer);