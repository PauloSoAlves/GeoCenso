package com.geocenso.backend.dto;

import com.geocenso.backend.entity.CollectionPoint;

public record CollectionPointResponseDTO(
    Long id,
    String descricao,
    Double latitude,
    Double longitude
) {
    public static CollectionPointResponseDTO fromEntity(CollectionPoint entity) {
        return new CollectionPointResponseDTO(
            entity.getId(),
            entity.getDescription(),
            entity.getLocation().getY(), // Y = Latitude
            entity.getLocation().getX()  // X = Longitude
        );
    }
}