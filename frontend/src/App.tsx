import { Map } from './components/Map/Map.tsx';
import { useInitialMapData } from './hooks/useInitialMapData.ts';

export default function App() {
  const { sectors, points, loading, error, refetchPoints } = useInitialMapData();

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '1rem', backgroundColor: '#002B49', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '1.4rem' }}>GeoCenso - Gestão de Coletas IBGE</h1>
          <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.85rem', color: '#ccc' }}>
            {points.length} ponto(s) cadastrado(s) no banco PostGIS
          </p>
        </div>
        <button 
          onClick={() => {
            refetchPoints();
          }}
          style={{ padding: '0.5rem 1rem', backgroundColor: '#005691', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Atualizar
        </button>
      </header>

      <main style={{ flex: 1, position: 'relative' }}>
        {loading && (
          <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000, background: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>
            Carregando dados...
          </div>
        )}

        {error && (
          <div style={{ position: 'absolute', top: 10, left: 50, zIndex: 1000, background: '#ffdddd', color: '#a00', padding: '0.5rem 1rem', borderRadius: '4px' }}>
            {error}
          </div>
        )}

        <Map points={points} sectors={sectors} refetch={refetchPoints} />
      </main>
    </div>
  );
}