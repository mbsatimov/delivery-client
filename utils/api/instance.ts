import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { CreateAxiosDefaults } from 'axios';

import { logout } from '@/utils/api';
import { ASYNC_STORE_KEY } from '@/utils/constants';

export const API_URL = process.env.API_URL;

const options: CreateAxiosDefaults = {
  baseURL: API_URL,
  withCredentials: true,
};

const $api = axios.create(options);
const $apiAuth = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem(ASYNC_STORE_KEY.TOKEN);
  if (config.headers && token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  return config;
});

$api.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    if (error.response.status === 401) {
      logout();
    }
    throw error;
  }
);

export { $api, $apiAuth };
