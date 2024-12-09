import { useEffect, useState } from 'react';
import axiosConfig from './utils/axiosConfig';

interface Artist {
  id: string;
  name: string;
}

function App() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosConfig.post('/api/query/search', {
          query: {
            selector: {
              '@assetType': 'artist'
            }
          }
        });

        const fetchedArtists = Array.isArray(response.data) ? response.data : [];
        setArtists(fetchedArtists);
        setLoading(false);
        console.log(response.data); 
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>GoLedger Challenge</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {artists.length > 0 ? (
          artists.map((artist) => (
            <li key={artist.id}>{artist.name}</li>
          ))
        ) : (
          <p>No artists found</p>
        )}
      </ul>
    </div>
  );
}

export default App;
