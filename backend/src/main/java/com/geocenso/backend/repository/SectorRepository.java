package com.geocenso.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.geocenso.backend.entity.Sector;

public interface SectorRepository extends JpaRepository<Sector, Long> {
}
