import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { logout } from "../actions/auth";
import { styles } from '../styles/styles'
class Shop extends Component {
    render() {
        const { username, handleLogout } = this.props;

        return (
            <View style={styles.container}>
                <Text>Shop </Text>
                <Button onPress={handleLogout} title="Logout" />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    username: state.auth.username
});

const mapDispatchToProps = dispatch => ({
    handleLogout: noRekening => {
        dispatch(logout(noRekening));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
