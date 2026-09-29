package com.geocenso.backend.service;

import com.geocenso.backend.dto.CollectionPointResponseDTO;
import com.geocenso.backend.entity.CollectionPoint;
import com.geocenso.backend.repository.CollectionPointRepository;
import com.geocenso.backend.util.SpatialUtils;

import org.locationtech.jts.geom.Point;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollectionPointService {

    private final CollectionPointRepository repository;

    public CollectionPointService(CollectionPointRepository repository) {
        this.repository = repository;
    }

    public List<CollectionPointResponseDTO> listAll() {
        return repository.findAll()
                .stream()
                .map(CollectionPointResponseDTO::fromEntity)
                .toList();
    }

    public Long addCollectionPoint(String descricao, Double latitude, Double longitude) {
        Point location = SpatialUtils.createPoint(latitude, longitude);
        CollectionPoint collectionPoint = new CollectionPoint(descricao, location);

        return repository.save(collectionPoint).getId();
    }
}