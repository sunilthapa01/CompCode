import axios from 'axios';

const API_URL = 'http://localhost:3001/posts';

export const POST_USER = async (data) => {
    return axios.post(API_URL,data)
}