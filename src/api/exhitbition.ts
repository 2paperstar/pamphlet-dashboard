import { useQuery } from '@tanstack/react-query';
import api from '.';

interface Exhibition {
  id: number;
  name: string;
}

export const useAllExhibitions = () => useQuery<Exhibition[]>(['/exhibition']);

export const createExhibition = (name: string) =>
  api.post('/exhibition', { name });

export const createExhibitionTicket = (data: {
  name: string;
  description: string;
  price: number;
  role_name: string;
  exhibtion_id: number;
}) => api.post('/exhibition/ticket', data);
