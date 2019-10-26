import { fail, success } from "../../../helpers/utility";
import * as types from '../../../constants/actionTypes.js';
import { generateFormalSelector } from "../../../helpers/generateFormalReducer";

const initState = { isLoading: false, data: undefined, hasError: false, errorMessage:'' };
export  function authReducer(
    state = initState,
    action
){
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return { ...initState, isLoading: true };
        case success(types.LOGIN_REQUEST):
            return { ...initState, data: action.response };
        case fail(types.LOGIN_REQUEST):
            return {
                ...initState,
                errorMessage: action.errorResponse.message,
                hasError: true
            };
        case types.LOGOUT_REQUEST:
            return { ...initState, isLoading: true };
        case success(types.LOGOUT_REQUEST):
            return { ...initState, data: action.response };
        case fail(types.LOGOUT_REQUEST):
            return {
                ...initState,
                hasError: true,
                errorMessage: action.errorResponse.message,
            };
        case types.CHECK_AUTHORIZATION:
            return { ...initState, isLoading: true };
        case success(types.CHECK_AUTHORIZATION):
            return { ...initState, data: action.response };
        case fail(types.CHECK_AUTHORIZATION):
            return {
                ...initState,
                hasError: true,
                errorMessage: action.errorResponse.message,
            };
        default:
            return state;
    }
}

export const authSelector = generateFormalSelector(state=>state.auth.AUTH)
