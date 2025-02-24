import { useQuery, useMutation } from '@tanstack/react-query';
import { apiCall } from '../../Shared/apiCall.js';
type TypeData = {
  data?: any;
  error?: [];
};
export function useApiQuery(key = '', url = '', method = 'GET', payload = null, options = {}) {
  return useQuery({
    queryKey: [key],
    queryFn: () => apiCall(url, method, payload)<TypeData>,
    enabled: !!url,
    staleTime: 1000 * 60 * 30,
    ...options,
  });
}

export function useApiMutation(method = 'POST', options = {}) {
  return useMutation({
    mutationFn: ({ url, payload }: { url: string; payload: any }) => apiCall(url, method, payload),
    ...options,
  });
}
