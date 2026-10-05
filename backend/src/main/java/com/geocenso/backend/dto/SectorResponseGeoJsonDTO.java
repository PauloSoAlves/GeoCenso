package com.geocenso.backend.dto;

import com.geocenso.backend.entity.Sector;

public record SectorResponseGeoJsonDTO(
    String type,
    Long id,
    String geometry,
    SectorProperties properties
) {
    public record SectorProperties(
        Double areaKm2,
        String cdMun,
        String nmMun,
        String cdDist,
        String nmDist,
        String cdSubdist,
        String nmSubdist,
        String color

    ) {}

    public static SectorResponseGeoJsonDTO fromEntity(Sector entity) {
        return new SectorResponseGeoJsonDTO(
            "Feature",
            entity.getId(),
            entity.getGeometry() != null ? entity.getGeometry().toString() : null,
            new SectorProperties(
                entity.getArea(),
                entity.getCdMun(),
                entity.getNmMun(),
                entity.getCdDist(),
                entity.getNmDist(),
                entity.getCdSubdist(),
                entity.getNmSubdist(),
                entity.getColor()
            )
        );
    }
}
