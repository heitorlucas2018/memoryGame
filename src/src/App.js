/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, View, StatusBar, Platform } from 'react-native';
import { hideNavigationBar } from 'react-native-navigation-bar-color';

import { Colors } from './Constants/Colors';
import Routes from './Routes';

const App: () => React$Node = () => {

  if (Platform.OS !== 'ios') {
    hideNavigationBar();
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.with }}>
      <StatusBar
        hidden={true}
        animated={true}
        translucent={true}
        barStyle="default"
        showHideTransition="slide" />
      <View style={{ flex: 1, padding: 2 }}>
        <Routes />
      </View>
    </SafeAreaView>
  );
};



export default App;
