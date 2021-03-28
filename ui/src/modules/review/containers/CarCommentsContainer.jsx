import React from "react";
import * as actions from "modules/review/actions";
import * as carActions from "modules/car/actions";
import * as appActions from "actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CarCommentList from "../components/CarCommentList";

const CarCommentsContainer = (props) => <CarCommentList {...props} />

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign({}, appActions, carActions, actions), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CarCommentsContainer);