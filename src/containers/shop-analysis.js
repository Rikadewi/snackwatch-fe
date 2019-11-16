import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image, ScrollView, SafeAreaView } from "react-native";
import { styles } from '../styles/styles';
import { BLACK, COLOR_SECONDARY } from "../styles/const";

class ShopAnalysis extends Component {
    render() {
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
