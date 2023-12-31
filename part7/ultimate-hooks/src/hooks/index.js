
import axios from 'axios'
const baseUrl = '/api/notes'

let token = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
}

const getAll = async () => {
    const request = await axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = async newObject => {
    const config = {
        headers: { Authorization: token },
    }
    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

const update = async (id, newObject) => {
    const request = await axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { create, update, getAll, setToken }