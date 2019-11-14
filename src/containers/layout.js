import React from 'react';
import { Icon } from 'react-native-elements'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './home';
import Shop from './shop';
import Camera from './camera';
import { CameraButton } from '../components/camera-button';

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

const Layout = createBottomTabNavigator(
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
                        <CameraButton />
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
                height: 56,
            }
        },
    }
);

export default createAppContainer(Layout);
