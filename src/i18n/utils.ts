import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const segments = url.pathname.split('/');
    const lang = segments.find(segment => segment in ui);
    if (lang) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}
