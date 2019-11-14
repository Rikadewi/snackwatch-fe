import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/styles'
import { Button } from 'react-native-elements';

export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.navigatetoPage = this.navigatetoPage.bind(this);
    }

    navigatetoPage() {
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <View style={styles.container} >
                <Text>Hello</Text>
                <Button
                    title="Login"
                    onPress={this.navigatetoPage}
                />
            </View>
        );
    }
}