import React, { Component } from "react";
import { connect } from "react-redux";
import UserNavigator from "./containers/user-navigator";
import Layout from "./containers/layout";
import Login from "./containers/login";

class Route extends Component {
	render() {
		const { isAuthenticated } = this.props;

		// return !isAuthenticated ? <Login /> : <Layout />;
		return <Layout />;
	}
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(Route);
