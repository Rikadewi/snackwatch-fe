import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Button } from "react-native-elements";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";

import { getInfoFromServer } from "../api/nutrition";

const CameraShoot = class CameraClass extends React.Component {
	state = {
		hasCameraPermission: null,
		type: Camera.Constants.Type.back
	};

	async componentDidMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({
			hasCameraPermission: status === "granted",
			focusedScreen: true,
			path: null,
			image: null
		});

		const { navigation } = this.props;
		navigation.addListener("willFocus", () =>
			this.setState({ focusedScreen: true })
		);
		navigation.addListener("willBlur", () =>
			this.setState({ focusedScreen: false })
		);
	}

	takePicture = async () => {
		try {
			const data = await this.camera.takePictureAsync({ quality: 0.5 });
			let resp = await getInfoFromServer(data.uri);
			console.log("================================================");
			console.log(resp);
			this.setState({ path: data.uri, image: data });
			// this.props.updateImage(data.uri);
			// console.log('Path to image: ' + data.uri);
			this.props.handleResponse(resp);
			this.props.navigation.navigate('CameraAnalysis');
		} catch (err) {
			console.log("err: ", err);
		}
	};

	renderCamera = () => {
		const { hasCameraPermission, focusedScreen } = this.state;
		if (hasCameraPermission === null) {
			return (
				<View>
					<Text>null</Text>
				</View>
			);
		} else if (hasCameraPermission === false) {
			return (
				<View>
					<Text>No access to camera</Text>
				</View>
			);
		} else if (focusedScreen) {
			return (
				<View style={{ flex: 1 }}>
					<Camera
						style={{ flex: 1 }}
						type={this.state.type}
						ref={ref => {
							this.camera = ref;
						}}>
						<View
							style={{
								flex: 1,
								backgroundColor: "transparent",
								flexDirection: "row",
								justifyContent: "center"
							}}>
							<TouchableOpacity
								style={{
									backgroundColor: "#4b55f8",
									alignSelf: "flex-end",
									alignItems: "center",
									width: 50,
									height: 50
								}}
								onPress={this.takePicture}>
								<Text>Button</Text>
							</TouchableOpacity>
						</View>
					</Camera>
				</View>
			);
		}
	};

	renderImage = () => {
		return (
			<View style={{ flex: 1 }}>
				<Image
					source={{ uri: this.state.path }}
					style={styles.preview}
				/>
				<Text
					style={styles.cancel}
					onPress={() => this.setState({ path: null })}>
					Cancel
				</Text>
			</View>
		);
	};

	render() {
		const isFocused = this.props.navigation.isFocused();
		if (isFocused) {
			return (
				<View style={{ flex: 1 }}>
					{this.state.path ? this.renderImage() : this.renderCamera()}
				</View>
			);
		}
		return null;
	}
};

const styles = StyleSheet.create({
	preview: {
		flex: 1,
		alignItems: "center"
	},
	cancel: {
		position: "absolute",
		right: 20,
		top: 20,
		backgroundColor: "transparent",
		color: "#FFF",
		fontWeight: "600",
		fontSize: 17
	}
});

const mapDispatchToProps = dispatch => ({
	handleResponse: (response) => {
		dispatch(handleResponse(response));
	}
});

export default connect(null, mapDispatchToProps)(CameraShoot);

{
	/* <TouchableOpacity
style={{
	flex: 0.1,
	alignSelf: "flex-end",
	alignItems: "center"
}}
onPress={() => {
	this.setState({
		type:
			this.state.type ===
			Camera.Constants.Type.back
				? Camera.Constants.Type.front
				: Camera.Constants.Type.back
	});
}}>
<Text
	style={{
		fontSize: 18,
		marginBottom: 10,
		color: "white"
	}}>
	{" "}
	Flip{" "}
</Text>
</TouchableOpacity> */
}

