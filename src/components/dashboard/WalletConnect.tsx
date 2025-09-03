import { motion } from 'framer-motion';

interface WalletConnectProps {
  isConnected: boolean;
  onConnect?: () => void;
}

export default function WalletConnect({ isConnected, onConnect }: WalletConnectProps) {
  if (isConnected) {
    return (
      <div className="card-mate">
        <div className="text-center">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-lg font-semibold text-code-900 mb-2">Wallet Conectada</h3>
          <p className="text-code-600 mb-4">Tu wallet está conectada y lista para operar</p>
          <button className="btn-secondary w-full">
            Desconectar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card-mate">
      <div className="text-center">
        <div className="text-4xl mb-4">🔗</div>
        <h3 className="text-lg font-semibold text-code-900 mb-2">Conectar Wallet</h3>
        <p className="text-code-600 mb-4">Conecta tu wallet para comenzar a operar</p>
        <button 
          className="btn-mate w-full"
          onClick={onConnect}
        >
          Conectar Wallet
        </button>
        <p className="text-xs text-code-500 mt-3">
          Compatible con Phantom, Solflare y otras wallets de Solana
        </p>
      </div>
    </div>
  );
}
