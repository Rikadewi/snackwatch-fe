import React, { Component } from 'react';
import { TextInput, Text, View, Image, StyleSheet } from 'react-native';
import { styles } from '../../styles/styles'
import { H6, GREEN, GRAY, DARK_GRAY, BLACK } from '../../styles/const';

export default class Know extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: '',
            weight: 0,
            height: 0,
        }
    }
    render() {
        return (
            <View style={styles.containerFull} >
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
                <Text style={styles.h1}>Get to Know {"\n"}
                    You Better</Text>
                <Text style={{
                    color: DARK_GRAY,
                    textAlign: 'center',
                    margin: 16,
                }}>
                    To give a better experience {"\n"}
                    we need to know your gender, weight, and age
                </Text>
                <Text style={{
                    color: BLACK,
                    fontWeight: 'bold',
                }}>Your Gender</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 260,
                    justifyContent: 'space-between',
                    margin: 25,
                }}>
                    <Image
                        source={require('../../static/girl.png')}
                        style={{
                            width: 109,
                            height: 109,
                        }}
                    />
                    <Image
                        source={require('../../static/man.png')}
                        style={{
                            width: 109,
                            height: 109,
                        }}
                    />
                </View>
                <BoxNumberInput metric='Age' unit="Year's Old" placeholder='18' />
                <BoxNumberInput metric='Weight' unit='Kilogram' placeholder='50' />
            </View>
        );
    }
}

class BoxNumberInput extends Component {
    render() {
        return (
            <View style={{ marginBottom: 30 }}>
                <Text style={{
                    color: BLACK,
                    margin: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>Your {this.props.metric}</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <TextInput
                        keyboardType='numeric'
                        placeholder={this.props.placeholder}
                        style={{
                            width: 69,
                            paddingVertical: 7,
                            textAlign: 'center',
                            backgroundColor: '#ffffff',
                            marginRight: 8,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                            borderRadius: 5,
                            color: DARK_GRAY,
                        }}
                    />
                    <Text style={{
                        color: DARK_GRAY,
                        fontSize: H6,
                    }}>{this.props.unit}</Text>
                </View>
            </View>
        );
    }
}

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