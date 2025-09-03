import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import TokenOverview from '@/components/dashboard/TokenOverview';
import PriceChart from '@/components/dashboard/PriceChart';
import TransactionList from '@/components/dashboard/TransactionList';
import WalletConnect from '@/components/dashboard/WalletConnect';
import TradingPanel from '@/components/dashboard/TradingPanel';
import MarketStats from '@/components/dashboard/MarketStats';

/**
 * Página del Dashboard de PrograMate
 * Panel de control principal con gráficos, transacciones y datos del token
 */
export default function DashboardPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [tokenData, setTokenData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cargar datos iniciales del token
    loadTokenData();
    
    // Configurar intervalos para actualizaciones en tiempo real
    const interval = setInterval(loadTokenData, 30000); // Actualizar cada 30 segundos
    
    return () => clearInterval(interval);
  }, []);

  /**
   * Función para cargar datos del token desde la API
   * TODO: Implementar conexión real con pump.fun
   */
  const loadTokenData = async () => {
    try {
      setIsLoading(true);
      
      // Simular llamada a API (reemplazar con llamada real)
      const mockData = {
        price: 0.0001,
        priceChange24h: 15.5,
        marketCap: 100000,
        volume24h: 50000,
        holders: 150,
        transactions: 1250
      };
      
      setTokenData(mockData);
    } catch (error) {
      console.error('Error cargando datos del token:', error);
      // TODO: Implementar manejo de errores
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Función para conectar wallet
   * TODO: Implementar conexión real con Solana
   */
  const handleWalletConnect = async () => {
    try {
      // TODO: Implementar lógica de conexión de wallet
      setIsConnected(true);
    } catch (error) {
      console.error('Error conectando wallet:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Dashboard - PrograMate 🧉</title>
        <meta name="description" content="Panel de control de PrograMate. Monitorea el precio, transacciones y estadísticas del token en tiempo real." />
      </Head>

      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-code-50 to-mate-50">
          {/* Header del Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-sm border-b border-mate-100"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-code-900">
                    Dashboard PrograMate 🧉
                  </h1>
                  <p className="text-code-600 mt-1">
                    Monitorea tu token favorito en tiempo real
                  </p>
                </div>
                
                {/* Botón de conexión de wallet */}
                <WalletConnect 
                  isConnected={isConnected}
                  onConnect={handleWalletConnect}
                />
              </div>
            </div>
          </motion.div>

          {/* Contenido principal del Dashboard */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Columna izquierda - Estadísticas y gráficos */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Resumen del token */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <TokenOverview 
                    data={tokenData}
                    isLoading={isLoading}
                  />
                </motion.div>

                {/* Gráfico de precios */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="card-mate"
                >
                  <PriceChart 
                    data={tokenData}
                    isLoading={isLoading}
                  />
                </motion.div>

                {/* Lista de transacciones */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="card-mate"
                >
                  <TransactionList 
                    isLoading={isLoading}
                  />
                </motion.div>
              </div>

              {/* Columna derecha - Panel de trading y estadísticas */}
              <div className="space-y-8">
                
                {/* Panel de trading */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <TradingPanel 
                    isConnected={isConnected}
                    tokenData={tokenData}
                  />
                </motion.div>

                {/* Estadísticas del mercado */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <MarketStats 
                    data={tokenData}
                    isLoading={isLoading}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

// Configuración de la página para Next.js
export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: 'Dashboard - PrograMate',
        description: 'Panel de control de PrograMate. Monitorea el precio, transacciones y estadísticas del token en tiempo real.',
        keywords: ['dashboard', 'token', 'precio', 'transacciones', 'solana', 'memecoin']
      }
    },
    // Revalidar cada minuto para datos en tiempo real
    revalidate: 60
  };
}
