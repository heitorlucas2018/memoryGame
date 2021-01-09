import React from 'react'
import { View, FlatList, StyleSheet, Text, SafeAreaView, useWindowDimensions, Pressable, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

import { gameOfData } from '../helpers/constants'
import Header from '../components/Header'
import ButtonAbout from '../components/Button/Rounded'

export default function MainPage({route, navigation}) {
    const { width, height } = useWindowDimensions()

    return (
        <SafeAreaView style={[styled.container, styled.sobreamento]}>
            <ButtonAbout
                style={styled.button}
                iconName="infocirlceo"
                onCLick={() => {
                    navigation.navigate("About")
                }}
            />
            <View style={[styled.content, styled.sobreamento, { width: Math.floor(width * 0.85), height: Math.floor(height * 0.5) }]}>
                <Header
                    text={`Selecione o modelo dos cartões`}
                    styleContainer={[styled.header, { width: Math.floor(width * 0.85) }]}
                />
                <FlatList
                    style={styled.list}
                    data={gameOfData}
                    keyExtractor={({ item, index }) => index}
                    renderItem={({ item: { content, data, type }, index }) =>
                    (<ItemList
                        key={index}
                        content={content}
                        data={data}
                        typeList={type} />)}
                />
            </View>
        </SafeAreaView>
    )
}

const ItemList = ({ content, data, typeList }) => {
    const navigation = useNavigation();
    const __onClick = () => {
        navigation.navigate('Game', { model: content, typeList: typeList, data: data })
    }
    return (
        <Pressable
            style={styled.itemContainer}
            onPress={__onClick}>
            <Text style={styled.itemText}>
                {content}
            </Text>
            <Icon name='right' size={20} />
        </Pressable>
    )
}

const styled = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        resizeMode: 'stretch',
    },
    container: {
        borderWidth: 3,
        borderRadius: 20,
        margin: 3,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcc169',
    },
    sobreamento: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: .30,
        shadowRadius: 4.65,
        elevation: 7
    },
    content: {
        borderWidth: 3,
        borderRadius: 20,
        margin: 5,
        display: 'flex',
        height: '40%',
        backgroundColor: '#a1a1a1',
    },
    list: {
        flex: 1,
        margin: 10
    },
    header: {
        top: -10,
        margin: 0,
        marginLeft: -2,
        marginRight: -2,
        borderWidth: 3,
    },
    itemContainer: {
        borderWidth: 1,
        borderRadius: 10,
        margin: 5,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#f0f0f0'

    },
    itemText: {
        fontSize: 20,
        fontWeight: '300',
        marginLeft: 15,
        flex: 1.5
    },
    button: {
        position: 'absolute',
        top: 10,
        right: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 5
    }
})