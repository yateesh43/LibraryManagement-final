import axios from "axios";

const API_BASE_URL = "http://localhost:9090"; // Replace with your backend URL

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Automatically attach token to requests (for protected routes)
api.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => Promise.reject(error));

// Authentication APIs
export const registerUser = async (userData) => {
    return await api.post("/auth/register", userData);
};

export const loginUser = async (loginData) => {
    return await api.post("/auth/login", loginData);
};

export const getUserProfile = async () => {
    return await api.get("/auth/me");
};



export default api;
