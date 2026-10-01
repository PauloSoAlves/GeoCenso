package com.geocenso.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.geocenso.backend.dto.SectorResponseGeoJsonDTO;
import com.geocenso.backend.repository.SectorRepository;

@Service
public class SectorService {

  public final SectorRepository repository;

  public SectorService(SectorRepository repository) {
    this.repository = repository;
  }

  public List<SectorResponseGeoJsonDTO> listAll() {
    return repository.findAll()
        .stream()
        .map(SectorResponseGeoJsonDTO::fromEntity)
        .toList();
  }
  
}
