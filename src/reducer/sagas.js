
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getListTodoSuccess } from '../actions/action';
import { getTodoData } from '../utils/apiCaller';

function* getListTodoSaga(action) {
    try {
        const res = yield call(getTodoData)
        // const data = res.data
        yield put(getListTodoSuccess(res))
    } catch (error) {
        console.log(error.message)
    }
}

function* todosSaga() {
    yield takeLatest('GET_LIST_TODO', getListTodoSaga)
}

export function* todos() {
    yield all([call(todosSaga)])
}