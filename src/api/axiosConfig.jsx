import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com', // Base URL của API
    headers: {
      'Content-Type': 'application/json', // Loại dữ liệu mặc định là JSON
    }
  });

  instance.interceptors.request.use(
    (config) => {
      const token = sessionStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      // Xử lý lỗi request
      return Promise.reject(error);
    }
  );
  
  instance.interceptors.response.use(
    (response) => {
      // Xử lý response trước khi đưa ra
      return response;
    },
    (error) => {
      // Xử lý lỗi response
      return Promise.reject(error);
    }
  );
  
  export default instance;