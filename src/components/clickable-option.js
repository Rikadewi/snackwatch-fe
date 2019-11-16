import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { GREEN, GRAY, BLACK } from '../styles/const';

export default class ClickableOption extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let options = [];
        for (let i = 0; i < this.props.options.length; i++) {
            options.push(
                <ClickableImage handle={this.props.handle.bind(this)} name={this.props.options[i]} path={this.props.path} />
            )
        }
        return (
            <View style={{
                margin: 30,
                marginBottom: 10,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                width: 276,
            }}>
                {options}
                <ClickableImage handle={this.props.handleSubmit.bind(this)} name="No" path={this.props.path} />
            </View>
        );
    }
}

class ClickableImage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.name == 'No') {
            return (
                <View style={{ marginBottom: 19 }}>
                    <TouchableOpacity
                        onPress={this.props.handle}
                        style={{
                            backgroundColor: GREEN,
                            width: 72,
                            height: 72,
                            borderRadius: 72,
                        }}
                    >
                        <Text style={{
                            color: '#ffffff',
                            textAlign: 'center',
                            fontSize: 28,
                            lineHeight: 72,
                        }}>{this.props.name}</Text>
                    </TouchableOpacity>

                </View >
            );
        } else {
            return (
                <View style={{
                    marginBottom: 19,
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity
                        onPress={() => this.props.handle(this.props.name)}
                        style={{
                            backgroundColor: GRAY,
                            paddingHorizontal: 14.5,
                            paddingVertical: 14.5,
                            borderRadius: 72,
                            width: 72,
                        }}
                    >
                        <Image
                            source={require('../static/' + this.props.path + '/' + this.props.name + '.png')}
                            style={{
                                width: 43,
                                height: 43,
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={{
                        color: BLACK,
                        textAlign: 'center',
                        marginTop: 2,
                        width: 92,
                    }}>{this.props.name}</Text>
                </View>
            );
        }
    }
}
