import React, { Component } from 'react';
import { connect } from "react-redux";
import { login } from "../actions/auth";
import { Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    isFormValid = () => {
        let isFormValid = true;
        if (!this.state.username) {
            isFormValid = false;
        }
        if (!this.state.password) {
            isFormValid = false;
        }
        return isFormValid;
    };

    handleSubmit = e => {
        if (this.isFormValid()) {
            this.props.handleLogin(this.state.username, this.state.password);
        }
    };

    render() {
        return (
            <View>
                <Text>Login</Text>
                <TextInput
                    placeholder="Username"
                    onChangeText={text => this.setState({ username: text })}
                />
                <TextInput
                    placeholder="Password"
                    onChangeText={text => this.setState({ password: text })}
                />
                <Button
                    onPress={this.handleSubmit}
                    title="Login"
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
    handleLogin: (username, password) => {
        dispatch(login(username, password));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);