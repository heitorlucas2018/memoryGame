import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ColorsLevel as Colors} from '../../Constants/Colors';
import FontFamily from '../../Constants/FontsFamily';
import { KEY_SCORE_GAME } from '../../Constants/keys';
import { ScoreViewContext } from '../../helpers/utils';
import StorageGame from '../../Services/storage';


export default function ProgressGame() {

  const {score, setScore} = useContext(ScoreViewContext);
  const [currentValue, setCurrentValue] = useState(0);
  const [mapLevel, setMapLevel] = useState([]);

  const handlerProgress = async (value) => {
    const current = value <= 3 ? 3 : value;
    const arrayLevel = [];
    const count = current + 2;
    const previous = current - 2;
    for (let i = previous; i <= count; i++) {
      arrayLevel.push(i);
    }
    return arrayLevel;
  };

  useEffect(() => {
    console.log('render componente ProgressGame->setLevel');
    StorageGame.get(KEY_SCORE_GAME).then((value)=> {
        const x = Math.trunc(value/10) - 2;
        setCurrentValue(x);
        setScore(value)
    });

    handlerProgress(currentValue).then((data) => setMapLevel(data));
  }, [score]);

  return (
    <View style={styled.container}>
      <View style={styled.barProgress}>
        {mapLevel.map((e, i) => {
          let color =
            e <= currentValue ? Colors.previousColor : Colors.nextColor;
          let size = 25;
          if (e == currentValue) {
            color = Colors.currentColor;
            size = 30;
          }
          return <ItemLevel value={e} key={i} color={color} size={size} />;
        })}
      </View>
    </View>
  );
}

const ItemLevel = ({value, color, size}) => (
  <View
    style={[
      styled.containerItem,
      styled.sobreamento,
      {backgroundColor: color || '#fff', width: size || 25, height: size || 25},
    ]}>
    <Text style={styled.textItem}>{value}</Text>
  </View>
);

const styled = StyleSheet.create({
  container: {
    display: 'flex',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  containerItem: {
    margin: 5,
    borderWidth: 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  textItem: {
    fontFamily: FontFamily.text,
    fontSize: 20,
    color: '#141414',
  },
  barProgress: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 2,
    width: '100%',
    height: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.barProgress,
    borderRadius: 10,
  },
  sobreamento: {
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
