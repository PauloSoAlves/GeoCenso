import { MapContainer, TileLayer, Marker, Popup, useMapEvents, GeoJSON } from 'react-leaflet';


import 'leaflet/dist/leaflet.css';

import type { CollectionPoint } from '../../model/collectionPoint';
import { newIcon, pendingIcon } from './Icon/Icon';
import { useState } from 'react';
import type { LatLng } from '../../model/latLng';
import { AddCollectionPointPopup } from './AddCollectionPointPopup/AddCollectionPointPopup';
import type { Sector } from '../../model/sector';
import { MapMarker } from './MapMarker/MapMarker';

interface MapViewProps {
  points: CollectionPoint[];
  sectors: Sector[];
  refetch: () => void;
}

export function Map({ points, sectors, refetch }: MapViewProps) {
  // Posição inicial focalizada no Rio de Janeiro (IBGE)
  const defaultCenter: [number, number] = [-22.9068, -43.1729];
  const [newPoint, setNewPoint] = useState<LatLng | null>(null);

  const MapClickHandler = () => {
    const map = useMapEvents({
      click: (e: L.LeafletMouseEvent) => {
        const latlng = map.mouseEventToLatLng(e.originalEvent);

        setNewPoint({ lat: latlng.lat, lng: latlng.lng });
      },
    })
    return null
  }

  return (
    <MapContainer
      center={defaultCenter}
      zoom={12}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapClickHandler />
      {sectors.map((sector: Sector) => (
        <GeoJSON
            key={sector.id}
            data={sector}
            style={() => ({
              color: sector.properties.color || '#3388ff', // Cor da borda
              fillColor: sector.properties.color || '#3388ff', // Cor do preenchimento
              fillOpacity: 0.2,
              weight: 2,
            })}
          />
      ))}
      {points.map((point) => (
        <MapMarker key={point.id} point={point} />
      ))}
      {newPoint && (
        <>
          <Marker position={[newPoint.lat, newPoint.lng]} icon={newIcon} />
            <Popup position={[newPoint.lat, newPoint.lng]} offset={[0, -20]} autoClose={false} closeOnClick={false} >
              <AddCollectionPointPopup lat={newPoint.lat} lng={newPoint.lng} setNewPoint={setNewPoint} onSuccess={refetch}/>
            </Popup>
        </>
      )}
    </MapContainer>
  );
}