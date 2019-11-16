import React, { Component } from 'react';
import { connect } from "react-redux";
import { addAllergy } from '../../actions/user'
import { Text, View, Image, ScrollView, SafeAreaView, TouchableHighlight } from 'react-native';
import { styles } from '../../styles/styles'
import { GREEN, GRAY, BLACK } from '../../styles/const';
import RegisterBar from '../../components/register-bar';
import NarrowButton from '../../components/narrow-button';

class Allergy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allergies: [],
        };

        this.handleChangeAllergy = this.handleChangeAllergy.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = () => {
        this.props.handleAddAllergy(this.state.allergies);
        this.props.navigation.navigate('Illness');
    }

    handleChangeAllergy = (allergy) => {
        let allergy_encoded = 0;
        switch (allergy) {
            case 'Egg':
                allergy_encoded = 1;
                break;
            case 'Peanut':
                allergy_encoded = 2;
                break;
            case 'Tree Nuts':
                allergy_encoded = 3;
                break;
            case 'Soy':
                allergy_encoded = 4;
                break;
            case 'Cow Milk':
                allergy_encoded = 5;
                break;
            case 'Wheat':
                allergy_encoded = 6;
                break;
            case 'Fish':
                allergy_encoded = 7;
                break;
            case 'Shell Fish':
                allergy_encoded = 8;
                break;
            case 'Caffeine':
                allergy_encoded = 9;
                break;
            default:
                allergy_encoded = 0;
        }
        this.state.allergies.push(allergy_encoded);
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={styles.containerFull} >
                        <RegisterBar count={2} />
                        <Text style={styles.h2}>Do you have any type {"\n"}
                            of food allergy?</Text>
                        <ClickableOption
                            handle={this.handleChangeAllergy}
                            handleSubmit={this.handleSubmit}
                            path='allergy'
                            options={[
                                'Egg',
                                'Peanut',
                                'Tree Nuts',
                                'Soy',
                                'Cow Milk',
                                'Wheat',
                                'Fish',
                                'Shell Fish',
                                'Caffeine'
                            ]}
                        />
                        <NarrowButton
                            onPress={this.handleSubmit}
                            text="Continue" />
                    </View>
                </ScrollView>
            </SafeAreaView >
        );
    }
};

class ClickableOption extends Component {
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
                width: 261,
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
                    <TouchableHighlight
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
                    </TouchableHighlight>

                </View >
            );
        } else {
            return (
                <View style={{ marginBottom: 19 }}>
                    <TouchableHighlight
                        onPress={() => this.props.handle(this.props.name)}
                        style={{
                            backgroundColor: GRAY,
                            paddingHorizontal: 14.5,
                            paddingVertical: 14.5,
                            borderRadius: 72,
                        }}
                    >
                        <Image
                            source={require('../../static/' + this.props.path + '/' + this.props.name + '.png')}
                            style={{
                                width: 43,
                                height: 43,
                            }}
                        />
                    </TouchableHighlight>
                    <Text style={{
                        color: BLACK,
                        textAlign: 'center',
                        marginTop: 2,
                    }}>{this.props.name}</Text>
                </View>
            );
        }
    }
}

const mapDispatchToProps = dispatch => ({
    handleAddAllergy: (allergies) => {
        dispatch(addAllergy(allergies));
    },
});

export default connect(
    null,
    mapDispatchToProps,
)(Allergy);
