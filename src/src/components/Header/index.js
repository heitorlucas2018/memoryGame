import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../../helpers/utils'
import ButtonGoBack from '../ButtonGoBack'

export default function Header({ text, styleContainer, styleText, children, goBack }) {
    const goBackStyled = goBack ? styles.goBack : null;

    return (
        <View style={[styles.container, styleContainer]}>
            <View style={[styles.viewContent, goBackStyled]}>
                {goBack &&
                    <ButtonGoBack
                        size={30}
                        style={styles.button}
                        colorIcon={Colors.textColor}
                    />}
                <Text style={[styles.text, styleText]}>
                    {text || `Bem Vindo - Memory Game`}
                </Text>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderWidth: 2,
        padding: 10,
        paddingLeft: 5,
        display: 'flex',
        borderRadius: 20,
        backgroundColor: Colors.main,
        borderColor: Colors.textColor
    },
    viewContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    button: {
        left: 0,
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: Colors.with
    },
    goBack: {
        alignContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.textColor,
        textAlign: 'center',
        alignSelf: 'center'
    }
})