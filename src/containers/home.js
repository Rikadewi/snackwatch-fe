import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class Home extends React.Component {

    render() {
        return (
            <View style={styles.MainContainer}>

                <Text>Hi</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efefef',
        padding: 11

    },
    text: {

        color: '#fff'
    }

});