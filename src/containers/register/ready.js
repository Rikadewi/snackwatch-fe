import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../../styles/styles";
import { DARK_GRAY } from "../../styles/const";

class Ready extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableOpacity
				style={[styles.containerFull, { paddingTop: 160 }]}
				onPress={() =>
					this.props.handleLogin(
						this.props.username,
						this.props.password
					)
				}>
				<Image
					source={require("../../static/background/circle-top.png")}
					style={{
						width: 223,
						height: 44
					}}
				/>
				<Text style={styles.h2}>You are ready to go!</Text>
				<Text
					style={{
						color: DARK_GRAY,
						textAlign: "center",
						margin: 16
					}}>
					Thank you for taking your time to {"\n"}
					create account with us. Now on to the fun part!
				</Text>
				<Image
					source={require("../../static/background/circle-bottom.png")}
					style={{
						width: 209,
						height: 41.2
					}}
				/>
				<Image
					source={require("../../static/background/footer-register.png")}
					style={{
						position: "absolute",
						bottom: 0
						// width: "100vw",
						// height: "78vw"
					}}
				/>
			</TouchableOpacity>
		);
	}
}
const mapStateToProps = state => ({
	username: state.user.username,
	password: state.user.password
});

const mapDispatchToProps = dispatch => ({
	handleLogin: (username, password) => {
		dispatch(login(username, password));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Ready);
