import { useCollectionPoints } from "./useCollectionPoints";
import { useSectors } from "./useSectors";

export const useInitialMapData = () => {
  const { sectors, loading: sectorsLoading, error: sectorsError, refetch: refetchSectors } = useSectors();
  const { points, loading: pointsLoading, error: pointsError, refetch: refetchPoints } = useCollectionPoints();


  return {
    sectors,
    points,
    loading: sectorsLoading || pointsLoading,
    error: sectorsError || pointsError,
    refetchSectors,
    refetchPoints,
  };
}