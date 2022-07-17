import axios from "axios";

const instance = axios.create({
    baseURL: process.env.STAGE_URL || 'http://87.236.22.119:4444'
});

export default instance;