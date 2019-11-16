import React, { Component } from 'react';
import { connect } from "react-redux";
import { addAllergy } from '../../actions/user'
import { TextInput, Text, View, Image, StyleSheet, ScrollView, SafeAreaView, TouchableHighlight } from 'react-native';
import { styles } from '../../styles/styles'
import { H6, GREEN, GRAY, DARK_GRAY, BLACK } from '../../styles/const';
import RegisterBar from '../../components/register-bar';

class Allergy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allergies: [],
        };


        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = () => {
        console.log("tes");
        this.props.handleAddAllergy(this.state.allergies);
        console.log(this.state.allergy)
    }

    handleChangeAllergy = (allergy) => {
        this.setState({ allergies: allergies.push(allergy) });
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={styles.containerFull} >
                        <RegisterBar count={2} />
                        <Text style={styles.h2}>Do you have any type {"\n"}
                            of food allergy?</Text>
                        <View style={{
                            margin: 30,
                        }}>
                            <ClickableImage handle={this.handleChangeAllergy} />
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView >
        );
    }
};

class ClickableImage extends Component {
    render() {
        return (
            <View>
                <TouchableHighlight
                    onPress={this.handle}
                    style={{
                        backgroundColor: GRAY,
                        paddingHorizontal: 14.5,
                        paddingVertical: 14.5,
                        borderRadius: 72,
                    }}
                >
                    <Image
                        source={require('../../static/allergy/Egg.png')}
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
                }}>Egg</Text>
            </View>
        );
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
