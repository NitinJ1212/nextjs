'use client';

import { useMutation } from '@tanstack/react-query';
import { login } from '@/lib/api/auth.api';

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};
