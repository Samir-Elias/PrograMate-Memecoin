import { motion } from 'framer-motion';

interface TradingPanelProps {
  isConnected: boolean;
  tokenData: any;
}

export default function TradingPanel({ isConnected, tokenData }: TradingPanelProps) {
  if (!isConnected) {
    return (
      <div className="card-mate">
        <div className="text-center">
          <div className="text-4xl mb-4">🔒</div>
          <h3 className="text-lg font-semibold text-code-900 mb-2">Panel de Trading</h3>
          <p className="text-code-600">Conecta tu wallet para acceder al panel de trading</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card-mate">
      <h3 className="text-lg font-semibold text-code-900 mb-4">Panel de Trading</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-code-700 mb-2">
            Cantidad MATE
          </label>
          <input
            type="number"
            placeholder="0.00"
            className="w-full px-3 py-2 border border-code-300 rounded-lg focus:ring-2 focus:ring-mate-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex space-x-2">
          <button className="flex-1 btn-mate py-2">
            Comprar
          </button>
          <button className="flex-1 btn-secondary py-2">
            Vender
          </button>
        </div>
        
        <div className="text-xs text-code-500 text-center">
          Panel en desarrollo - Integración con Solana próximamente
        </div>
      </div>
    </div>
  );
}
