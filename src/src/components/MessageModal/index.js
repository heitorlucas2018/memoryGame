import React, { useState } from "react";
import {
    Alert,
    Modal,
    Text,
    TouchableHighlight,
    View,
    StyleSheet,
    Pressable
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import { Colors } from "../../Constants/Colors";

import Button from '../Button'

export default MessageModal = ({ children, label }) => {
    const [visible, setVisible] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            <Pressable
                onPress={() => setVisible(!visible)}
                style={[styles.buttonLabel, styles.itemList]} >
                <Text style={styles.textLabel}>{label}</Text>
                <Icon name="right" size={20} color={Colors.textColor} />
            </Pressable>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Pressable
                            onPress={() => setVisible(!visible)}
                            style={{ position: 'absolute', margin: 5, right: 0 }}>
                            <Icon name="close" size={30} color="#000" />
                        </Pressable>
                        <View style={styles.modalBody}>
                            <Text>{label}</Text>
                            <ScrollView>
                                {children}
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    modalView: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalBody: {
        marginTop: 5,
        marginLeft: 5,
        flex: 1
    },
    itemList: {
        display: 'flex',
        padding: 10
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    textLabel: {
        fontSize: 20,
        flexBasis: 0,
        flexGrow: 1
    },
    buttonLabel: {
        display: 'flex',
        flexDirection: 'row',
    }
});