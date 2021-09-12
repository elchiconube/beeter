import Cookies from "js-cookie";

export const getCookie = (key) => Cookies.get(key);
export const getLocalStorage = (key) => localStorage.getItem(key);
export const getSessionStorage = (key) => sessionStorage.getItem(key);

export const removeCookie = (key, options = {}) => Cookies.remove(key, options);
export const removeLocalStorage = (key) => localStorage.removeItem(key);
export const removeSessionStorage = (key) => sessionStorage.removeItem(key);

export const setCookie = (key, value, options = {}) =>
  Cookies.set(key, value, options);
export const setLocalStorage = (key, value) => localStorage.setItem(key, value);
export const setSessionStorage = (key, value) =>
  sessionStorage.setItem(key, value);
