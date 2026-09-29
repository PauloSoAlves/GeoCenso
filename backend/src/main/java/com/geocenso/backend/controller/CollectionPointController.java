package com.geocenso.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.geocenso.backend.dto.CollectionPointResponseDTO;
import com.geocenso.backend.dto.AddCollectionPointRequestDTO;
import com.geocenso.backend.service.CollectionPointService;

@RestController 
@RequestMapping ("/api/collection-points") // Define o caminho base para os endpoints
@CrossOrigin (origins = "*") // Libera o acesso para o React
public class CollectionPointController {

    private final CollectionPointService service;

    public CollectionPointController(CollectionPointService service) {
        this.service = service;
    }

    @GetMapping
    public List<CollectionPointResponseDTO> listarTodos() {
        return service.listAll();
    }

    @PostMapping
    public Long addCollectionPoint(@RequestBody AddCollectionPointRequestDTO request) {
        return service.addCollectionPoint(request.descricao(), request.latitude(), request.longitude());
    }
    
}
