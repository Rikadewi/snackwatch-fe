import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { logout } from "../actions/auth";

class Home extends Component {
	render() {
		const { username, handleLogout } = this.props;

		return (
			<View style={styles.MainContainer}>
				<Text>Welcome {username}</Text>
				<Button onPress={handleLogout} title="Logout" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	MainContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#efefef",
		padding: 11
	},
	text: {
		color: "#fff"
	}
});

const mapStateToProps = state => ({
	username: state.auth.username
});

const mapDispatchToProps = dispatch => ({
	handleLogout: noRekening => {
		dispatch(logout(noRekening));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
