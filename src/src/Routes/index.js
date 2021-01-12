// @ts-nocheck
import React from 'react';
import { Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import MemoryEmoticonView from '../Views/MemoryEmoticonView';
import MainPage from '../Views/MainPage.view';
import AboutPageView from '../Views/AboutPage.stack';

const MainStack = createStackNavigator();

const config = {
    animation: 'timing',
    config: {
        stiffness: 1000,
        damping: 50,
        mass: 3,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

const configClose = {
    animation: 'timing',
    config: {
        duration: 500,
        casing: Easing.linear
    }
}

const cardStyleInterpolator = ({ current: { progress } }) => ({
    cardStyle: {
        opacity: progress.interpolate({
            inputRange: [0, 0.5, 0.9, 1],
            outputRange: [0, 0.25, 0.7, 1],
        }),
    },
    overlayStyle: {
        opacity: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.5],
            extrapolate: 'clamp',
        }),
    },
})

export default function RouteOfApp() {
    return (
        <NavigationContainer>
            <MainStack.Navigator
                initialRouteName="Home"
                mode="card"
                headerMode="none"
/*                 screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    transitionSpec: {
                        open: config,
                        close: configClose,
                    },
                }} */
            >
                <MainStack.Screen name="Home" component={MainPage} />
                <MainStack.Screen name="Game" component={MemoryEmoticonView} />
                <MainStack.Screen name="About" component={AboutPageView} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
} 