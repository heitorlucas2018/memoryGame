import React from 'react'
import { NativeModules, Platform, Text } from 'react-native'
import { useLocale } from '../../locale/hooks';

export default function TextLocale({ text, keyString, style,children, ...props }) {
    const textLabel = (text != null) ? text : useLocale(keyString);
    return (
        <Text style={[style,{display: 'flex', flexDirection: 'row'}]} {...props} >
            {textLabel}{children}
        </Text>
    )
}
