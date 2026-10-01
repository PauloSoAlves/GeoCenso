import type { Feature, MultiPolygon } from "geojson";

export interface SectorProperties {
  areaKm2: number;
  cdMun: string;
  nmMun: string;
  color: string;
}

export type Sector = Feature<MultiPolygon, SectorProperties>;