import { useEffect, useState } from 'react';
import axiosConfig from './utils/axiosConfig';

interface Artist {
  id: string;
  name: string;
  
}

function App() {
  const [artists, setArtists] = useState<Artist[]>([]); 

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
        
        // Supondo que a resposta da API tenha uma estrutura como { data: { artists: [...] } }
        setArtists(response.data); 
        console.log(response.data); 
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>GoLedger Challenge</h1>
      <p>Veja o console para os dados dos artistas.</p>

      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
