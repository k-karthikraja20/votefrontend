import axios from "axios";

// Normalize baseURL to always point to the /api endpoint
const getBaseUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  let base = envUrl && envUrl.trim() !== "" ? envUrl.trim() : "https://votebackend-z17d.onrender.com/api";
  
  // Remove trailing slashes
  base = base.replace(/\/+$/, "");
  
  // Ensure the route prefix /api is present if not already included
  if (!base.endsWith("/api")) {
    base = `${base}/api`;
  }
  
  return base;
};

const api = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT token to requests if present in localStorage
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
