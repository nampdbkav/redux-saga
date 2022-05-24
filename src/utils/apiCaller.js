import axios from "axios"

export const getTodoData = () => {
    return axios({
        method: 'GET',
        url: 'https://627c69afe5ac2c452aefc225.mockapi.io/api/todos'
    })
}