import axios from "axios";

export const getJokes = () => {
    const randomId = Math.floor(Math.random() * 100);
    console.log(randomId)
  return axios.get(
    `https://api.freeapi.app/api/v1/public/randomjokes/${randomId}`
    );
};
export const getRandomEmoji = () => {
    return axios.get('https://emojihub.yurace.pro/api/random');
  };
  
