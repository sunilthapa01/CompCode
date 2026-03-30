import axios from 'axios';

const getUrl = 'http://localhost:3000/User'

export const  getUser = async () => {
    return  await axios.get(getUrl);
}