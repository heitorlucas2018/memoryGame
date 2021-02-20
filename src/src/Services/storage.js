//import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class StorageGame {

  static get keyApp () {
      return '@STORAGETOGAME';
  }

  static async set(key, data) {
    const value = JSON.stringify(data)
    await AsyncStorage.setItem(`@STORAGETOGAME`, value);
  }

  static async get(key) {
    try {
      const value =  await AsyncStorage.getItem(`@STORAGETOGAME`);
      if(value != null) {
        return JSON.parse(value);
      } else {
        return 0
      }
    } catch (error) {
      console.log('ERROR::StorageGame->get', error)
    }
  }
}
