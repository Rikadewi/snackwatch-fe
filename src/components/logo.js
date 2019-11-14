import React, { Component } from 'react';
import { Image } from "react-native";

class Logo extends Component {
    render() {
        return (
            <Image
                source={require('../static/icon.png')}
                style={{
                    width: this.props.size,
                    height: this.props.size,
                }}
            />
        );
    }
} export { Logo };