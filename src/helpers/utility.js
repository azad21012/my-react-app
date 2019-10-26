export const success = actionType => `${actionType}_SUCCESS`;
export const fail = actionType => `${actionType}_FAIL`;
export const reset = actionType => `${actionType}_RESET`;


const cookie = require('js-cookie');
export const clearToken = () => cookie.remove("auth");

/**
 * @public
 * return token with "auth key"
 */

export const setToken = (token) => cookie.set("auth", token, {"expires": ""});
export const getToken = () => cookie.get("auth");