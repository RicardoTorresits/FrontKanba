import axios from "axios";

const baseURL='http://localhost:4003/api';

const kanbaApi = axios.create({
    baseURL,
});

kanbaApi.interceptors.request.use(
    async (config) => {
        const token = await localStorage.getItem('token');
        if (token) {
            config.headers['authorization'] = token;
        }
        return config;
    }
);

export default kanbaApi