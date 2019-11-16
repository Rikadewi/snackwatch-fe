import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { COLOR_PRIMARY, WIDE_BUTTON } from '../styles/const';

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
