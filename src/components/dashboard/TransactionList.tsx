import { motion } from 'framer-motion';

interface TransactionListProps {
  isLoading: boolean;
}

export default function TransactionList({ isLoading }: TransactionListProps) {
  const mockTransactions = [
    {
      id: '1',
      type: 'buy',
      amount: '1000 MATE',
      price: '$0.001',
      time: '2 min ago',
      address: '0x1234...5678'
    },
    {
      id: '2',
      type: 'sell',
      amount: '500 MATE',
      price: '$0.0012',
      time: '5 min ago',
      address: '0x8765...4321'
    },
    {
      id: '3',
      type: 'buy',
      amount: '2000 MATE',
      price: '$0.0009',
      time: '10 min ago',
      address: '0x9999...8888'
    }
  ];

  if (isLoading) {
    return (
      <div className="card-mate">
        <div className="animate-pulse">
          <div className="h-6 bg-code-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-code-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-mate">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-code-900">Transacciones Recientes</h3>
        <button className="text-mate-600 hover:text-mate-700 text-sm font-medium">
          Ver todas
        </button>
      </div>
      
      <div className="space-y-3">
        {mockTransactions.map((tx) => (
          <motion.div
            key={tx.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-between p-3 bg-code-50 rounded-lg border border-code-200"
          >
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${tx.type === 'buy' ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <div>
                <p className="font-medium text-code-900">{tx.amount}</p>
                <p className="text-sm text-code-500">{tx.address}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-code-900">{tx.price}</p>
              <p className="text-sm text-code-500">{tx.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-4 text-sm text-code-500 text-center">
        Datos simulados - Integración con Solana próximamente
      </div>
    </div>
  );
}
