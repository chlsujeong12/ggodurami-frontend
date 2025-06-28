// src/api/auth.ts
import { apiClient } from './config';
import { RegisterRequest, RegisterResponse } from '../types/auth';

export const authAPI = {
  // 회원가입
  register: async (data: RegisterRequest): Promise<RegisterResponse> => {
    const response = await apiClient.post<RegisterResponse>('/register', data);
    return response.data;
  },
};
