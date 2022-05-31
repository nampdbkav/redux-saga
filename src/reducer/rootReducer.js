import { combineReducers } from 'redux'
import filterShowTodo from './filterShowTodo';
import todosReducer from './reducer'

const rootReducer = combineReducers({
    todoList: todosReducer,
    filter: filterShowTodo
});

export default rootReducer