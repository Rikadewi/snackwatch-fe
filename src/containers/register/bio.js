import React, { Component } from 'react';
import { connect } from "react-redux";
import { addBio } from "../../actions/user";
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import { styles } from '../../styles/styles'
import RegisterBar from '../../components/register-bar';
import Input from '../../components/input';
import NarrowButton from '../../components/narrow-button';

class Bio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            password: '',
            confirm: '',
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeConfirm = this.handleChangeConfirm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    isFormValid = () => {
        let isFormValid = true;
        if (!this.state.name) {
            isFormValid = false;
        }
        if (!this.state.username) {
            isFormValid = false;
        }
        if (!this.state.password) {
            isFormValid = false;
        }
        if (this.state.password != this.state.confirm) {
            isFormValid = false;
        }
        return isFormValid;
    };

    handleSubmit = () => {
        if (this.isFormValid()) {
            this.props.handleAddBio(this.state.name, this.state.username, this.state.password);
            this.props.navigation.navigate('Ready');
        }
    };

    handleChangeName = (data) => {
        this.setState({ name: data });
    }

    handleChangeUsername = (data) => {
        this.setState({ username: data });
    }

    handleChangePassword = (data) => {
        this.setState({ password: data });
    }

    handleChangeConfirm = (data) => {
        this.setState({ confirm: data });
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={styles.containerFull} >
                        <RegisterBar count={4} />
                        <Text style={[styles.h2, { margin: 35 }]}>Set up your biodata</Text>

                        <Input
                            handler={this.handleChangeName.bind(this)}
                            placeholder="Your Name"
                            iconName=""
                        />
                        <Input
                            handler={this.handleChangeUsername.bind(this)}
                            placeholder="Username"
                            iconName=""
                        />
                        <Input
                            handler={this.handleChangePassword.bind(this)}
                            placeholder="Password"
                            iconName=""
                        />
                        <Input
                            handler={this.handleChangeConfirm.bind(this)}
                            placeholder="Confirm Password"
                            iconName=""
                        />

                        <NarrowButton
                            onPress={this.handleSubmit}
                            text="Submit" />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    handleAddBio: (name, username, password) => {
        dispatch(addBio(name, username, password));
    },
});

export default connect(
    null,
    mapDispatchToProps,
)(Bio);
