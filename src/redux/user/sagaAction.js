import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function callAsync1(bool){
    return new Promise((resolve,reject)=>{
        if(bool){
            setTimeout(()=>resolve({id:2}),1000)
            
        }else{
            reject('error something')
        }
    })
   
}
function* fetchUserAsync(action) {
    try {
       const response = yield call(callAsync1,true);
       yield put({type: "USER_FETCH_SUCCEEDED", payload: {...response}});
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

export function* userWatcher() {
    yield takeLatest("USER_FETCH_REQUESTED", fetchUserAsync);
}
