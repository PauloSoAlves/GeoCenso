package com.geocenso.backend.dto;

import org.locationtech.jts.geom.Geometry;

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
                entity.getColor()
            )
        );
    }
}
