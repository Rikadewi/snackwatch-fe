import React, { Component } from 'react';
import { connect } from "react-redux";
import { addMetric } from "../../actions/user";
import { TextInput, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles'
import { H6, DARK_GRAY, BLACK } from '../../styles/const';
import RegisterBar from '../../components/register-bar';

class Know extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: -1,
            age: 0,
            weight: 0,
            height: 0,
        };

        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeWeight = this.handleChangeWeight.bind(this);
        this.handleChangeHeight = this.handleChangeHeight.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    isFormValid = () => {
        let isFormValid = true;
        if (!this.state.gender) {
            isFormValid = false;
        }
        if (!this.state.age) {
            isFormValid = false;
        }
        if (!this.state.weight) {
            isFormValid = false;
        }
        return isFormValid;
    };

    handleSubmit = () => {
        if (this.isFormValid()) {
            this.props.handleAddMetric(this.state.gender, this.state.age, this.state.weight);
            this.props.navigation.navigate('Allergy');
        }
    };

    handleChangeAge = (data) => {
        this.setState({ age: data });
    }

    handleChangeWeight = (data) => {
        this.setState({ weight: data });
    }

    handleChangeHeight = (data) => {
        this.setState({ height: data });
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={styles.containerFull} >
                        <RegisterBar count={1} />
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
                            <TouchableOpacity
                                onPress={() => this.setState({ gender: 1 })}
                                style={{
                                    width: 109,
                                    height: 109,
                                    borderRadius: 109,
                                }}
                            >
                                <Image
                                    source={require('../../static/girl.png')}
                                    style={{
                                        width: 109,
                                        height: 109,
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({ gender: 0 })}
                                style={{
                                    width: 109,
                                    height: 109,
                                    borderRadius: 109,
                                }}
                            >
                                <Image
                                    source={require('../../static/man.png')}
                                    style={{
                                        width: 109,
                                        height: 109,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <BoxNumberInput
                            handler={this.handleChangeAge}
                            metric='Age'
                            unit="Year's Old"
                            placeholder='18' />
                        <BoxNumberInput
                            handler={this.handleChangeWeight}
                            metric='Weight'
                            unit='Kilogram'
                            placeholder='50' />
                        <BoxNumberInput
                            handler={this.handleChangeHeight}
                            onBlur={this.handleSubmit}
                            metric='Height'
                            unit='Centimeter'
                            placeholder='160' />
                    </View>
                </ScrollView>
            </SafeAreaView>
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
                    width: 140,
                }}>
                    <TextInput
                        onChangeText={(data) => this.props.handler(data)}
                        onBlur={this.props.onBlur}
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

const mapDispatchToProps = dispatch => ({
    handleAddMetric: (gender, age, weight, height) => {
        dispatch(addMetric(gender, age, weight, height));
    },
});

export default connect(
    null,
    mapDispatchToProps,
)(Know);
