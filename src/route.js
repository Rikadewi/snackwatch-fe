import React, { Component } from 'react';
import { connect } from "react-redux";
import UserNavigator from './containers/user-navigator'
import Layout from './containers/layout';

class Route extends Component {
    render() {
        const {
            isAuthenticated,
        } = this.props;

        return !(isAuthenticated) ? <UserNavigator /> : <Layout />;
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
    mapStateToProps,
    null,
)(Route);
