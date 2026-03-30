import axios from "axios";

export const getGuote = (query) => {

    return axios.get(`https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10&query=${query}`);
}