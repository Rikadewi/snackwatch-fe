import React from 'react';
import { Icon } from 'react-native-elements'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './src/containers/home';
import Shop from './src/containers/shop';
import Camera from './src/containers/camera';
import './src/static/css/style.css';

const HomeTab = createStackNavigator(
    {
        Home: Home,
    },
    {
        headerMode: "none",
    }
);

const ShopTab = createStackNavigator(
    {
        Shop: Shop,
    },
    {
        headerMode: "none",
    }
);

const CameraTab = createStackNavigator(
    {
        Camera: Camera,
    },
    {
        headerMode: "none",
    }
);

const MainApp = createBottomTabNavigator(
    {
        Home: { screen: HomeTab },
        Camera: { screen: CameraTab },
        Shop: { screen: ShopTab },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === 'Home') {
                    return (
                        <Icon
                            name='home-outline'
                            type='material-community'
                            color={tintColor}
                            size={27} />
                    );
                }
                if (routeName === 'Camera') {
                    return (
                        <Icon
                            name='camera'
                            type='font-awesome'
                            color={tintColor}
                            size={24} />
                    );
                }

                return (
                    <Icon
                        name='shopping-cart'
                        type='feather'
                        color={tintColor}
                        size={24} />
                );
            },
        }),
        tabBarOptions: {
            showLabel: false,
            activeTintColor: '#1eaae6',
            inactiveTintColor: '#7b7b7b',
            style: {
                borderColor: 'transparent',
            }
        },
    }
);

export default createAppContainer(MainApp);
