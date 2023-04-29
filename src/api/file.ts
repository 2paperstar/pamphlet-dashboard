import api from '.';

export const uploadImage = async (image: File) => {
  const fd = new FormData();
  fd.append('file', image);
  const res = await api.post<{
    name: string;
    path: string;
    id: number;
  }>('/image/upload', fd);
  return res.data;
};
