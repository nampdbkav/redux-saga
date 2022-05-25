import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getTodosData, addTodosData, deleteTodosData, completeTodosData } from './todosAPI'
import { addListTodoSuccess, completeListTodoSuccess, deleteListTodoSuccess, getListTodoSuccess } from '../action/action';

//Fetch Todos
function* getListTodoSaga(action) {
    try {
        const data = yield call(getTodosData);
        yield put(getListTodoSuccess(data));
    } catch (error) {
        console.log(error.message)
    }
}

function* todosSaga() {
    yield takeLatest('GET_LIST_TODO', getListTodoSaga);
}

//Add Todos
function* addTodo({ payload }) {
    try {
        const { text } = payload
        const res = yield call(addTodosData, text);
        const { data } = res
        yield put(addListTodoSuccess(data))
    } catch (error) {
        console.log(error.message)
    }
}

function* onAdd() {
    yield takeLatest('ADD_LIST_TODO', addTodo)
}

//Delete Todo
function* deleteTodo({ payload }) {
    try {
        const { id } = payload
        const res = yield call(deleteTodosData, id)
        const { data } = res
        yield put(deleteListTodoSuccess(id))
    } catch (error) {
        console.log(error.message)
    }
}

function* onDelete() {
    yield takeLatest('DELETE_LIST_TODO', deleteTodo)
}

//Complete Todo
function* completeTodo({ payload }) {
    const { id } = payload
    try {
        const todo = yield call(completeTodosData, id)
        const { complete } = todo
        yield put(completeListTodoSuccess(id, complete))
    } catch (error) {
        console.log(error.message)
    }
}

function* onComplete() {
    yield takeLatest('COMPLETE_LIST_TODO', completeTodo)
}

function* todos() {
    yield all([call(todosSaga), call(onAdd), call(onDelete), call(onComplete)])
}

export default todos;