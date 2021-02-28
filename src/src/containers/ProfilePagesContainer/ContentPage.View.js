import React from 'react';
import {SafeAreaView, StyleSheet, useWindowDimensions, View} from 'react-native';
import HTML from "react-native-render-html";
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/Header';
import {Colors} from '../../Constants/Colors';

const ProfilePageView = ({route}) => {
  const {title, content} = route.params;
  const contentWidth = useWindowDimensions().width;

  const children =
    content instanceof Object ? (
      content
    ) : (
      <HTML source={{ html: content }} contentWidth={contentWidth} />
    );

  return (
    <SafeAreaView>
      <View style={{padding: 10}}>
        <Header text={title} goBack={true} />
        <ScrollView style={{height: '90%'}}>
          <SafeAreaView style={{display: 'flex', flex: 1}}>
            {children}
          </SafeAreaView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styled = StyleSheet.create({
  buttonClouse: {
    borderWidth: 0,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: Colors.with,
  },
  sobreamento: {
    shadowColor: '#292929',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.65,
    elevation: 5,
  },
  textTitle: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  textBody: {
    fontSize: 20,
    textAlign: 'justify',
  },
});
export default ProfilePageView;
