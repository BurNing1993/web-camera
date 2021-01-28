import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://192.168.100.202:8002/biz/platform/api/v1/',
  baseURL: '/api',
  // timeout: 1000,
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  console.error(error);
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.error(error);
  return Promise.reject(error);
});


export default instance;