import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MemoryEmoticonView from '../Views/MemoryEmoticonView';
import MainPage from '../Views/MainPage.view';
import AboutPageView from '../Views/AboutPage.view';
 
const MainStack = createStackNavigator();


export default function RouteOfApp() {
    return (
        <NavigationContainer>
            <MainStack.Navigator
                initialRouteName="Home"
                mode="card"
                headerMode="none"
            >
                <MainStack.Screen name="Home" component={MainPage} />
                <MainStack.Screen name="Game" component={MemoryEmoticonView} />
                <MainStack.Screen name="About" component={AboutPageView} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}