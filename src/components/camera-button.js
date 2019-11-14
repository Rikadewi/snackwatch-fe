import React, { Component } from 'react';
import { View } from "react-native";
import { Icon } from 'react-native-elements'

export default class CameraButton extends Component {
    render() {
        return (
            <View style={{
                position: 'absolute',
                top: -27,
                alignItems: 'center',
            }}>
                <View
                    underlayColor="#2882D8"
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 70,
                        height: 70,
                        borderRadius: 35,
                        backgroundColor: '#1eaae6',
                    }}
                >
                    <Icon
                        name='camera'
                        type='font-awesome'
                        size={24}
                        color="#ffffff" />
                </View>
            </View>
        );
    }
};