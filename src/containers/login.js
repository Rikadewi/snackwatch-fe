import React, { Component } from 'react';
import { connect } from "react-redux";
import { login } from "../actions/auth";
import { Text, View, Image } from 'react-native';
import { COLOR_PRIMARY, COLOR_SECONDARY, H2 } from '../styles/const'
import Input from '../components/input';
import Logo from '../components/logo';
import BlueButton from '../components/blue-button'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleChangeUsername = (text) => {
        this.setState({ username: text });
    }

    handleChangePassword = (text) => {
        this.setState({ password: text });
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
            }}>
                <Image
                    source={require('../static/background/header-login.png')}
                    style={{
                        width: '100vw',
                        height: '43.68vw',
                    }}
                />

                <Logo size={100} />

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 20,
                }}>
                    <Text style={{
                        color: COLOR_PRIMARY,
                        fontSize: H2,
                    }}>
                        Snack</Text>
                    <Text style={{
                        color: COLOR_SECONDARY,
                        fontSize: H2,
                    }}>
                        Watch</Text>
                </View>

                <Input
                    handler={this.handleChangeUsername.bind(this)}
                    placeholder="Username"
                    iconName="user"
                />
                <Input
                    handler={this.handleChangePassword.bind(this)}
                    placeholder="Password"
                    iconName="lock"
                />
                <BlueButton
                    onPress={this.handleSubmit}
                    text="Login"
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
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
