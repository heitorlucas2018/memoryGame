/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, View, StatusBar, Platform} from 'react-native';
import {hideNavigationBar} from 'react-native-navigation-bar-color';

import {Colors} from './Constants/Colors';
import { ScoreViewContext } from './helpers/utils';
import Routes from './Routes';

const App: () => React$Node = () => {
  const [score, setScore] = useState(0);
  const [resetGame, setResetGame] = useState(true);

  if (Platform.OS !== 'ios') {
    hideNavigationBar();
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
      <StatusBar
        hidden={true}
        animated={true}
        translucent={true}
        barStyle="default"
        showHideTransition="slide"
      />
      <View style={{flex: 1, padding: 2}}>
        <ScoreViewContext.Provider value={{score, setScore, resetGame, setResetGame}}>
          <Routes />
        </ScoreViewContext.Provider>
      </View>
    </SafeAreaView>
  );
};

export default App;
