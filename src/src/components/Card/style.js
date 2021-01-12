import { StyleSheet } from 'react-native'
import { Colors } from '../../Constants/Colors'

export const CardStyle = StyleSheet.create({
    container: {
        backgroundColor: Colors.with,
        borderColor: '#000',
        borderWidth: 3,
        borderRadius: 10,
        minWidth: 100,
        minHeight: 100, 
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    isDowFace: {
        backgroundColor: '#f87901',
    },
    text: {
        fontSize: 50,
        fontStyle: 'italic',
    }
})