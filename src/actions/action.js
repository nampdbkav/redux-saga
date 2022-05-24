
export const getListTodo = (todos) => {
    return {
        type: 'GET_LIST_TODO',
        todos
    }
}

export const getListTodoSuccess = (todos) => {
    return {
        type: 'GET_LIST_TODO_SUCCESS',
        todos
    }
}

