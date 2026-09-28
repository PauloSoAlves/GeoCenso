import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

import type { CollectionPoint } from '../../model/collectionPoint';

// Ajuste para exibição correta dos ícones default do Leaflet no Vite
const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

interface MapViewProps {
  points: CollectionPoint[];
}

export function Map({ points }: MapViewProps) {
  // Posição inicial focalizada no Rio de Janeiro (IBGE)
  const defaultCenter: [number, number] = [-22.9068, -43.1729];

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

      {points.map((point) => (
        <Marker key={point.id} position={[point.latitude, point.longitude]}>
          <Popup>
            <strong>{point.descricao}</strong> <br />
            <span style={{ fontSize: '0.8rem', color: '#555' }}>
              Lat: {point.latitude.toFixed(4)}, Lng: {point.longitude.toFixed(4)}
            </span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}