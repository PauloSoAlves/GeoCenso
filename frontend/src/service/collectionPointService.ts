import { api } from './api';
import type { CollectionPoint } from '../model/collectionPoint';

export const collectionPointService = {
  async getAll(): Promise<CollectionPoint[]> {
    const response = await api.get<CollectionPoint[]>('/collection-points');
    return response.data;
  },
  async addCollectionPoint(descricao: string, latitude: number, longitude: number): Promise<number> {
    const response = await api.post<number>('/collection-points', {
      descricao,
      latitude,
      longitude
    });
    return response.data;
  }
};