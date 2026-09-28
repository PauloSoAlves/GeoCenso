package com.geocenso.backend.entity;

import jakarta.persistence.*;
import org.locationtech.jts.geom.Point;

@Entity
@Table(name = "collection_point")
public class CollectionPoint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;

    // Mapeia para a coluna do tipo 'geometry(Point,4326)' no PostGIS
    @Column(columnDefinition = "geometry(Point, 4326)")
    private Point location;

    public CollectionPoint() {}

    public CollectionPoint(String description, Point location) {
        this.description = description;
        this.location = location;
    }

    public Long getId() { return id; }
    public String getDescription() { return description; }
    public Point getLocation() { return location; }

    public void setId(Long id) { this.id = id; }
    public void setDescription(String description) { this.description = description; }
    public void setLocation(Point location) { this.location = location; }
}