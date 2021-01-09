import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonGoBack from '../components/ButtonGoBack';

// import { Container } from './styles';

const AboutPageView = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ButtonGoBack
                style={[styled.buttonClouse, styled.sobreamento]}
                size={30}
                iconName="close"
            />
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 30, }}>About Page</Text>
            </View>
        </SafeAreaView>
    );
}

const styled = StyleSheet.create({
    buttonClouse: {
        borderRadius: 50,
        display: 'flex',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        elevation: 3,
        fontSize: 30,
        zIndex: 1
    },
    sobreamento: {
        shadowColor: '#292929',
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity: .50,
        shadowRadius: 5.65,
        elevation: 5
    },
})
export default AboutPageView;