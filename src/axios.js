import axios from "axios";

const instance = axios.create({
    baseURL: process.env.STAGE_URL || 'https://aloha.yngai.store'
});

export default instance;