/** rootSaga.js */
import { all } from 'redux-saga/effects';
import { loginWatcher } from './auth/login/sagaAction';
import { userWatcher } from './user/sagaAction';


// import watchers from other files
export default function* rootSaga() {
  yield all([
    loginWatcher(),
    userWatcher(),
    // add other watchers to the array
  ]);
}