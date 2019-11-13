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
        backgroundColor: '#f5fcff',
        padding: 11

    },

    button: {
        alignItems: 'center',
        backgroundColor: '#43A047',
        padding: 12,
        width: 280,
        marginTop: 12,
    },

    text: {

        color: '#fff'
    }

});