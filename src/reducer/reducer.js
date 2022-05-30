const INITIAL_STATE = {
    todos: [],
    load: false
}

const todosReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        //Fetch Todo
        case 'GET_LIST_TODO': {
            return {
                ...state,
                load: true,
            };
        }
        case 'GET_LIST_TODO_SUCCESS': {
            const { data } = action.payload;
            return {
                ...state,
                todos: data,
                load: false,
            };
        }
        //Add Todo
        case 'ADD_LIST_TODO': {
            return {
                ...state,
            };
        }
        case 'ADD_LIST_TODO_SUCCESS': {
            const { data } = action.payload
            return {
                ...state,
                todos: state.todos.concat([data])
            };
        }
        //Delete Todo
        case 'DELETE_LIST_TODO': {
            return {
                ...state,
            };
        }
        case 'DELETE_LIST_TODO_SUCCESS': {
            const { data } = action.payload
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== data)
            };
        }
        //Edit Todo
        case 'EDIT_LIST_TODO': {
            return { ...state }
        }
        case 'EDIT_LIST_TODO_SUCCESS': {
            const { data } = action.payload
            const { todos } = state
            const index = todos.findIndex(item => item.id === data.id);
            if (index !== -1) {
                const newTodos = [
                    ...todos.slice(0, index),
                    data,
                    ...todos.slice(index + 1)
                ]
                return {
                    ...state,
                    todos: newTodos
                }
            }
            return {
                ...state
            }
        }
        //Complete Todo
        case 'COMPLETE_LIST_TODO': {
            return { ...state }
        }
        case 'COMPLETE_LIST_TODO_SUCCESS': {
            const { data } = action.payload
            const { todos } = state
            const index = todos.findIndex(item => item.id === data.id);
            if (index !== -1) {
                const newTodos = [
                    ...todos.slice(0, index),
                    data,
                    ...todos.slice(index + 1)
                ]
                return {
                    ...state,
                    todos: newTodos
                }
            }
            return {
                ...state
            }
        }
        //Remove Complete Todo
        case 'CLEAR_COMPLETE_LIST_TODO': {
            return { ...state }
        }
        case 'CLEAR_COMPLETE_LIST_TODO_SUCCESS': {
            return {
                ...state,
                todos: state.todos.filter((item) => item.complete === false)
            }
        }
        //Complete All Todo
        case 'COMPLETE_ALL_LIST_TODO': {
            return { ...state }
        }
        case 'COMPLETE_ALL_LIST_TODO_SUCCESS': {
            const allComplete = state.todos.every(item => item.complete)
            return {
                ...state,
                todos: state.todos.map(item => ({ ...item, complete: !allComplete }))
            }
        }
        default:
            return state;
    }
}

export default todosReducer;