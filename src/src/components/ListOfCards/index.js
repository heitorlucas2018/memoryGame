import React, { useState, useEffect, useContext } from 'react';
import { Modal, SafeAreaView, Text, useWindowDimensions, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { ScoreViewContext } from '../../helpers/utils';

import Card from '../Card/Index'

function ListOfCards({ data, numColumns, tyleList }) {

  const { score, setScore } = useContext(ScoreViewContext);
  const [selections, setSelections] = useState([]);
  const [arrayOfCards, setArrayOfCards] = useState([]);
  const [dimension, setDimension] = useState(0);
  const { width, height, scale } = useWindowDimensions();


  useEffect(() => {
    setArrayOfCards([])
    setSelections([])
    function calcDimension() {
      if (!data.length) return;
      const value = ((width * height) / 1000)  //(width < height) ? width : height
      const area = Math.floor((value / data.length))
      setDimension(area)
    }
    calcDimension()
  }, [data])

  const onSelect = (card) => {
    if (selections.length < 2 && !selections.includes(card)) {
      setSelections((cards) => [...cards, card])
    } else {
      setSelections((cards) => [card])
    }
  }

  useEffect(() => {
    if (selections.length < 2) return;
    const fristCard = data[selections[0]]
    const secondCard = data[selections[1]]

    if (fristCard === secondCard) {
      setScore(score + 1);
      setSelections([])
      setArrayOfCards((cards) => [...cards, fristCard])
    }

  }, [selections])

  return (
    <View style={{ display: 'flex' }}>
      <ScrollView>
        <SafeAreaView style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
          {data.map((e, i) => {
            const faceUp = selections.includes(i);
            const isMatch = arrayOfCards.indexOf(e) > -1
            return (<Card
              key={i}
              typeContent={tyleList}
              content={e.content}
              isFaceUp={(isMatch || faceUp)} 
              size={dimension}
              onSelected={() => onSelect(i)}
              afterClosure={() => setSelections([])}
            />)
          })}
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

export default ListOfCards;