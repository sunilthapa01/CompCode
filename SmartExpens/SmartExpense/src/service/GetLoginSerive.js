import axios from "axios";
const URL = 'http://localhost:3001/posts';

export const GET_USER = async () => {

    return axios.get(URL)
}