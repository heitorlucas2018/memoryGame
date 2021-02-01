import ptBr from '../pt-br';
import en from '../en'
import { NativeModules, Platform } from 'react-native';

/**
 * Este hook é responsavel por adquirir o idioma do device e localizar o valor do texto diacordo a keyString enviada.
 * @param {*} keyString 
 * @example header.page.label
 */
export default function useLocale(keyString) {
    const locale = handlerLocaleByDevice();

    if (locale == 'pt') return handlerByLanguage(ptBr, keyString);

    return handlerByLanguage(en, keyString)
}

/**
 * Funcao responsavel por normalizar o idioma retornado.
 * @example no iOS podemos receber pt_US e no android pt_BR, para o idioma português
 */
const handlerLocaleByDevice = () => {
    const locale = getLocaleByDevice();
    const normalizeTranslate = {
        en_US: `en`,
        en: 'en',
        pt_BR: `pt`,
        pt_US: 'pt'
    }

    return normalizeTranslate[locale];
}

/**
 * Funcão responsavel por adquirir o idioma utilizado no device
 */
const getLocaleByDevice = () => {
    return Platform.OS === 'ios' ?
        NativeModules.SettingsManager.settings.AppleLocale : //Adiquirir idioma device IOS
        NativeModules.I18nManager.localeIdentifier; // Adiquirir idioma device Android 
}

/**
 * Funcão responsavel por mapear a chave string no objeto json, para retornar o texto
 * @param {Object} language 
 * @param {String} keyString 
 */
const handlerByLanguage = (language, keyString) => {
    if (keyString != null || keyString != '') {
        let data = language;
        keyString.split(`.`).forEach(e => {
            data = data[e];
        });
        if (data !== undefined && !(data instanceof Object)) {
            return data;
        }
    }
    return keyString;
}