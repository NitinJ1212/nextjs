import axiosClient from './axiosClient';
import { API_ENDPOINTS } from './endPoint';

export const login = (payload) => {
  return axiosClient.post(API_ENDPOINTS.AUTH.LOGIN, payload);
};

export const register = (payload) => {
  return axiosClient.post(API_ENDPOINTS.AUTH.REGISTER, payload);
};
