import React, { Component } from 'react';
import { connect } from "react-redux";
import { addIllness } from '../../actions/user'
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import { styles } from '../../styles/styles'
import RegisterBar from '../../components/register-bar';
import NarrowButton from '../../components/narrow-button';
import ClickableOption from '../../components/clickable-option';

class Illness extends Component {
    constructor(props) {
        super(props);
        this.state = {
            illnesses: [],
        };

        this.handleChangeIllness = this.handleChangeIllness.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = () => {
        this.props.handleAddIllness(this.state.illnesses);
        this.props.navigation.navigate('Bio');
    }

    handleChangeIllness = (illness) => {
        let illness_encoded = 0;
        switch (illness) {
            case 'Diabetes':
                illness_encoded = 1;
                break;
            case 'Cardiovascular Disease':
                illness_encoded = 2;
                break;
            case 'High Blood Pressure':
                illness_encoded = 3;
                break;
            case 'Low Blood Pressure':
                illness_encoded = 4;
                break;
            case 'Cholesterol':
                illness_encoded = 5;
                break;
            case 'Anemia':
                illness_encoded = 6;
                break;
            default:
                illness_encoded = 0;
        }
        this.state.illnesses.push(illness_encoded);
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={styles.containerFull} >
                        <RegisterBar count={3} />
                        <Text style={styles.h2}>Do you have any{"\n"}
                            spesific illness?</Text>
                        <ClickableOption
                            handle={this.handleChangeIllness}
                            handleSubmit={this.handleSubmit}
                            path='illness'
                            options={[
                                'Diabetes',
                                'Cardiovascular Disease',
                                'High Blood Pressure',
                                'Low Blood Pressure',
                                'Cholesterol',
                                'Anemia'
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

const mapDispatchToProps = dispatch => ({
    handleAddIllness: (illnesses) => {
        dispatch(addIllness(illnesses));
    },
});

export default connect(
    null,
    mapDispatchToProps,
)(Illness);
