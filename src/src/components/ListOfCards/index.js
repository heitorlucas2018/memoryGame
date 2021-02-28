import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  useWindowDimensions,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {KEY_SCORE_GAME} from '../../Constants/keys';

import {ScoreViewContext} from '../../helpers/utils';
import StorageGame from '../../Services/storage';

import Card from '../Card/Index';

function ListOfCards({data, numColumns, tyleList}) {
  const {score, setScore, setResetGame} = useContext(ScoreViewContext);
  const [selections, setSelections] = useState([]);
  const [arrayOfCards, setArrayOfCards] = useState([]);
  const [dimension, setDimension] = useState(0);
  const {width, height, scale} = useWindowDimensions();

  useEffect(() => {
      if((arrayOfCards.length * 2) == data.length && data.length > 0) {
        if(setResetGame instanceof Function) {
          setResetGame(true)
          setScore(null)
        }
      }
  }, [arrayOfCards]);

  useEffect(() => {
    setArrayOfCards([]);
    setSelections([]);
    function calcDimension() {
      if (!data.length) return;
      const value = (width * height) / 1000; //(width < height) ? width : height
      const area = Math.floor(value / data.length);
      setDimension(area);
    }
    calcDimension();
  }, [data]);

  const onSelect = (card) => {
    if (selections.length < 2 && !selections.includes(card)) {
      setSelections((cards) => [...cards, card]);
    } else {
      setSelections((cards) => [card]);
    }
  };

  useEffect(() => {

    if (selections.length < 2) return;
    const fristCard = data[selections[0]];
    const secondCard = data[selections[1]];

    if (fristCard === secondCard) {
      const valuerandom = 10;
      const pontuacao = Math.round(1 * score + valuerandom);
      setScore(pontuacao);
      setSelections([]);
      setArrayOfCards((cards) => [...cards, fristCard]);
      StorageGame.set(KEY_SCORE_GAME, pontuacao)
        .catch((error) => console.log('ERROR::ListOfCards->StorageGame', error));
    } else {
      const valuerandom = Math.trunc(Math.random() * 10 + 2);
      const pontuacao = (score <= 0) ? 0 : Math.round(1 * score - valuerandom);
      setScore(pontuacao);
      StorageGame.set(KEY_SCORE_GAME, pontuacao)
        .catch((error) => console.log('ERROR::ListOfCards->StorageGame', error));
    }

  }, [selections]);

  return (
    <View style={{display: 'flex'}}>
      <ScrollView>
        <SafeAreaView
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {data.map((e, i) => {
            const faceUp = selections.includes(i);
            const isMatch = arrayOfCards.indexOf(e) > -1;
            return (
              <Card
                key={i}
                typeContent={tyleList}
                content={e.content}
                isFaceUp={isMatch || faceUp}
                size={dimension}
                onSelected={() => onSelect(i)}
                afterClosure={() => setSelections([])}
              />
            );
          })}
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

export default ListOfCards;
