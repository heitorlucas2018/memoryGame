import React, { Component, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ButtonGoBack from '../../components/ButtonGoBack';
import Header from '../../components/Header';
import { Colors } from '../../Constants/Colors';

const ProfilePageView = ({ route }) => {
    const { title, content } = route.params

    const children = (content instanceof Object) ?
        content :
        (<Text style={styled.textBody}>{content}</Text>);

    return (
        <SafeAreaView>
            <View style={{ padding: 10 }}>
                <Header
                    text={title}
                    goBack={true} />
                <SafeAreaView style={{ marginTop: 40, padding: 5 }} >
                    {children}
                </SafeAreaView>
            </View>
        </SafeAreaView>
    );
}

const styled = StyleSheet.create({
    buttonClouse: {
        borderWidth: 0,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        backgroundColor: Colors.with
    },
    sobreamento: {
        shadowColor: '#292929',
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity: .50,
        shadowRadius: 5.65,
        elevation: 5
    },
    textTitle: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        flex: 1
    },
    textBody: {
        fontSize: 20,
        textAlign: 'justify'
    }
})
export default ProfilePageView;