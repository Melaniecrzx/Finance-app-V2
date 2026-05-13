import axios from 'axios';

const authenticatedApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

authenticatedApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('finance-app-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { authenticatedApi };
