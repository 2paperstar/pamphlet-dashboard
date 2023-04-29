import api from '.';

interface Exhibition {
  id: number;
  name: string;
}

export const getAllExhibitions = () =>
  api.get<Exhibition[]>('/exhibition').then((res) => res.data);
