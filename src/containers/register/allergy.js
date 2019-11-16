import React, { Component } from 'react';
import { connect } from "react-redux";
import { addAllergy } from '../../actions/user'
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import { styles } from '../../styles/styles'
import RegisterBar from '../../components/register-bar';
import NarrowButton from '../../components/narrow-button';
import ClickableOption from '../../components/clickable-option';

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

const mapDispatchToProps = dispatch => ({
    handleAddAllergy: (allergies) => {
        dispatch(addAllergy(allergies));
    },
});

export default connect(
    null,
    mapDispatchToProps,
)(Allergy);
