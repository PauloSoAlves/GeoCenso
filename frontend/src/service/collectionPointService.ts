import { api } from './api';
import type { CollectionPoint } from '../model/collectionPoint';

export const collectionPointService = {
  async getAll(): Promise<CollectionPoint[]> {
    const response = await api.get<CollectionPoint[]>('/collection-points');
    return response.data;
  },
};