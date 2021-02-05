import React, { useState, useEffect } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../../components/Header';
import { Colors } from '../../Constants/Colors';
import EvaluationContainer from '../EvaluationContainer';

const ProfilePageView = ({ navigation }) => {

    const [listbyData, setListbyData] = useState([]);

    useEffect(() => {
        setListbyData(dataList)
    }, []);

    return (
        <SafeAreaView style={{ display: 'flex', flex: 1 }}>
            <View style={{ display: 'flex', flex: 1, padding: 10 }}>
                <Header keyString="header.page.profile" goBack={true} />
                <SafeAreaView style={{ marginTop: 40, padding: 5, display: 'flex', flex: 1 }} >
                    {!listbyData.length &&
                        <ActivityIndicator size="large" color={Colors.main} />}
                    <FlatList
                        data={listbyData}
                        key={({ item, index }) => index}
                        renderItem={({ item, index }) =>
                            <ItemList
                                key={index}
                                label={item.label}
                                data={item.content}
                                navigation={navigation}
                            />}
                    />
                </SafeAreaView>
            </View>
            <View>
                <Text style={{ textAlign: 'center' }}>Powered by heitorSantos.com </Text>
                <Text style={{ textAlign: 'center' }}>Version 1.0.1 </Text>
            </View>
        </SafeAreaView>
    );
}

export function ItemList({ label, data, navigation: { navigate } }) {

    return (
        <Pressable
            onPress={() => navigate("Content", { title: label, content: data })}
            style={styled.itemList} >
            <Text style={styled.textSubTitle}>{label}</Text>
            <Icon name="right" size={20} color={Colors.textColor} />
        </Pressable>
    )
}

const dataList = [
    { id: 0, label: 'Privacy Policy', content: 'Text documentation' },
    { id: 1, label: 'Feedback', content: (<EvaluationContainer />) },
]

const styled = StyleSheet.create({
    buttonClouse: {
        borderRadius: 50,
        borderWidth: 0,
        backgroundColor: Colors.with,
        display: 'flex',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        elevation: 3,
        fontSize: 30,
        zIndex: 1
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
    itemList: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        alignItems: 'baseline',
        padding: 3,
        marginTop: 10,
        flexDirection: 'row'
    },
    textTitle: {
        fontSize: 30,
        fontWeight: '600'
    },
    textSubTitle: {
        fontSize: 20,
    }
})
export default ProfilePageView;