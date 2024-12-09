import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosConfig';

// Define a interface para o artista
interface Artist {
  id: string;
  name: string;
}

const ArtistList = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Requisição POST com o payload correto
    axiosInstance.post('/api/query/search', {
      query: {
        selector: {
          '@assetType': 'artist'
        }
      }
    })
      .then(response => {
        console.log(response.data);  
        const fetchedArtists = Array.isArray(response.data) ? response.data : [];
        setArtists(fetchedArtists);  
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao buscar dados:', err);  
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Artists</h2>
      <ul>
        {Array.isArray(artists) && artists.length > 0 ? (
          artists.map((artist) => (
            <li key={artist.id}>{artist.name}</li>
          ))
        ) : (
          <p>No artists found</p>
        )}
      </ul>
    </div>
  );
};

export default ArtistList;
