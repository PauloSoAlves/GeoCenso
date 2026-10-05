import type { Feature, MultiPolygon } from "geojson";

export interface SectorProperties {
  areaKm2: number;
  cdMun: string;
  nmMun: string;
  cdDist: string;
  nmDist: string;
  cdSubdist: string;
  nmSubdist: string;
  color: string;
}

export type Sector = Feature<MultiPolygon, SectorProperties>;