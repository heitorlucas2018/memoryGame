import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../../components/Header';
import { Colors } from '../../Constants/Colors';

const AboutPageView = ({ navigation }) => {
    return (
        <SafeAreaView style={{ display: 'flex', flex: 1 }}>
            <View style={{ display: 'flex', flex: 1, padding: 10 }}>
                <Header text="About" goBack={true} />
                <SafeAreaView style={{ marginTop: 40, padding: 5, display: 'flex', flex: 1 }} >
                    <FlatList
                        data={dataList}
                        key={({ index }) => index}
                        renderItem={({ item, index }) =>
                            <ItemList
                                label={item.label}
                                data={item.content}
                                navigation={navigation}
                            />}
                    />
                </SafeAreaView>
            </View>
            <Text style={{ textAlign: 'center' }}>Powered by heitorSantos.com </Text>
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
export default AboutPageView;