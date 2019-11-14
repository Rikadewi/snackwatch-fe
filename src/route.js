import React, { Component } from 'react';
import { connect } from "react-redux";
import Login from './containers/login'
import Layout from './containers/layout';

class Route extends Component {
    render() {
        const {
            isAuthenticated,
        } = this.props;

        return !(isAuthenticated) ? <Login /> : <Layout />;
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.isAuthenticated,
});

export default connect(
    mapStateToProps,
    null,
)(Route);
