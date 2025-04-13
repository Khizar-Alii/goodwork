import axiosInstance from './axiosInstance';
import { ENDPOINTS } from './endpoints';
import { LoginResponse, UserProfile } from '../types/api';

export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await axiosInstance.post(ENDPOINTS.login, {
    email,
    password,
  });
  return response.data;
};

export const getUserProfile = async (): Promise<UserProfile> => {
  const response = await axiosInstance.get(ENDPOINTS.getProfile);
  return response.data;
};
