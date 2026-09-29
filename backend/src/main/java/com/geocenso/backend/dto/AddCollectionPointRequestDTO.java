package com.geocenso.backend.dto;

public record AddCollectionPointRequestDTO(
    String descricao,
    Double latitude,
    Double longitude
) {};