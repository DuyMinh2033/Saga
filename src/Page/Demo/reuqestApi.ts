import { useQuery, useMutation } from '@tanstack/react-query';
import { apiCall } from '../../Shared/apiCall.js';

export function useApiQuery(key = '', url = '', method = 'GET', payload = null, options = {}) {
  return useQuery({
    queryKey: [key],
    queryFn: () => apiCall(url, method, payload),
    enabled: !!url,
    staleTime: 1000 * 60 * 30, // Cache dữ liệu trong 30 phút
    cacheTime: 1000 * 60 * 60, // Giữ cache ngay cả khi query không còn dùng nữa (1 tiếng)
    ...options,
  });
}

export function useApiMutation(method = 'POST', options = {}) {
  return useMutation({
    mutationFn: ({ url, payload }: { url: string; payload: any }) => apiCall(url, method, payload),
    ...options,
  });
}
