import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image, ScrollView, SafeAreaView } from "react-native";
import { styles } from '../styles/styles';
import {
    BLACK,
    COLOR_SECONDARY,
    RED,
    LIGHT_GRAY,
    COLOR_PRIMARY,
    GREEN,
    YELLOW
} from "../styles/const";

class ShopAnalysis extends Component {
    render() {
        let response = {
            "items": [
                {
                    "Carbohydrate": {
                        "amount": 23.1,
                        "status": 2,
                    },
                },
                {
                    "Protein": {
                        "amount": 3,
                        "status": 1,
                    },
                },
                {
                    "Fats": {
                        "amount": 9.35,
                        "status": 3,
                    },
                },
            ],
            "verdict": 1,
        };
        let items = [];
        for (let i = 0; i < response.items.length; i++) {
            let key = Object.keys(response.items[i]);
            items.push(
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <Text style={{
                        color: BLACK,
                    }}>
                        {key} is</Text>
                    {
                        response.items[i][key].status == '1' &&
                        <Text style={{
                            color: YELLOW,
                            fontWeight: 'bold'
                        }}>
                            {' below '}
                        </Text>
                    }
                    {
                        response.items[i][key].status == '2' &&
                        <Text style={{
                            color: GREEN,
                            fontWeight: 'bold'
                        }}>
                            {' fit to '}
                        </Text>
                    }
                    {
                        response.items[i][key].status == '3' &&
                        <Text style={{
                            color: RED,
                            fontWeight: 'bold'
                        }}>
                            {' higher than '}
                        </Text>
                    }
                    <Text style={{
                        color: BLACK,
                    }}>
                        recommended daily needs
					</Text>
                </View >
            )
        }

        return (
            <SafeAreaView style={[styles.containerFull, {
                paddingVertical: 50,
                flex: 1,
            }]}>
                <ScrollView>
                    <View style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <View>
                            <Text style={[styles.h2, { color: BLACK }]}>Your shopping products</Text>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }}>
                                <Text style={[styles.h2, { color: BLACK }]}>is </Text>
                                <Text style={[styles.h2, { color: COLOR_SECONDARY }]}>Healthy :)</Text>
                            </View>
                        </View>
                        <View>
                            {items}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => ({
    username: state.auth.username
});

export default connect(mapStateToProps, null)(ShopAnalysis);
