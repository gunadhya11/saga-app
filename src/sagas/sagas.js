 
import * as Api from '../api'
import { call, put, all, takeEvery } from 'redux-saga/effects'
import * as types from "../types/users";
 

export function* fetchUser() {
    
  const users = yield call(
    Api.fetchUsers,
    "https://jsonplaceholder.typicode.com/todos"
  );
  yield put({ type: types.FETCH_USERS_SUCCESS, payload: users });
}

export function* watchUsersSaga() {
    
  yield takeEvery(types.FETCH_USERS_PENDING, fetchUser);
}

export function* rootSaga() {
    

  yield all([watchUsersSaga()]);
}