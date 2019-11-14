import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from '../styles/styles'
import { H6, COLOR_PRIMARY, DARK_GRAY } from '../styles/const';
import Logo from '../components/logo';
import BlueButton from '../components/blue-button';

export default class Hello extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container} >
                <Logo size={50} />
                <Text style={styles.h1}>Hello</Text>

                <View style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Text style={{ color: DARK_GRAY }}>Welcome to SnackWatch</Text>
                    <Text style={{ color: DARK_GRAY }}>Start your journey to healthy lifestyle with us</Text>
                </View>

                <Image
                    source={require('../static/hello.png')}
                    style={{
                        width: 220,
                        height: 250,
                    }}
                />

                <BlueButton
                    onPress={() => this.props.navigation.navigate('Know')}
                    text="Login"
                />
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 20,
                }}>
                    <Text style={{
                        color: DARK_GRAY,
                        fontSize: H6,
                    }}>Already have account? </Text>
                    <Text
                        onPress={() => this.props.navigation.navigate('Login')}
                        style={{
                            fontWeight: 'bold',
                            color: COLOR_PRIMARY,
                            fontSize: H6,
                        }}
                    >Sign in</Text>

                </View>
            </View>
        );
    }
}