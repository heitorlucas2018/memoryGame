// @ts-nocheck
import React, {useState, useEffect, useContext} from 'react';
import {
  Animated,
  Text,
  StyleSheet,
  View,
  Easing,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import Header from '../components/Header';
import ListCards from '../components/ListOfCards';
import Button from '../components/Button/Rounded';
import {ColorButtons, Colors} from '../Constants/Colors';
import {Embaralhar, ScoreViewContext} from '../helpers/utils';
import TextLocale from '../components/TextLocale';
import FontFamily from '../Constants/FontsFamily';
import CoroaBase64 from '../Constants/imageCoroaBase64';

export default function MemoryEmoticonVew({route, navigation}) {
  const {score, setScore, setResetGame, resetGame} = useContext(ScoreViewContext);
  const {titlePage, data, typeList} = route.params;
  const [dataPairs, setDataPairs] = useState([]);

  useEffect(()=> setResetGame(true), [])

  useEffect(() => {
    const carregarJogo = () => {
      const value_count = parseInt(score) * 1;
      const valueCount = Math.trunc(value_count / 10);
      const listOfCards = [];

      if (valueCount <= data.length) {
        const size = valueCount < 1 ? 1 : valueCount;
        for (let count = 0; count < size; count++) {
          listOfCards.push(data[count]);
        }
        setDataPairs(Embaralhar([...listOfCards, ...listOfCards]));
      } else {
        setDataPairs(Embaralhar([...data, ...data]));
      } 
    }

    if (resetGame) {
      setDataPairs([]);
      setScore(0);
      carregarJogo();
      setResetGame(false);
    }
  }, [resetGame]);

  return (
    <SafeAreaView style={[styled.container, styled.sobreamento]}>
      <Header
        text={titlePage}
        goBack={true}
        styleText={{fontSize: 30}}
        styleContainer={[styled.header, styled.sobreamento]}>
        <Button
          style={styled.button}
          text={'Novo Jogo'}
          color={ColorButtons.primary}
          onCLick={() => {
            setResetGame(true);
          }}
        />
      </Header>
      <View
        style={{
          backgroundColor: '#f0f0f0',
          margin: 5,
          padding: 5,
          borderWidth: 2,
        }}>
        <Text style={styled.subHeader}>
          <CoroaBase64 />
          {` ${score}`}
        </Text>
      </View>
      {!dataPairs.length && (
        <ActivityIndicator size="large" color={Colors.main} />
      )}
      <View style={styled.contentList}>
          <ListCards tyleList={typeList} data={dataPairs} />
      </View>
    </SafeAreaView>
  );
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
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 7,
  },
  header: {
    top: -2,
    margin: 0,
    marginLeft: -2,
    marginRight: -2,
    borderWidth: 3,
    zIndex: 1,
  },
  subHeader: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: FontFamily.title,
  },
  contentList: {
    display: 'flex',
    padding: 5,
    flex: 1,
  },
  button: {
    right: 0,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: Colors.with,
  },
});
