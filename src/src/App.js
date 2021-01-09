/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, Text, View, StatusBar } from 'react-native';
import { Colors } from './helpers/utils';
import Routes from './Routes'


const App: () => React$Node = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.with}}>
      <StatusBar
        hidden={true}
        animated={true}
        translucent={true}
        barStyle="default"
        backgroundColor={Colors.main}
        showHideTransition="slide"/>
      <View style={{flex: 1, padding: 2}}>
        <Routes />
      </View>
    </SafeAreaView>
  );
};



export default App;
