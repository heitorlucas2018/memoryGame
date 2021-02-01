import { NativeModules, Platform } from 'react-native';


export default function useLocaleByObject(objectContent) {
    if (objectContent instanceof Object) {
        const locale = handlerLocaleByDevice();
        return objectContent[locale]
    }
    return objectContent;
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
