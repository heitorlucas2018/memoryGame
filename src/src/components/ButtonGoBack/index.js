import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { Colors } from '../../Constants/Colors'
import { useNavigation } from '@react-navigation/native'

export default function ButtonGoBack({ style, size, colorIcon, iconName }) {
    const navigation = useNavigation()

    return (
        <Pressable style={[styled.conteiner, style]} onPress={() => {
            navigation.goBack()
        }}>
            <Icon name={(iconName || 'arrowleft')} size={(size || 60)} color={(colorIcon || Colors.main)} />
        </Pressable>
    )
}

const styled = StyleSheet.create({
    conteiner: {
        borderWidth: 2,
        margin: 5,
        backgroundColor: '#000',
        borderRadius: 50,
        padding: 3
    }
})