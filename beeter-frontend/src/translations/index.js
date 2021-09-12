import EN from "./EN.json";
import ES from "./ES.json";

export const translations = {
  en: EN,
  es: ES,
};

const browserLang = navigator.language.split(/[-_]/)[0];

export const locale = browserLang in translations ? browserLang : "es";

export const isLanguageSupported = (lang) =>
  lang in translations ? true : false;

export function flattenMessages(nestedMessages, prefix = "") {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    let value = nestedMessages[key];
    let prefixedKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "string") {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }
    return messages;
  }, {});
}
