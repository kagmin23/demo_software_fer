import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Use import.meta.env instead of process.env
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
