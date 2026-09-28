package com.geocenso.backend.service;

import com.geocenso.backend.dto.CollectionPointResponseDTO;
import com.geocenso.backend.repository.CollectionPointRepository;
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
}