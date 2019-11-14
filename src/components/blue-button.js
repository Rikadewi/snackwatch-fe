import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { COLOR_PRIMARY, WIDE_BUTTON } from '../styles/const';
import { BorderlessButton } from 'react-native-gesture-handler';

export default class BlueButton extends Component {
    render() {
        return (
            <TouchableOpacity
                style={{
                    backgroundColor: COLOR_PRIMARY,
                    width: WIDE_BUTTON,
                    borderRadius: 100,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    margin: 10,
                    textAlign: 'center',
                }}
                onPress={this.props.onPress}
            >
                <Text style={{
                    color: '#ffffff',
                    fontWeight: 'bold'
                }}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
} 
