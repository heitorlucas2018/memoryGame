import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import TextLocale from '../../components/TextLocale';
import {Colors} from '../../Constants/Colors';
import FontFamily from '../../Constants/FontsFamily';
import FirebaseServices from '../../Services/firebase.service';

export default function EvaluationContainer() {
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [comentario, setComentario] = useState(null);

  const validateForm = () => {
    if (email == null) {
      setEmailError('E-mail não informado!!');
      return false;
    }

    if (email.indexOf('@') < 0) {
      setEmailError('E-mail Invalido!!');
      return false;
    }

    return true;
  };

  const handlerSubmit = () => {
    if (!validateForm()) return;

    const form = {
      email,
      comentario,
      createAt: FirebaseServices.getfirestore().FieldValue.serverTimestamp(),
    };

    FirebaseServices.registerFeedback(form)
      .then((data) => {
        setEmail(null);
        setComentario(null);
        alert('Success full');
      })
      .catch((error) => alert('Was unsuccess'));
  };

  return (
    <SafeAreaView style={styled.container}>
      <ScrollView>
        <View>
          <View style={{margin: 5}}>
            <View style={{display: 'flex', padding: 5}}>
              <Text style={styled.textBody}>E-mail:</Text>
              <TextInput
                style={styled.textInput}
                onChangeText={(e) => setEmail(e)}
                value={email}
                keyboardAppearance="default"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
              {emailError && (
                <Text style={styled.textInputError}>{emailError}</Text>
              )}
            </View>
            <View style={{display: 'flex', padding: 5}}>
              <Text style={styled.textBody}>Comment:</Text>
              <TextInput
                style={[styled.textInput, {minHeight: 150, maxHeight: 200}]}
                onChangeText={(e) => setComentario(e)}
                value={comentario}
                keyboardAppearance="default"
                multiline={true}
              />
            </View>
          </View>
          <View style={{display: 'flex', padding: 5}}>
            <TouchableOpacity
              style={styled.buttonEnviar}
              onPress={handlerSubmit}>
              <Text style={{fontSize: 22, color: '#fff', fontWeight: 'bold'}}>
                submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styled = StyleSheet.create({
  container: {
    display: 'flex',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#e2e2e2',
    borderColor: '#a09f9f',
    flex: 1,
    marginTop: 30,
    borderRadius: 10
  },
  containerTitle: {
    padding: 5,
    backgroundColor: Colors.main,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: FontFamily.title,
  },
  textBody: {
    fontSize: 20,
  },
  textInput: {
    fontSize: 25,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginTop: 5,
    backgroundColor: Colors.with,
    borderColor: '#8d8d8d',
  },
  textInputError: {
    fontSize: 18,
    marginTop: 5,
    color: '#b90000',
    flexWrap: 'wrap',
  },
  buttonEnviar: {
    borderRadius: 10,
    backgroundColor: '#00a116',
    padding: 10,
    width: '40%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    margin: 10,
  },
});
