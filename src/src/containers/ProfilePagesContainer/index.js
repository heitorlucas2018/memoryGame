import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfilePageView from './ProfilePage.View';
import ContentPage from './ContentPage.View'

const Navigation = createStackNavigator();

export default function ProfilePageStack() {
    return (
        <Navigation.Navigator
            initialRouteName="ProfilePage"
            headerMode="none"
        >
            <Navigation.Screen name="ProfilePage" component={ProfilePageView} />
            <Navigation.Screen name="Content" component={ContentPage} />
        </Navigation.Navigator>
    )
}
