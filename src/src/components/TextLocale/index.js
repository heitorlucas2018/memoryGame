import React from 'react'
import { NativeModules, Platform, Text } from 'react-native'
import { useLocale } from '../../locale/hooks';

export default function TextLocale({ text, keyString, style, ...props }) {
    const textLabel = (text != null) ? text : useLocale(keyString);
    return (
        <Text style={style} {...props} >
            {textLabel}
        </Text>
    )
}
