import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosConfig';
import '../App.css';  // Importa o arquivo de estilo

// Define a interface para o artista
interface Artist {
  id: string;
  name: string;
  '@key': string;
  '@lastUpdated': string;
}

const ArtistList = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Requisição POST com o payload correto
    axiosInstance
      .post('/api/query/search', {
        query: {
          selector: {
            '@assetType': 'artist',
          },
        },
      })
      .then((response) => {
        console.log('Resposta completa:', response);
        console.log('Resposta data:', response.data);

        const fetchedArtists = Array.isArray(response.data.result)
          ? response.data.result
          : [];

        if (fetchedArtists.length === 0) {
          setError('No artists found');
        }

        setArtists(fetchedArtists);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao buscar dados:', err);
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="artist-list">
      <h2 className="artist-list__title">Artists</h2>
      <ul className="artist-list__items">
        {artists.length > 0 ? (
          artists.map((artist) => (
            <li key={artist['@key']} className="artist-list__item">
              <p className="artist-list__name">{artist.name}</p>
              <small className="artist-list__last-updated">
                Last Updated: {artist['@lastUpdated']}
              </small>
            </li>
          ))
        ) : (
          <p>No artists found</p>
        )}
      </ul>
    </div>
  );
};

export default ArtistList;