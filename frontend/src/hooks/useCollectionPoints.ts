import { useState, useEffect } from 'react';
import type { CollectionPoint } from '../model/collectionPoint';
import { collectionPointService } from '../service/collectionPointService';

export function useCollectionPoints() {
  const [points, setPoints] = useState<CollectionPoint[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPoints = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await collectionPointService.getAll();
      setPoints(data);
    } catch (err) {
      console.error('Error trying to fetch collection points:', err);
      setError('Error trying to fetch collection points');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPoints();
  }, []);

  return { points, loading, error, refetch: fetchPoints };
}