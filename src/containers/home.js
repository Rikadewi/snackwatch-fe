import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image, ScrollView, SafeAreaView } from "react-native";
import { styles } from '../styles/styles'
import { BLACK } from "../styles/const";
class Home extends Component {
	render() {
		return (
			<SafeAreaView style={[styles.containerFull, {
				paddingVertical: 50,
				flex: 1,
			}]}>
				<ScrollView>
					<View style={{
						display: 'flex',
						alignItems: 'center',
					}}>
						<View style={{
							display: 'flex',
							flexDirection: 'row',
						}}>
							<Text style={[styles.h2, { color: BLACK }]}>Good Morning </Text>
							<Text style={styles.h2}>{this.props.username}</Text>
						</View>
						<Text style={{
							color: BLACK,
							textAlign: 'center',
							marginTop: 17,
							marginBottom: 29,
						}}>Eat the right amount of food{"\n"}
							and stay healthy
                		</Text>
						<View style={{
							backgroundColor: '#ffffff',
							paddingVertical: 20,
							paddingHorizontal: 28,
							width: '100vw',
						}}>
							<Text style={{
								color: BLACK,
								fontWeight: 'bold',
							}}>
								Your Weekly Report
                		</Text>
						</View>

						<View style={{
							paddingHorizontal: 28,
							width: '100vw',
						}}>
							<Text style={{
								color: BLACK,
								fontWeight: 'bold',
								marginTop: 32,
								marginBottom: 20,
							}}>
								Activity Recommendation
							</Text>
							<View style={{
								width: '100%',
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}>
								<BoxImage name='Running' path='/Running' />
								<BoxImage name='Bicycle' path='/Bicycle' />
							</View>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}

class BoxImage extends Component {
	render() {
		return (
			<View style={[styles.shadowBox, {
				height: 156,
				width: 141,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}]}>

				<Image
					// source={require('../static/activity/Bicycle.png')}
					source={require('../static/activity' + this.props.path + '.png')}
					style={{
						width: 85,
						height: 85,
						marginBottom: 10,
					}}
				/>
				<Text style={{
					color: BLACK,
					textAlign: 'center',
				}}>
					{this.props.name}
				</Text>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	username: state.auth.username
});

export default connect(mapStateToProps, null)(Home);
