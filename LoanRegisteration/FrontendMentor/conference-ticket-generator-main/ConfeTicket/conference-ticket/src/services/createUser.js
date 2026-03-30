import axios from 'axios';

const postUrl = 'http://localhost:3000/User';
const TicketUrl = 'http://localhost:3000/Ticket';

export const createUser = async(data) => {
    return await axios.post(postUrl, data)
}
export const createTicket = async (data) => {
    return await axios.post(TicketUrl,data)
}