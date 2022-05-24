

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_LIST_TODO':
            return [...state]
        case 'GET_LIST_TODO_SUCCESS':
            const { data } = action.todos;
            return [...state, data]
        default:
            return state;
    }
}

export default todosReducer