import axios  from 'axios';

const formApiPost = 'http://localhost:3000/formJson';
const formApiGet = 'http://localhost:3000/formJson';


export const formPost = async (data) => {
    const response = await axios.post(formApiPost, data);
    return response.data;
}
export const formGet = async () => {
    const response = await axios.get(formApiGet);
    return response.data
}

