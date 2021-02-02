import React from 'react'
import { StyleSheet, SafeAreaView, Image, ActivityIndicator } from 'react-native'
import { Colors } from '../../Constants/Colors'
import Logo from './logoBase64';

export default function SplashScreen() {
    return (
        <SafeAreaView style={styled.container}>
            <Logo style={styled.image} />
            <ActivityIndicator size="large" color={Colors.main} />
        </SafeAreaView>
    )
}

const styled = StyleSheet.create({
    container: {
        backgroundColor: Colors.with,
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'stretch',
        margin: 20
    }
})