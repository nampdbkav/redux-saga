import { setShow } from "../action/action";


const filterShowTodo = (state = setShow.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.filter
        default:
            return state
    }
}

export default filterShowTodo