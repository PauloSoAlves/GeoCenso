import { useState } from "react";
import { useAddCollectionPoint } from "./hooks/useAddCollectionPoint";

interface AddCollectionPointPopupProps {
  lat: number;
  lng: number;
  setNewPoint: (point: { lat: number; lng: number } | null) => void;
  onSuccess: () => void;
}

export function AddCollectionPointPopup({ lat, lng, setNewPoint, onSuccess }: AddCollectionPointPopupProps) {
  const [description, setDescription] = useState("");
  const { addPoint, loading, error } = useAddCollectionPoint();

  const onChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  }

  const onSave = async () => {
    if (!description.trim()) return;

    const result = await addPoint(description, lat, lng);
    
    if (result) {
      setNewPoint(null); // Fecha o popup
      onSuccess(); // Atualiza os pontos no mapa
    }
  };

  return (
    <div onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation}>
      <h3>Adicionar Ponto de Coleta</h3>
      <p>Latitude: {lat.toFixed(4)}  Longitude: {lng.toFixed(4)}</p>
      <label htmlFor="description">Descrição:</label>
      <input id="description" type="text" placeholder="Descrição do ponto de coleta" value={description} onChange={onChangeDescription}/>
      {loading && <p>Salvando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={onSave}>Salvar</button>
    </div>
  );
}