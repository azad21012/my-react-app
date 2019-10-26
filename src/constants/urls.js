const SUBFOLDER_URL = "";
const BACKEND_URL = "/BoilerPlate";
export const MAIN_URL = BACKEND_URL + SUBFOLDER_URL;

const MAIN_URL1 = MAIN_URL;
const BASE_URL1 =  `http://192.168.100.107${MAIN_URL}`;
const API1 = `${BASE_URL1}/api/v1`;
const RELATIVE_URL1 = `${MAIN_URL}/api/v1`;


// const MAIN_URL2 = MAIN_URL;
// const BASE_URL2 =  `http://37.114.240.134:32985${MAIN_URL}`;
// const API2 = `${BASE_URL2}/api/v1`;
// const RELATIVE_URL2 = `${MAIN_URL}/api/v1`;


/**
 * @description this block has { RELATIVE_URL2,API2,RELATIVE_URL2} variables
 * for development convert this variables to your custom variables such a { RELATIVE_URL3,API3,RELATIVE_URL3} 
 */
export const STORAGE_URL = `${MAIN_URL1}/storage/`;
export const PREFIXED = process.env.NODE_ENV === "development" ? RELATIVE_URL1 : API1 ;
export const GET_ATTACHMENTS_URL = RELATIVE_URL1;


//**************************************************************************** */
export const LOGIN_REQUEST_URL = `${PREFIXED}/auth/login`;
export const LOGOUT_REQUEST_URL = `${PREFIXED}/auth/logout`;