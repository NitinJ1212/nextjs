import axiosClient from './axiosClient';
import { API_ENDPOINTS } from './endPoint';

export const getMe = () => {
  return axiosClient.get(API_ENDPOINTS.USER.ME);
};
export const getDummy = () => {
  return axiosClient.get(API_ENDPOINTS.USER.DUMMY);
};
