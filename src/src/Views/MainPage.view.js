// @ts-nocheck
import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  SafeAreaView,
  useWindowDimensions,
  Pressable,
  Animated,
  ActivityIndicator,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import {gameOfData} from '../Constants/Data';
import Header from '../components/Header';
import ButtonAbout from '../components/Button/Rounded';
import useLocaleByObject from '../locale/hooks/useLocaleByObject';
import FontFamily from '../Constants/FontsFamily';
import FirebaseServices from '../Services/firebase.service';
import ProgressGame from '../components/ProgressGame';

export default function MainPage({route, navigation}) {
  const {width, height} = useWindowDimensions();
  const [dataOfGame, setDataOfGame] = useState([]);
  const [largura, setLargura] = useState(new Animated.Value(0));
  const [altura, setAltura] = useState(new Animated.Value(0));
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const [score, setScore] = useState(0);

  useEffect(() => {
    FirebaseServices.dataGame().then((dataOFList) => setDataOfGame(dataOFList));

    Animated.sequence([
      Animated.timing(largura, {
        toValue: Math.floor(width * 0.85),
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(altura, {
        toValue: Math.floor(height * 0.5),
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={[styled.container, styled.sobreamento]}>
      <ButtonAbout
        style={styled.button}
        iconName="infocirlceo"
        onCLick={() => navigation.navigate('Profile')}
      />
      {dataOfGame.length < 0 && (
        <ActivityIndicator collapsable color="#f5f6f7" size="large" />
      )}
      <ProgressGame />
      <Animated.View
        style={[
          styled.content,
          styled.sobreamento,
          {
            width: largura,
            height: altura,
          },
        ]}>
        <Animated.View style={{opacity: opacity, flex: 1}}>
          <SafeAreaView
            style={{
              display: 'flex',
              flex: 1,
              padding: 5,
              position: 'relative',
            }}>
            <Header
              keyString={`header.page.main`}
              styleContainer={[styled.header]}
            />
            <FlatList
              style={styled.list}
              data={dataOfGame}
              keyExtractor={({item, index}) => index}
              renderItem={({item: {label, data, type}, index}) => (
                <View key={index}>
                  <ItemList
                    content={label}
                    data={data}
                    typeList={type}
                  />
                </View>
              )}
            />
          </SafeAreaView>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

const ItemList = ({content, data, typeList}) => {
  const navigation = useNavigation();
  const textLabel = useLocaleByObject(content);
  const __onClick = () => {
    navigation.navigate('Game', {
      titlePage: textLabel,
      typeList: typeList,
      data: data,
    });
  };
  return (
    <Pressable style={styled.itemContainer} onPress={__onClick}>
      <Text style={styled.itemText}>{textLabel}</Text>
      <Icon name="right" size={20} />
    </Pressable>
  );
};

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
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 7,
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
    backgroundColor: '#a1a1a1',
  },
  header: {
    top: -7,
    margin: 0,
    marginLeft: -7,
    marginRight: -7,
    borderWidth: 3,
  },
  itemContainer: {
    borderWidth: 1.5,
    borderRadius: 10,
    margin: 5,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
  },
  itemText: {
    fontSize: 18,
    marginLeft: 15,
    flex: 1.5,
    fontFamily: FontFamily.title,
  },
  button: {
    position: 'absolute',
    top: 10,
    right: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 5,
  },
});
