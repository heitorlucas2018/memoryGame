import { Platform } from "react-native";
import StorageGame from "../src/Services/storage";

//Definindo mock do SO executado
Platform.OS = 'android'

test('should set value type String storage', () => {
    const value = 'teste';
    const key= 'keyTeste';
    let result = null;
    StorageGame.set(key, value).then(data => {
        result = 'sucess'
    });
    StorageGame.get(key)
        .then(data => console.log('exec teste value', data))
        .catch(error => console.error('ERROR', error))
        
    expect(result).toBe.toString()
})
