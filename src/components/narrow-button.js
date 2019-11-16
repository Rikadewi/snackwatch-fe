import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { COLOR_PRIMARY, NARROW_BUTTON } from '../styles/const';

export default class NarrowButton extends Component {
    render() {
        return (
            <TouchableOpacity
                style={{
                    backgroundColor: COLOR_PRIMARY,
                    width: NARROW_BUTTON,
                    borderRadius: 5,
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
