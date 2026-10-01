package com.geocenso.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.geocenso.backend.dto.SectorResponseGeoJsonDTO;
import com.geocenso.backend.service.SectorService;

@RestController
@RequestMapping("/api/sectors")
@CrossOrigin(origins = "*") 
public class SectorController {

  private final SectorService service;

  public SectorController(SectorService service) {
    this.service = service;
  }

  @GetMapping
  public List<SectorResponseGeoJsonDTO> listAll() {
    return service.listAll();
  }

  
}
