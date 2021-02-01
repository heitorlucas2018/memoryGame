import ptBr from '../pt-br';
import en from '../en';

export default function useLocale(keyString, lang) {
    const lingage = lang;

    if (lang == `prBr`) {
        return handlerLocale(ptBr, keyString)
    } else {
        return handlerLocale(en, keyString)
    }
}

const handlerLocale = (lang, keyString) => {
    if (keyString != null || keyString != '' ) {
        let data = lang;
        keyString.split(`.`).forEach(e => {
            data = data[e];
        });
        if (data !== undefined && !(data instanceof Object)) {
            return data;
        }
    }
    return keyString;
}