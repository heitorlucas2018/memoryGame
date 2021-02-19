import firestore from '@react-native-firebase/firestore';
export default class FirebaseServices {

    static async dataGame() {
        const collection = 'dataToGame';
        const result = [];
        await firestore().collection(collection).get()
            .then(collections => collections.docs.map(({ _data }) => result.push(_data)))
            .catch(error => console.log(`LOG:ERROR::FirebaseServices:`, error));
        return result;
    }

    static async dataAboutApp() {
        const collection = 'aboutDataList';
        const result = [];
        await firestore().collection(collection).get()
            .then(collections => collections.docs.map(({ _data }) => result.push(_data)))
            .catch(error => console.log(`LOG:ERROR::FirebaseServices:`, error));
        return result;
    }
}