import axios from 'axios';

import { QueryClient } from '@tanstack/react-query';

const api = axios.create({
  baseURL: 'http://localorder.link:5000',
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) =>
        await api.get(queryKey[0] as string).then((res) => res.data),
    },
  },
});

export default api;
