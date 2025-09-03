import { motion } from 'framer-motion';

interface PriceChartProps {
  data: any;
  isLoading: boolean;
}

export default function PriceChart({ data, isLoading }: PriceChartProps) {
  if (isLoading) {
    return (
      <div className="card-mate">
        <div className="animate-pulse">
          <div className="h-6 bg-code-200 rounded w-1/3 mb-4"></div>
          <div className="h-64 bg-code-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-mate">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-code-900">Gráfico de Precio</h3>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-mate-100 text-mate-700 rounded-lg hover:bg-mate-200 transition-colors">
            24H
          </button>
          <button className="px-3 py-1 text-sm bg-code-100 text-code-700 rounded-lg hover:bg-code-200 transition-colors">
            7D
          </button>
          <button className="px-3 py-1 text-sm bg-code-100 text-code-700 rounded-lg hover:bg-code-200 transition-colors">
            1M
          </button>
        </div>
      </div>
      
      <div className="h-64 bg-gradient-to-br from-mate-50 to-code-50 rounded-xl border border-mate-200 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📊</div>
          <p className="text-code-600">Gráfico de precios en desarrollo</p>
          <p className="text-sm text-code-500 mt-2">Integración con Chart.js próximamente</p>
        </div>
      </div>
      
      <div className="mt-4 text-sm text-code-500 text-center">
        Datos simulados para demostración del MVP
      </div>
    </div>
  );
}
