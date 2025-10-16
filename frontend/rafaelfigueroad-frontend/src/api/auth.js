import axios from "axios";
const API = "http://localhost:5001/api"
export const loginRequest = async (user) => {
    return await axios.post(`${API}/auth/login`, user, { withCredentials: true });
} 