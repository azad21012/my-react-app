
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as urls from '../../../constants/urls';
import * as types from '../../../constants/actionTypes';
import apiSaga from '../../../helpers/apiSaga';
import decodeToken from '../../../helpers/decodeToken';
import { setToken, success, fail } from '../../../helpers/utility';

function* generalWorker(action) {
    try {
       const response = yield call(apiSaga, action.request);
    //    setToken(response.data.token);
    //    const decoded = decodeToken(response.data.token); 
    //    yield put({type: success(types.LOGIN_REQUEST), response: {...decoded, isAuth: true}});
        yield action.onSuccess(response.data);
    } catch (e) {
        yield put({type: fail(action.type), errorResponse: e.response.data});
    }
}
export function* loginWatcher() {
    yield takeLatest(types.LOGIN_REQUEST, generalWorker);
}

export function loginWatcherAction(email, password) {
    // const request = {
    //     method: "POST",
    //     url: urls.LOGIN_REQUEST_URL,
    //     data: authParams
    // };
    return { 
        type: types.LOGIN_REQUEST,
        request: {
            method: "POST",
            url: urls.LOGIN_REQUEST_URL,
            data: {email, password}
        }, 
        onSuccess: function* (response) {
        setToken(response.token);
        const decoded = decodeToken(response.token); 
        yield put({type: success(types.LOGIN_REQUEST), response: {...decoded, isAuth: true}});
        } 
    };
}