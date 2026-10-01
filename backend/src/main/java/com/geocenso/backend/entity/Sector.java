package com.geocenso.backend.entity;

import org.locationtech.jts.geom.MultiPolygon;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table(name = "sector")
public class Sector {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private Double area;

  private String cd_mun;

  private String nm_mun;

  private String cd_dist;

  private String nm_dist;

  private String cd_subdist;

  private String nm_subdist;

  private String color;

  @JsonIgnore
  @Column(columnDefinition = "geometry(MultiPolygon, 4326)")
  private MultiPolygon geometry;

  public Sector() {}

  public Sector(Double area, String cd_mun, String nm_mun, String cd_dist, String nm_dist, String cd_subdist, String nm_subdist, String color, MultiPolygon geometry) {
    this.area = area;
    this.cd_mun = cd_mun;
    this.nm_mun = nm_mun;
    this.cd_dist = cd_dist;
    this.nm_dist = nm_dist;
    this.cd_subdist = cd_subdist;
    this.nm_subdist = nm_subdist;
    this.color = color;
    this.geometry = geometry;
  }

  public Long getId() { return id; }
  public Double getArea() { return area; }
  public String getCdMun() { return cd_mun; }
  public String getNmMun() { return nm_mun; }
  public String getCdDist() { return cd_dist; }
  public String getNmDist() { return nm_dist; }
  public String getCdSubdist() { return cd_subdist; }
  public String getNmSubdist() { return nm_subdist; }
  public String getColor() { return color; }
  public MultiPolygon getGeometry() { return geometry; }

  public void setId(Long id) { this.id = id; }
  public void setArea(Double area) { this.area = area; }
  public void setCdMun(String cd_mun) { this.cd_mun = cd_mun; }  
  public void setNmMun(String nm_mun) { this.nm_mun = nm_mun; }
  public void setCdDist(String cd_dist) { this.cd_dist = cd_dist; }
  public void setNmDist(String nm_dist) { this.nm_dist = nm_dist; }
  public void setCdSubdist(String cd_subdist) { this.cd_subdist = cd_subdist; }
  public void setNmSubdist(String nm_subdist) { this.nm_subdist = nm_subdist; }
  public void setColor(String color) { this.color = color; }
  public void setGeometry(MultiPolygon geometry) { this.geometry = geometry; }
}
