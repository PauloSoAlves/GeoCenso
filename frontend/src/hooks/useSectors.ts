import { useState, useEffect } from 'react';
import type { Sector } from '../model/sector';
import { sectorService } from '../service/sectorService';

export function useSectors() {
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSectors = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await sectorService.getAll();
      console.log('Fetched sectors:', data[0]);
      setSectors(data);
    } catch (err) {
      console.error('Error trying to fetch sectors:', err);
      setError('Error trying to fetch sectors');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSectors();
  }, []);

  return { sectors, loading, error, refetch: fetchSectors };
}