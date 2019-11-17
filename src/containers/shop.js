import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, TextInput, View, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Picker } from "react-native";
import { styles } from '../styles/styles';
import { BLACK, H6, GRAY, RED, COLOR_SECONDARY, COLOR_PRIMARY, GREEN } from "../styles/const";
import { Icon } from "react-native-elements";
import NarrowButton from '../components/narrow-button';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = () => {
        this.props.navigation.navigate('ShopAnalysis');
    }
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
                        <Icon
                            name="shopping-cart"
                            type="feather"
                            color={BLACK}
                            size={24}
                        />
                        <Text style={[styles.h2, { color: BLACK }]}>Your Shopping Chart</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: 158,
                            justifyContent: 'space-between',
                            marginTop: 10,
                            marginBottom: 37,
                        }}>
                            <Text style={{
                                color: BLACK,
                            }}>
                                For:
                		    </Text>
                            <TextInput
                                onChangeText={(data) => this.props.handler(data)}
                                keyboardType='numeric'
                                placeholder='1'
                                style={[styles.shadowBox, style.boxInput, {
                                    width: 43,
                                    textAlign: 'center',
                                }]}
                            />
                            <Picker
                                style={[styles.shadowBox, style.boxInput, {
                                    width: 64,
                                    paddingVertical: 3.5,
                                }]}>
                                <Picker.Item label="Days" value="days" />
                                <Picker.Item label="Weeks" value="Weeks" />
                                <Picker.Item label="Months" value="Months" />
                            </Picker>
                        </View>
                        <Product />
                        <Product />
                        <NarrowButton
                            onPress={this.handleSubmit}
                            color={GREEN}
                            text="Analyze" />
                    </View>
                </ScrollView>
            </SafeAreaView >
        );
    }
}

class Product extends Component {
    render() {
        return (
            <View style={{
                width: 287,
                marginBottom: 21,
            }}>
                <Text style={{
                    color: COLOR_PRIMARY,
                    fontSize: H6,
                    marginBottom: 8
                }}>Produk 1</Text>
                <View>
                    <Image
                        source={require('../static/product/1.png')}
                        style={{
                            width: 287,
                            height: 81,
                            borderRadius: 10,
                        }}
                    />
                    <View style={{
                        position: 'absolute',
                        bottom: 0,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 287,
                        padding: 4,
                    }}>
                        <Circle name="cross" />
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: 77,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <Circle name="plus" />
                            <Text style={{
                                color: COLOR_SECONDARY,
                                fontSize: 16,
                                fontWeight: 'bold',
                            }}>4</Text>
                            <Circle name="minus" />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

class Circle extends Component {
    render() {
        let background = COLOR_PRIMARY;
        let color = '#ffffff';
        let type = 'feather';
        if (this.props.name == 'cross') {
            background = GRAY;
            color = RED;
            type = 'entypo';
        }
        return (
            <TouchableOpacity style={{
                width: 24,
                height: 24,
                backgroundColor: background,
                borderRadius: 24,
            }}>
                <Icon
                    name={this.props.name}
                    type={type}
                    color={color}
                    size={23}
                />
            </TouchableOpacity>
        );
    }
}

const style = StyleSheet.create({
    boxInput: {
        paddingVertical: 5,
        color: BLACK,
        fontSize: H6,
        borderColor: 'transparent',
    }
});

const mapStateToProps = state => ({
    username: state.auth.username
});

export default connect(mapStateToProps, null)(Shop);
