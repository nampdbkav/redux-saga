const INITIAL_STATE = {
    todos: [],
    load: false
}

const todo = (state, action) => {
    switch (action.type) {
        case 'COMPLETE_LIST_TODO':
            return Object.assign({},
                state,
                { completed: !state.completed }
            )
        default:
            return state
    }
}


const todosReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
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
        case 'ADD_LIST_TODO': {
            return {
                ...state,
            };
        }
        case 'ADD_LIST_TODO_SUCCESS': {
            const { data } = action.payload
            debugger;
            return {
                ...state,
                todos: state.todos.concat([data])
            };
        }
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
        case 'COMPLETE_LIST_TODO': {
            return {
                ...state,
            };
        }
        case 'COMPLETE_LIST_TODO_SUCCESS': {
            const { data } = action.payload
            return {
                ...state,
                todos: state.todos.map(t => t.id === data.id ? todo(t, data) : t)
            }
        }
        default:
            return state;
    }
}

export default todosReducer;