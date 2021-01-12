import React from 'react'
import {
  Pressable,
  StyleSheet,
} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../Constants/Colors';

export default function ButtonRounded({ style, iconName, onCLick, color }) {
  const __onPress = () => {
    console.log(`click button `)
    if (onCLick instanceof Function) {
      onCLick()
    }
  }

  return (
    <Pressable
      style={[styles.conteiner, style]}
      onPress={__onPress}
    >
      <Icon name={(iconName || 'retweet')} size={30} color={Colors.textColor} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  conteiner: {
    borderWidth: 2,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 3,
  }
});
