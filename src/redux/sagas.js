
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { api } from '../helpers/api';
import * as urls from '../constants/urls';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUserAsync(action) {
   // const request = {
   //    method: "POST",
   //    url: urls.LOGIN_REQUEST_URL,
   //    data: action.payload
   // };
   try {
      // const user = yield call(api.fetchUser, request);
      yield put({type: "USER_FETCH_SUCCEEDED", payload: {...action.payload}});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUserAsync);
}
export default mySaga;
