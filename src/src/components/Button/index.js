import React from 'react'
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";

export default function index({ text, onCLick, color }) {
  const __onPress = () => {
    if (onCLick instanceof Function) {
      onCLick()
    }
  }

  return (
    <TouchableHighlight
      style={{ ...styles.openButton, backgroundColor: color }}
      onPress={__onPress}
    >
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  openButton: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: 150
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});
