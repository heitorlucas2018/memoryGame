import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../../Constants/Colors'
import FontFamily from '../../Constants/FontsFamily';
import ButtonGoBack from '../ButtonGoBack'
import TextLocale from '../TextLocale';

export default function Header({ text, keyString, styleContainer, styleText, children, goBack }) {
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
                <TextLocale
                    text={text}
                    keyString={keyString}
                    style={[styles.text, styleText]} />
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
        alignContent: 'center',
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
        fontSize: 25,
        color: Colors.textColor,
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: FontFamily.text
    }
})