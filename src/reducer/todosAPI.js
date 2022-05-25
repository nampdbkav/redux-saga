import axios from 'axios';

export const getTodosData = () => {
    return axios.get('https://627c69afe5ac2c452aefc225.mockapi.io/api/todos');
}

export const addTodosData = (data) => {
    return axios.post('https://627c69afe5ac2c452aefc225.mockapi.io/api/todos', data)
}

export const deleteTodosData = (id) => {
    return axios.delete(`https://627c69afe5ac2c452aefc225.mockapi.io/api/todos/${id}`)
}

export const completeTodosData = (data, id) => {
    return axios.put(`https://627c69afe5ac2c452aefc225.mockapi.io/api/todos/${id}`, data)
}