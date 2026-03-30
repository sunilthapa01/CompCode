import axios from "axios";
const EXP_URL = 'http://localhost:3001/Expenses';

export const POST_EXP = async (expenseData) => { return axios.post(EXP_URL, expenseData) }

export const GET_EXP = async () => {
    return axios.get(EXP_URL);
}