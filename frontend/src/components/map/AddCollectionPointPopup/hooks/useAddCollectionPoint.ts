import { useState } from 'react';
import { collectionPointService } from '../../../../service/collectionPointService';


export const useAddCollectionPoint = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // A função é chamada manualmente quando o usuário clica no botão "Salvar"
  const addPoint = async (descricao: string, latitude: number, longitude: number): Promise<number | null> => {
    try {
      setLoading(true);
      setError(null);
      return await collectionPointService.addCollectionPoint(descricao, latitude, longitude);
    } catch (err) {
      console.error('Erro ao adicionar ponto de coleta:', err);
      setError('Não foi possível salvar o ponto de coleta.');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { addPoint, loading, error };
};