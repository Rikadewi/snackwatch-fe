import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { GREEN, GRAY } from '../styles/const';

export default class RegisterBar extends Component {
    render() {
        return (
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 32,
            }}>
                <View style={[style.bar, style.current]} />
                <View style={style.bar} />
                <View style={style.bar} />
                <View style={style.bar} />
            </View>
        );
    }
};


const style = StyleSheet.create({
    bar: {
        width: 72,
        height: 8,
        borderRadius: 2,
        margin: 3,
        backgroundColor: GRAY,
    },
    current: {
        backgroundColor: GREEN,
    },
});