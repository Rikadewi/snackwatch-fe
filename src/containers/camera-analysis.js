import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image } from "react-native";
import { styles } from "../styles/styles";
import {
	BLACK,
	COLOR_SECONDARY,
	RED,
	LIGHT_GRAY,
	H6,
	COLOR_PRIMARY,
	GREEN,
	YELLOW
} from "../styles/const";
import NarrowButton from "../components/narrow-button";

class CameraAnalysis extends Component {
	render() {
		let response = {
			"items": [
				{
					"Carbohydrate": {
						"amount": 23.1,
						"status": 2,
					},
				},
				{
					"Protein": {
						"amount": 3,
						"status": 1,
					},
				},
				{
					"Fats": {
						"amount": 9.35,
						"status": 3,
					},
				},
			],
			"verdict": 1,
		};
		let items = [];
		for (let i = 0; i < response.items.length; i++) {
			let key = Object.keys(response.items[i]);
			items.push(
				<View style={{
					display: 'flex',
					flexDirection: 'row',
				}}>
					<Text style={{
						fontSize: H6,
						color: BLACK,
					}}>
						{key} is</Text>
					{
						response.items[i][key].status == '1' &&
						<Text style={{
							fontSize: H6,
							color: YELLOW,
							fontWeight: 'bold'
						}}>
							{' below '}
						</Text>
					}
					{
						response.items[i][key].status == '2' &&
						<Text style={{
							fontSize: H6,
							color: GREEN,
							fontWeight: 'bold'
						}}>
							{' fit to '}
						</Text>
					}
					{
						response.items[i][key].status == '3' &&
						<Text style={{
							fontSize: H6,
							color: RED,
							fontWeight: 'bold'
						}}>
							{' higher than '}
						</Text>
					}
					<Text style={{
						fontSize: H6,
						color: BLACK,
					}}>
						recommended daily needs
					</Text>
				</View >
			)
		}

		return (
			<View>
				<Image
					source={require("../static/product/1.png")}
					style={
						{
							width: 400,
							height: 650,
						}
					}
				/>
				<View
					style={{
						position: "absolute",
						bottom: 0
					}}>
					<Image
						source={require("../static/background/footer-camera.png")}
						style={{
							width: 480,
							height: 225,
							// width: '100vw',
							// height: '47vw',
							marginBottom: -105,
							zIndex: -1
						}}
					/>
					<View
						style={{
							backgroundColor: "#ffffff",
							display: "flex",
							alignItems: "center",
							paddingBottom: 105
						}}>
						<Text style={[styles.h2, { color: RED }]}>
							{
								response.verdict == 1 && 'Not Healthy'
							}
							{
								response.verdict == 2 && 'Healthy'
							}
							{
								response.verdict == 3 && 'Prohibited'
							}
						</Text>
						<View
							style={{
								width: 200,
								height: 3,
								margin: 7,
								backgroundColor: LIGHT_GRAY
							}}
						/>
						<Text
							style={{
								color: BLACK,
								margin: 12
							}}>
							Ingredients
						</Text>
						<View>
							{items}
						</View>
						<View
							style={{
								display: "flex",
								flexDirection: "row"
							}}>
							<NarrowButton
								onPress={() => this.props.navigation.navigate('Camera')}
								color={BLACK} text="Delete" />
							<NarrowButton
								onPress={() => this.props.navigation.navigate('Shop')}
								color={COLOR_SECONDARY} text="Save" />
						</View>
					</View>
				</View>
			</View >
		);
	}
}

const mapStateToProps = state => ({
	username: state.auth.username
});

export default connect(mapStateToProps, null)(CameraAnalysis);

// {

// 	console.log(response);
// 	console.log(response.items.length);
// 	let items = [];
// 	for (let i = 0; i < response.items.length; i++) {
// 		let key = Object.keys(response.items[i]);
// 		console.log(key);
// 		console.log(response.items[i][key])
// 		items.push(
// 			<View style={{
// 				display: 'flex',
// 				flexDirection: 'row',
// 			}}>
// 				<Text>{key}</Text>
// 				<Text>{response.items[i][key].amount}</Text>
// 				<Text>{response.items[i][key].status}</Text>
// 			</View>

// 		)
// 	}
// }