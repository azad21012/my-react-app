import ApiCall from "../../../helpers/apiCall";
import {success, setToken,getToken,clearToken} from "../../../helpers/utility";
import * as types from '../../../constants/actionTypes';
import * as urls from '../../../constants/urls';
import jwtDecode from 'jwt-decode';

const actions = {
    login: (email, password) =>
        ApiCall({
            type: types.LOGIN_REQUEST,
            request: {
                method: "POST",
                url: urls.LOGIN_REQUEST_URL,
                data: {email, password}
            },      
            onSuccess: function ({dispatch}, response) {
                const token = response.token
                setToken(token);
                const decoded = jwtDecode(token); 
                dispatch({type: success(types.LOGIN_REQUEST),
                    response:{...decoded, isAuth: true}
                });
            }
        }),
    checkAuth: () => dispatch => {
        const accessToken = getToken();
        if (accessToken === undefined) {
            return dispatch({
                type: success(types.CHECK_AUTHORIZATION),
                response: {isAuth: false}
            });
        }
        const decoded = jwtDecode(accessToken);
        return dispatch({
            type: success(types.CHECK_AUTHORIZATION),
            response: {...decoded, isAuth: true}
        });
    },
    logout: () =>
        ApiCall({
            type: types.LOGOUT_REQUEST,
            request: {
                method: "POST",
                url: urls.LOGOUT_REQUEST_URL
            },
            onSuccess: ({dispatch}, response) => {
                clearToken();
                dispatch({type: success(types.LOGOUT_REQUEST), response});
            },
            fail: () => {
                clearToken();
            },

        })
};
export default actions;
