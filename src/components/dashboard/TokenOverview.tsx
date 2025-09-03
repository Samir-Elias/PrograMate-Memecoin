import { motion } from 'framer-motion';

/**
 * Componente TokenOverview
 * Muestra el resumen principal del token con precio, cambios y estadísticas clave
 */
interface TokenOverviewProps {
  data: any;
  isLoading: boolean;
}

export default function TokenOverview({ data, isLoading }: TokenOverviewProps) {
  // Datos mock para desarrollo (reemplazar con datos reales)
  const mockData = {
    price: 0.0001,
    priceChange24h: 15.5,
    marketCap: 100000,
    volume24h: 50000,
    holders: 150,
    transactions: 1250,
    totalSupply: '1,000,000,000',
    circulatingSupply: '850,000,000'
  };

  const displayData = data || mockData;

  // Función para formatear números
  const formatNumber = (num: number) => {
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toFixed(2);
  };

  // Función para formatear precio
  const formatPrice = (price: number) => {
    return `$${price.toFixed(6)}`;
  };

  // Función para obtener color del cambio de precio
  const getPriceChangeColor = (change: number) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-code-600';
  };

  // Función para obtener icono del cambio de precio
  const getPriceChangeIcon = (change: number) => {
    if (change > 0) return '📈';
    if (change < 0) return '📉';
    return '➡️';
  };

  if (isLoading) {
    return (
      <div className="card-mate">
        <div className="animate-pulse">
          <div className="h-8 bg-code-200 rounded mb-4 w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-20 bg-code-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-mate">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-code-900">
            Resumen del Token
          </h2>
          <p className="text-code-600">
            Estadísticas en tiempo real de PrograMate
          </p>
        </div>
        
        {/* Estado de conexión */}
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-code-600">En línea</span>
        </div>
      </div>

      {/* Grid de estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Precio actual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-br from-mate-50 to-mate-100 p-4 rounded-xl border border-mate-200"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-code-600">Precio Actual</span>
            <span className="text-2xl">💰</span>
          </div>
          <div className="text-2xl font-bold text-code-900 mb-2">
            {formatPrice(displayData.price)}
          </div>
          <div className={`flex items-center space-x-2 text-sm ${getPriceChangeColor(displayData.priceChange24h)}`}>
            <span>{getPriceChangeIcon(displayData.priceChange24h)}</span>
            <span className="font-medium">
              {displayData.priceChange24h > 0 ? '+' : ''}{displayData.priceChange24h.toFixed(2)}%
            </span>
            <span className="text-code-500">24h</span>
          </div>
        </motion.div>

        {/* Market Cap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-code-50 to-code-100 p-4 rounded-xl border border-code-200"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-code-600">Market Cap</span>
            <span className="text-2xl">📊</span>
          </div>
          <div className="text-2xl font-bold text-code-900 mb-2">
            ${formatNumber(displayData.marketCap)}
          </div>
          <div className="text-sm text-code-600">
            Supply: {displayData.totalSupply}
          </div>
        </motion.div>

        {/* Volumen 24h */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-accent-50 to-accent-100 p-4 rounded-xl border border-accent-200"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-code-600">Volumen 24h</span>
            <span className="text-2xl">📈</span>
          </div>
          <div className="text-2xl font-bold text-code-900 mb-2">
            ${formatNumber(displayData.volume24h)}
          </div>
          <div className="text-sm text-code-600">
            Trading activo
          </div>
        </motion.div>

        {/* Holders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-code-600">Holders</span>
            <span className="text-2xl">👥</span>
          </div>
          <div className="text-2xl font-bold text-code-900 mb-2">
            {formatNumber(displayData.holders)}
          </div>
          <div className="text-sm text-code-600">
            +{Math.floor(Math.random() * 10) + 1} hoy
          </div>
        </motion.div>
      </div>

      {/* Información adicional */}
      <div className="mt-6 pt-6 border-t border-code-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-code-600">Transacciones totales:</span>
            <span className="font-medium text-code-900">{formatNumber(displayData.transactions)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-code-600">Supply circulante:</span>
            <span className="font-medium text-code-900">{displayData.circulatingSupply}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-code-600">Última actualización:</span>
            <span className="font-medium text-code-900">Ahora</span>
          </div>
        </div>
      </div>
    </div>
  );
}
