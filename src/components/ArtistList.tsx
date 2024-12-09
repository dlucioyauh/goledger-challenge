import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosConfig';

const ArtistList = () => {
  const [artists, setArtists] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axiosInstance.get('/artists') // Substitua com o endpoint correto
      .then(response => {
        setArtists(response.data);
        setLoading(false);
      })
      .catch(err => {
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
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li> // Ajuste conforme a estrutura dos dados
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
