import { api } from './api';
import type { Sector } from '../model/sector';
import { parse } from 'wellknown';

export const sectorService = {
  async getAll(): Promise<Sector[]> {
    const response = await api.get<Sector[]>('/sectors');
    const geoJsonSectors = response.data.map((sector) => {
      const geometry = parse(sector.geometry as unknown as string) as GeoJSON.MultiPolygon;
      return {
        ...sector,
        geometry,
      };
    });
    return geoJsonSectors;
  }
};