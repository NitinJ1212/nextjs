'use client';

import { useQuery } from '@tanstack/react-query';
import { getDummy, getMe } from '@/lib/api/user.api';

export const useUser = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: getDummy,
        staleTime: 60 * 1000, // 1 minute in ms
        cacheTime: 5 * 60 * 1000, // optional: keep in cache for 5 mins
    });
};
