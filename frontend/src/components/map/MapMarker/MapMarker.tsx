import { Marker, Popup } from "react-leaflet";
import type { CollectionPoint } from "../../../model/collectionPoint";
import { pendingIcon } from "../Icon/Icon";

interface MapMarkerProps {
  point: CollectionPoint;
}

export function MapMarker({ point }: MapMarkerProps) {
  return (
    <Marker key={point.id} position={[point.latitude, point.longitude]} icon={pendingIcon}>
            <Popup>
              <strong>{point.descricao}</strong> <br />
              <span style={{ fontSize: '0.8rem', color: '#555' }}>
                Lat: {point.latitude.toFixed(4)}, Lng: {point.longitude.toFixed(4)}
              </span>
            </Popup>
          </Marker>
  )
}