import { useState, useEffect, useCallback } from 'react';

/**
 * Custom Hook para obtener datos del proyecto PrograMate
 * Maneja el estado de carga, errores y datos de forma asincrónica
 */

interface UseDataFetchOptions {
  refreshInterval?: number; // Intervalo de actualización en ms
  autoRefresh?: boolean; // Si debe actualizar automáticamente
  retryAttempts?: number; // Número de intentos de reintento
  retryDelay?: number; // Delay entre reintentos en ms
}

interface UseDataFetchReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  lastUpdated: Date | null;
}

export function useDataFetch<T>(
  fetchFunction: () => Promise<T>,
  options: UseDataFetchOptions = {}
): UseDataFetchReturn<T> {
  const {
    refreshInterval = 30000, // 30 segundos por defecto
    autoRefresh = true,
    retryAttempts = 3,
    retryDelay = 1000
  } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [retryCount, setRetryCount] = useState<number>(0);

  /**
   * Función principal para obtener datos
   */
  const fetchData = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await fetchFunction();
      
      setData(result);
      setLastUpdated(new Date());
      setRetryCount(0); // Resetear contador de reintentos en caso de éxito
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
      
      // Lógica de reintento
      if (retryCount < retryAttempts) {
        setRetryCount(prev => prev + 1);
        
        // Reintentar después del delay
        setTimeout(() => {
          fetchData();
        }, retryDelay);
      }
      
    } finally {
      setLoading(false);
    }
  }, [fetchFunction, retryCount, retryAttempts, retryDelay]);

  /**
   * Función para actualizar datos manualmente
   */
  const refetch = useCallback(async (): Promise<void> => {
    await fetchData();
  }, [fetchData]);

  // Efecto inicial para cargar datos
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Efecto para actualización automática
  useEffect(() => {
    if (!autoRefresh || !refreshInterval) return;

    const interval = setInterval(() => {
      fetchData();
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval, fetchData]);

  return {
    data,
    loading,
    error,
    refetch,
    lastUpdated
  };
}

/**
 * Hook especializado para datos del token
 */
export function useTokenData() {
  const fetchTokenData = async () => {
    // TODO: Implementar llamada real a la API de pump.fun
    // Por ahora retornamos datos mock
    
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simular datos del token
    return {
      price: 0.0001 + (Math.random() - 0.5) * 0.00001,
      priceChange24h: (Math.random() - 0.5) * 40,
      marketCap: 100000 + Math.random() * 50000,
      volume24h: 50000 + Math.random() * 30000,
      holders: 150 + Math.floor(Math.random() * 20),
      transactions: 1250 + Math.floor(Math.random() * 100),
      totalSupply: '1,000,000,000',
      circulatingSupply: '850,000,000',
      lastPrice: 0.0001,
      high24h: 0.00012,
      low24h: 0.00008
    };
  };

  return useDataFetch(fetchTokenData, {
    refreshInterval: 15000, // Actualizar cada 15 segundos
    autoRefresh: true,
    retryAttempts: 5,
    retryDelay: 2000
  });
}

/**
 * Hook especializado para datos de transacciones
 */
export function useTransactionData() {
  const fetchTransactionData = async () => {
    // TODO: Implementar llamada real a la API
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Simular transacciones
    const transactions = Array.from({ length: 20 }, (_, i) => ({
      id: `tx_${Date.now()}_${i}`,
      type: Math.random() > 0.5 ? 'buy' : 'sell',
      amount: Math.random() * 1000000,
      price: 0.0001 + (Math.random() - 0.5) * 0.00001,
      timestamp: new Date(Date.now() - Math.random() * 86400000), // Últimas 24h
      wallet: `wallet_${Math.random().toString(36).substr(2, 8)}`,
      hash: `hash_${Math.random().toString(36).substr(2, 16)}`
    }));
    
    return transactions.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  };

  return useDataFetch(fetchTransactionData, {
    refreshInterval: 10000, // Actualizar cada 10 segundos
    autoRefresh: true,
    retryAttempts: 3,
    retryDelay: 1000
  });
}

/**
 * Hook especializado para datos del proyecto
 */
export function useProjectData() {
  const fetchProjectData = async () => {
    // TODO: Implementar llamada real a la API
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Simular datos del proyecto
    return {
      name: 'PrograMate',
      symbol: 'MATE',
      description: 'La primera memecoin para programadores que combina el mate argentino con la pasión por el código',
      status: 'active',
      launchDate: '2024-01-01',
      social: {
        telegram: 'https://t.me/programate',
        twitter: 'https://twitter.com/programate',
        discord: 'https://discord.gg/programate'
      },
      metrics: {
        totalHolders: 150,
        activeUsers: 89,
        socialMentions: 1250,
        communityGrowth: 15.5
      }
    };
  };

  return useDataFetch(fetchProjectData, {
    refreshInterval: 60000, // Actualizar cada minuto
    autoRefresh: true,
    retryAttempts: 2,
    retryDelay: 5000
  });
}

/**
 * Hook para manejar estado de conexión de wallet
 */
export function useWalletConnection() {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [connecting, setConnecting] = useState<boolean>(false);

  const connectWallet = useCallback(async () => {
    try {
      setConnecting(true);
      
      // TODO: Implementar lógica real de conexión con Solana
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simular conexión exitosa
      const mockAddress = `wallet_${Math.random().toString(36).substr(2, 32)}`;
      setWalletAddress(mockAddress);
      setIsConnected(true);
      
    } catch (error) {
      console.error('Error conectando wallet:', error);
      throw error;
    } finally {
      setConnecting(false);
    }
  }, []);

  const disconnectWallet = useCallback(() => {
    setIsConnected(false);
    setWalletAddress(null);
  }, []);

  return {
    isConnected,
    walletAddress,
    connecting,
    connectWallet,
    disconnectWallet
  };
}
