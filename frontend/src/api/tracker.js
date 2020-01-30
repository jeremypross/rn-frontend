// create and configure instance of axios
import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  // ngrok server here
  // run htttp ngrok 3000 - to start ngrok server on localhost 3000
  baseURL: 'http://13834330.ngrok.io'
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, 
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;