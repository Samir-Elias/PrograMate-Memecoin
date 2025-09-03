import { motion } from 'framer-motion';

interface MarketStatsProps {
  data: any;
  isLoading: boolean;
}

export default function MarketStats({ data, isLoading }: MarketStatsProps) {
  const mockStats = [
    { label: 'Liquidez', value: '$50,000', change: '+5.2%' },
    { label: 'Holders', value: '1,247', change: '+12' },
    { label: 'Volumen 24H', value: '$15,000', change: '+8.7%' },
    { label: 'Market Cap', value: '$100,000', change: '+3.1%' }
  ];

  if (isLoading) {
    return (
      <div className="card-mate">
        <div className="animate-pulse">
          <div className="h-6 bg-code-200 rounded w-1/2 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-12 bg-code-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-mate">
      <h3 className="text-lg font-semibold text-code-900 mb-4">Estadísticas del Mercado</h3>
      
      <div className="space-y-3">
        {mockStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center justify-between p-3 bg-code-50 rounded-lg"
          >
            <span className="text-code-700">{stat.label}</span>
            <div className="text-right">
              <div className="font-semibold text-code-900">{stat.value}</div>
              <div className="text-sm text-green-600">{stat.change}</div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-4 text-xs text-code-500 text-center">
        Datos simulados - API de pump.fun próximamente
      </div>
    </div>
  );
}
