import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';


import 'leaflet/dist/leaflet.css';

import type { CollectionPoint } from '../../model/collectionPoint';
import { pendingIcon } from './Icon/Icon';
import { useState } from 'react';
import type { LatLng } from '../../model/latLng';
import { AddCollectionPointPopup } from './AddCollectionPointPopup/AddCollectionPointPopup';

interface MapViewProps {
  points: CollectionPoint[];
  refetch: () => void;
}

export function Map({ points, refetch }: MapViewProps) {
  // Posição inicial focalizada no Rio de Janeiro (IBGE)
  const defaultCenter: [number, number] = [-22.9068, -43.1729];
  const [newPoint, setNewPoint] = useState<LatLng | null>(null);

  function MapClickHandler() {
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
      {points.map((point) => (
        <Marker key={point.id} position={[point.latitude, point.longitude]} icon={pendingIcon}>
          <Popup>
            <strong>{point.descricao}</strong> <br />
            <span style={{ fontSize: '0.8rem', color: '#555' }}>
              Lat: {point.latitude.toFixed(4)}, Lng: {point.longitude.toFixed(4)}
            </span>
          </Popup>
        </Marker>
      ))}
      {newPoint && (
        <>
          <Marker position={[newPoint.lat, newPoint.lng]} icon={pendingIcon} />
          <Popup position={[newPoint.lat, newPoint.lng]} offset={[0, -20]} autoClose={false} closeOnClick={false}>
            <AddCollectionPointPopup lat={newPoint.lat} lng={newPoint.lng} setNewPoint={setNewPoint} onSuccess={refetch}/>
          </Popup>
        </>
      )}
    </MapContainer>
  );
}