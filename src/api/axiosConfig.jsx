import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com', // Base URL của API
    timeout: 10000, // Thời gian chờ request (milliseconds)
    headers: {
      'Content-Type': 'application/json', // Loại dữ liệu mặc định là JSON
    }
  });

  instance.interceptors.request.use(
    (config) => {
      // Xử lý request trước khi gửi đi
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