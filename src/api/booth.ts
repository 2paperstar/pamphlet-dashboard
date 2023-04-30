import api from '.';
import { Exhibition } from './exhitbition';

export enum BoothStatus {
  ACTIVE = 0,
  INACTIVE = 1,
  DELETED = 2,
}

export interface Booth {
  id: number;
  name: string;
  longDescription: string;
  shortDescription: string;
  status: BoothStatus;
  exhibition: Exhibition;
  currentAttendeeCount: number;
}

export const createBooth = (data: {
  name: string;
  short_description: string;
  long_description: string;
  status: BoothStatus;
  password: string;
  exhibition_id: number;
}) => api.post<Booth>('/booths', data).then((res) => res.data);

export const linkBoothToSection = (boothId: number, sectionId: number) =>
  api.patch(`/booths/${boothId}/section`, { section_id: sectionId });

export const changeBoothName = (boothId: number, name: string) =>
  api.patch(`/booths/${boothId}/name`, { name });

export const changeBoothStatus = (boothId: number, status: BoothStatus) =>
  api.patch(`/booths/${boothId}/status`, { status });

export const changeBoothShortDescription = (
  boothId: number,
  shortDescription: string
) =>
  api.patch(`/booths/${boothId}/short_description`, {
    short_description: shortDescription,
  });

export const changeBoothLongDescription = (
  boothId: number,
  longDescription: string
) =>
  api.patch(`/booths/${boothId}/long_description`, {
    long_description: longDescription,
  });
