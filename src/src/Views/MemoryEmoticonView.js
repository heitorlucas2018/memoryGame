import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, StyleSheet, View } from 'react-native'
import Header from '../components/Header';
import ListCards from '../components/ListOfCards';
import Button from '../components/Button/Rounded'

import { ColorButtons, Colors, Embaralhar, ScoreViewContext } from '../helpers/utils'

export default function MemoryEmoticonVew({ route, navigation }) {
    const [score, setScore] = useState(0);
    const [resetGame, setResetGame] = useState(true);
    const { model, data, typeList } = route.params
    const [dataPairs, setDataPairs] = useState([]);

    useEffect(() => {
        if (resetGame) {
            setDataPairs([])
            setResetGame(false)
        }
        if (dataPairs.length > 0)
            return;
        setDataPairs(Embaralhar([...data, ...data]))
        console.log(`iniciando lista de jogo`)
    }, [resetGame]);

    return (
        <SafeAreaView style={[styled.container, styled.sobreamento]}>
            <Header
                text={`${model}`}
                goBack={true}
                styleText={{ fontSize: 30 }}
                styleContainer={[styled.header, styled.sobreamento]}
            >
                <Button
                    style={styled.button}
                    text={"Novo Jogo" + data.length}
                    color={ColorButtons.primary}
                    onCLick={() => {
                        setResetGame(true)
                    }} />
            </Header>
            <View style={{
                backgroundColor: '#f0f0f0',
                margin: 5,
                padding: 5,
                borderWidth: 2
            }}>
                <Text
                    style={{ fontSize: 20, textAlign: 'center' }}>
                    Acertos: {score}
                </Text>
            </View>
            <View style={styled.contentList}>
                <ScoreViewContext.Provider value={{ score, setScore, setResetGame }}>
                    <ListCards
                        tyleList={typeList}
                        data={dataPairs} />
                </ScoreViewContext.Provider>
            </View>
        </SafeAreaView>
    )
}

const styled = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderRadius: 20,
        margin: 3,
        display: 'flex',
        flex: 1,
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
    header: {
        top: -2,
        margin: 0,
        marginLeft: -2,
        marginRight: -2,
        borderWidth: 3,
        zIndex: 1
    },
    contentList: {
        display: 'flex',
        padding: 5,
        flex: 1
    },
    button: {
        right: 0,
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: Colors.with
    }
})