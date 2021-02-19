//import AsyncStorage from 'react-native';

export default class StorageGame {

  static get keyApp () {
      return '@STORAGETOGAME';
  }

  static async set(key, data) {
    let value = '';
    if (data instanceof String) {
      value = data;
    } else if (data instanceof Number) {
      value = `${data}`;
    } else {
      return;
    }
   // await AsyncStorage.setItem(`${StorageGame.keyApp}:${key}`, value);
  }

  static async get(key) {
   // return await AsyncStorage.getItem(`${this.keyApp}:${key}`);
  }
}
