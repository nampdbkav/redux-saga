import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getTodosData, addTodosData, deleteTodosData, editTodosData, completeTodosData, completeAllTodosData, clearCompleteTodosData } from './todosAPI'
import { addListTodoSuccess, editListTodoSuccess, deleteListTodoSuccess, getListTodoSuccess, completeListTodoSuccess, completeAllListTodoSuccess, clearCompleteListTodoSuccess } from '../action/action';

//Fetch Todos
function* getListTodoSaga() {
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
    const { id } = payload
    try {
        yield call(deleteTodosData, id)
        yield put(deleteListTodoSuccess(id))
    } catch (error) {
        console.log(error.message)
    }
}

function* onDelete() {
    yield takeLatest('DELETE_LIST_TODO', deleteTodo)
}

//Edit Todo
function* editTodo({ payload }) {
    const { id, text } = payload
    try {
        const res = yield call(editTodosData, id, text)
        const { data } = res
        yield put(editListTodoSuccess(data))
    } catch (error) {
        console.log(error.message)
    }
}

function* onEdit() {
    yield takeLatest('EDIT_LIST_TODO', editTodo)
}

//Complete Todo
function* completeTodo({ payload }) {
    const { id, complete } = payload
    try {
        const res = yield call(completeTodosData, id, complete)
        const { data } = res
        yield put(completeListTodoSuccess(data))
    } catch (error) {
        console.log(error.message)
    }
}

function* onComplete() {
    yield takeLatest('COMPLETE_LIST_TODO', completeTodo)
}

//Complete All Todo
function* completeAllTodo({ payload }) {
    try {
        const data = yield call(completeAllTodosData)
        yield put(completeAllListTodoSuccess(data))
    } catch (error) {
        console.log(error.message);
    }
}

function* onCompleteAll() {
    yield takeLatest('COMPLETE_ALL_TODO', completeAllTodo)
}

//Remove Complete Todo
function* clearCompleteTodo() {
    try {
        const data = yield call(clearCompleteTodosData)
        yield put(clearCompleteListTodoSuccess(data))
    } catch (error) {
        console.log(error.message);
    }
}

function* onClear() {
    yield takeLatest('CLEAR_COMPLETE_LIST_TODO', clearCompleteTodo)
}

function* todos() {
    yield all([call(todosSaga), call(onAdd), call(onDelete), call(onEdit), call(onComplete), call(onCompleteAll), call(onClear)])
}

export default todos;