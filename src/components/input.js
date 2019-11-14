import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { DARK_GRAY, LIGHT_GRAY, WIDE_BUTTON } from '../styles/const'
import { Icon } from 'react-native-elements'

class Input extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: LIGHT_GRAY,
                width: WIDE_BUTTON,
                display: 'flex',
                borderRadius: 100,
                paddingVertical: 10,
                paddingHorizontal: 20,
                flexDirection: 'row',
                margin: 10,
            }}
            >
                <Icon
                    name={this.props.iconName}
                    type='feather'
                    color={DARK_GRAY}
                    size={20} />
                <TextInput
                    style={{
                        marginLeft: 5,
                        color: DARK_GRAY,
                        borderColor: 'transparent',
                    }}
                    placeholder={this.props.placeholder}
                    onChangeText={(text) => this.props.handler(text)}
                />
            </View>
        );
    }
} export { Input };