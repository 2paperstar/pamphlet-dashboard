import { useQuery } from '@tanstack/react-query';
import api from '.';
import { Booth } from './booth';

export interface Exhibition {
  id: number;
  name: string;
}

export interface Section {
  id: number;
  name: string;
  block: [number, number, number, number];
  level: number;
}

interface Map {
  id: number;
  name: string;
  sections: Section[];
  image: { id: number };
}

interface Ticket {
  uuid: string;
  name: string;
  description: string;
  price: number;
  role: {
    name: string;
    id: number;
  };
  exhibition: Exhibition;
}

export const useAllExhibitions = () => useQuery<Exhibition[]>(['/exhibitions']);

export const useAllMapInExhibitions = (exhibitionId: number) =>
  useQuery<Map[]>([`/exhibitions/${exhibitionId}/maps`]);

export const useMapInExhibitions = (exhibitionId: number, mapId: number) =>
  useQuery<Map>([`/exhibitions/${exhibitionId}/maps/${mapId}`]);

export const createExhibition = (name: string) =>
  api.post<Exhibition>('/exhibitions', { name }).then((res) => res.data);

export const createExhibitionMap = (
  exhibitionId: number,
  name: string,
  imageId: number
) =>
  api
    .post<Map>(`/exhibitions/${exhibitionId}/maps`, { name, image_id: imageId })
    .then((res) => res.data);

export const createExhibitionTicket = ({
  exhibitionId,
  ...data
}: {
  name: string;
  description: string;
  price: number;
  role_name: string;
  exhibitionId: number;
}) =>
  api
    .post<Ticket>(`/exhibitions/${exhibitionId}/tickets`, data)
    .then((res) => res.data);

export const updateExhibitionMapSection = (
  exhibitionId: number,
  mapId: number,
  sections: Omit<Section, 'id'>[]
) =>
  api
    .patch(`/exhibitions/${exhibitionId}/maps/${mapId}/sections`, { sections })
    .then((res) => res.data);

export const useSection = (sectionId: number) =>
  useQuery<Section & { booth: Booth }>([
    `/exhibitions/0/maps/0/sections/${sectionId}`,
  ]);
