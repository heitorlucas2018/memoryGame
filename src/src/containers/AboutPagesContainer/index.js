import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AboutPageView from './AboutPage.View';
import ContentPage from './ContentPage.View'

const Navigation = createStackNavigator();

export default function AboutPageStack() {
    return (
        <Navigation.Navigator
            initialRouteName="AboutPage"
            headerMode="none"
        >
            <Navigation.Screen name="AboutPage" component={AboutPageView} />
            <Navigation.Screen name="Content" component={ContentPage} />
        </Navigation.Navigator>
    )
}
