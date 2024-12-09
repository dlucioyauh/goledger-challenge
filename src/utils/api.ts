import axiosConfig from './axiosConfig';

// Função para obter o schema de um tipo de asset (por exemplo, artist)
export const getSchema = async (assetType: string) => {
  try {
    const response = await axiosConfig.post('getSchema', {
      assetType
    });
    return response.data; // Retorna os detalhes sobre o schema do asset
  } catch (error) {
    console.error('Erro ao obter o schema:', error);
    throw error;
  }
};

// Função para criar um novo asset (por exemplo, criar artista)
export const createAsset = async (assetType: string, data: object) => {
  try {
    const response = await axiosConfig.post('createAsset', {
      assetType,
      ...data
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao criar asset:', error);
    throw error;
  }
};

// Função para atualizar um asset
export const updateAsset = async (assetType: string, assetId: string, data: object) => {
  try {
    const response = await axiosConfig.post('updateAsset', {
      assetType,
      assetId,
      ...data
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar asset:', error);
    throw error;
  }
};

// Função para deletar um asset com a opção de "cascade"
export const deleteAsset = async (assetType: string, assetId: string, cascade: boolean = false) => {
  try {
    const response = await axiosConfig.post('deleteAsset', {
      assetType,
      assetId,
      cascade // Adicionando o campo cascade ao payload
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar asset:', error);
    throw error;
  }
};

// Função para pesquisar assets
export const searchAssets = async (assetType: string, query: object) => {
  try {
    const response = await axiosConfig.post('search', {
      query: {
        selector: {
          '@assetType': assetType,
          ...query
        }
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao pesquisar assets:', error);
    throw error;
  }
};

// Função para obter detalhes de transações (como deleteAsset, etc.)
export const getTx = async (transactionName: string) => {
  try {
    const response = await axiosConfig.post('getTx', { transactionName });
    return response.data;
  } catch (error) {
    console.error('Erro ao obter transação:', error);
    throw error;
  }
};