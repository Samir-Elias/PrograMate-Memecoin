import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

/**
 * Componente Navbar principal de PrograMate
 * Navegación responsive con branding y enlaces principales
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de página
  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  const navItems = [
    { name: 'Inicio', href: '/', icon: '🏠' },
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Acerca de', href: '#about', icon: 'ℹ️' },
    { name: 'Roadmap', href: '#roadmap', icon: '🗺️' },
    { name: 'Equipo', href: '#team', icon: '👥' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-mate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo y branding */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-3xl lg:text-4xl"
            >
              🧉
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-code-900 group-hover:text-mate-600 transition-colors">
                PrograMate
              </h1>
              <p className="text-xs text-code-600 group-hover:text-mate-500 transition-colors">
                Memecoin para Programadores
              </p>
            </div>
          </Link>

          {/* Navegación desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  router.pathname === item.href
                    ? 'text-mate-600 bg-mate-50 border border-mate-200'
                    : 'text-code-700 hover:text-mate-600 hover:bg-mate-50'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Botones de acción */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Botón de conexión de wallet (futuro) */}
            <button className="btn-secondary">
              🔗 Conectar Wallet
            </button>
            
            {/* Botón principal */}
            <Link href="/dashboard">
              <button className="btn-mate">
                🚀 Ir al Dashboard
              </button>
            </Link>
          </div>

          {/* Botón de menú móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-code-700 hover:text-mate-600 hover:bg-mate-50 transition-colors"
          >
            <span className="text-2xl">
              {isOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-mate-100 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    router.pathname === item.href
                      ? 'text-mate-600 bg-mate-50 border border-mate-200'
                      : 'text-code-700 hover:text-mate-600 hover:bg-mate-50'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
              
              {/* Botones móviles */}
              <div className="pt-4 space-y-3">
                <button className="btn-secondary w-full">
                  🔗 Conectar Wallet
                </button>
                <Link href="/dashboard">
                  <button className="btn-mate w-full">
                    🚀 Ir al Dashboard
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
