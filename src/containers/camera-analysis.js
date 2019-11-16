import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image } from "react-native";
import { styles } from '../styles/styles';
import { BLACK, COLOR_SECONDARY, RED, LIGHT_GRAY, H6, COLOR_PRIMARY } from "../styles/const";
import NarrowButton from "../components/narrow-button";

class CameraAnalysis extends Component {
    render() {
        return (
            <View >
                <Image
                    source={require('../static/product/1.png')}
                    style={{
                        width: '100vw',
                        height: '100vh',
                    }}
                />
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                }}>
                    <Image
                        source={require('../static/background/footer-camera.png')}
                        style={{
                            width: '100vw',
                            height: '47vw',
                            marginBottom: -105,
                            zIndex: -1,
                        }}
                    />
                    <View style={{
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        paddingBottom: 105,

                    }}>
                        <Text style={[styles.h2, { color: RED }]}>Not Healthy</Text>
                        <View style={{
                            width: 200,
                            height: 3,
                            margin: 7,
                            backgroundColor: LIGHT_GRAY,
                        }} />
                        <Text style={{
                            color: BLACK,
                            margin: 12,
                        }}>Ingredients</Text>
                        <View>
                            <Text style={{
                                color: BLACK,
                                fontSize: H6,
                                textAlign: "center",
                            }}>
                                Sodium percentage is above average
                            </Text>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                            }}>
                                <Text style={{
                                    color: BLACK,
                                    fontSize: H6,
                                    textAlign: "center",
                                }}>
                                    Not suitable for people who have
                            </Text>
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: COLOR_PRIMARY,
                                    fontSize: H6,
                                }}> low sodium tolerant
                            </Text>
                            </View>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}>
                            <NarrowButton
                                color={BLACK}
                                text="Delete" />
                            <NarrowButton
                                color={COLOR_SECONDARY}
                                text="Save" />
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
