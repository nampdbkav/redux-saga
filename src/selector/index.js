import { createSelector } from "reselect";

const getFilter = (state) => state.filter
const getTodos = (state) => state.todoList.todos

export const filterTodo = createSelector(
    [getFilter, getTodos],
    (filter, todos) => {
        switch (filter) {
            case 'SHOW_ALL':
                return todos
            case 'SHOW_ACTIVE':
                return todos.filter(item => !item.complete)
            case 'SHOW_COMPLETED':
                return todos.filter(item => item.complete)
            default:
                throw new Error('Unknown filter: ' + filter)
        }
    }
)
