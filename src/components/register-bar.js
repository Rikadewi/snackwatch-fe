import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { GREEN, GRAY } from '../styles/const';

export default class RegisterBar extends Component {
    render() {
        let bars = [];
        let i = 0;
        for (i; i < this.props.count; i++) {
            bars.push(<View style={[style.bar, style.current]} />);
        }

        for (i; i < 4; i++) {
            bars.push(<View style={style.bar} />);
        }
        return (
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 32,
            }}>
                {bars}
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