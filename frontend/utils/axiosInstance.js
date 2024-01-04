import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER,
});

// Add a request interceptor to attach the token to all outgoing requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    const parsedToken = JSON.parse(token);
    if (token) {
      config.headers.Authorization = `Bearer ${parsedToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
