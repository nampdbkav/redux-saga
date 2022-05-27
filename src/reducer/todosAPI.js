import axios from 'axios';

//Fetch Todo
export const getTodosData = () => {
    return axios.get(`https://627c69afe5ac2c452aefc225.mockapi.io/api/todos`);
}

//Add Todo
export const addTodosData = (data) => {
    return axios.post(`https://627c69afe5ac2c452aefc225.mockapi.io/api/todos`, data)
}

//Delete Todo
export const deleteTodosData = (id) => {
    return axios.delete(`https://627c69afe5ac2c452aefc225.mockapi.io/api/todos/${id}`)
}

//Edit Todo
export const editTodosData = (data) => {
    return axios.put(`https://627c69afe5ac2c452aefc225.mockapi.io/api/todos/${data.id}`, data)
}

//Complete Todo
export const completeTodosData = (data) => {
    return axios.put(`https://627c69afe5ac2c452aefc225.mockapi.io/api/todos/${data.id}`, data)
}

//Complete All Todo
export const completeAllTodosData = () => {
    return axios.put(`https://627c69afe5ac2c452aefc225.mockapi.io/api/todos`)
}

//Remove Complete Todo
export const clearCompleteTodosData = () => {
    return axios.delete(`https://627c69afe5ac2c452aefc225.mockapi.io/api/todos`);
}