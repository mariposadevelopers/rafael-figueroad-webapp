import axios from "axios";
import API_BASE_URL from '../config/apiConfig.js';


export const loginRequest = async (user) => {
    return await axios.post(`${API_BASE_URL}/auth/login`, user, { withCredentials: true });
}

