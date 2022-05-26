//Fetch Todo
export const getListTodo = (payload) => {
    return {
        type: 'GET_LIST_TODO',
        payload,
    }
}

export const getListTodoSuccess = (payload) => {
    return {
        type: 'GET_LIST_TODO_SUCCESS',
        payload,
    }
}

//Add Todo
export const addListTodo = (text) => {
    return {
        type: 'ADD_LIST_TODO',
        payload: {
            text,
        }
    }
}

export const addListTodoSuccess = (data) => {
    return {
        type: 'ADD_LIST_TODO_SUCCESS',
        payload: {
            data
        }
    }
}

//Delete Todo
export const deleteListTodo = (id) => {
    return {
        type: 'DELETE_LIST_TODO',
        payload: {
            id
        }
    }
}

export const deleteListTodoSuccess = (data) => {
    return {
        type: 'DELETE_LIST_TODO_SUCCESS',
        payload: {
            data
        }
    }
}

//Edit Todo
export const editListTodo = (id, text) => {
    return {
        type: 'EDIT_LIST_TODO',
        payload: {
            id,
            text
        }
    }
}

export const editListTodoSuccess = (data) => {
    return {
        type: 'EDIT_LIST_TODO_SUCCESS',
        payload: {
            data
        }
    }
}

//Complete Todo
export const completeListTodo = (id, complete) => {
    return {
        type: 'COMPLETE_LIST_TODO',
        payload: {
            id,
            complete
        }
    }
}

export const completeListTodoSuccess = (data) => {
    return {
        type: 'COMPLETE_LIST_TODO_SUCCESS',
        payload: { data }
    }
}

//Complete All Todo
export const completeAllListTodo = (payload) => {
    return {
        type: 'COMPLETE_ALL_LIST_TODO',
        payload
    }
}

export const completeAllListTodoSuccess = () => {
    return {
        type: 'COMPLETE_ALL_LIST_TODO_SUCCESS',
    }
}

//Remove Complete Todo
export const clearCompleteListTodo = () => {
    return {
        type: 'CLEAR_COMPLETE_LIST_TODO',
    }
}

export const clearCompleteListTodoSuccess = () => {
    return {
        type: 'CLEAR_COMPLETE_LIST_TODO_SUCCESS',
    }
}