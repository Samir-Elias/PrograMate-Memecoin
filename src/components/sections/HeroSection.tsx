import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Sección Hero principal de PrograMate
 * Primera impresión con mensaje de bienvenida y llamada a la acción
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con gradiente y patrones */}
      <div className="absolute inset-0 bg-gradient-to-br from-mate-50 via-white to-code-50" />
      
      {/* Patrones decorativos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-mate-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-300 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-mate-200 rounded-full blur-3xl" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Título principal con animación */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-code-900 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-mate-600">Progra</span>
            <span className="text-code-800">Mate</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-8xl md:text-9xl mb-6"
          >
            🧉
          </motion.div>
        </motion.div>

        {/* Subtítulo y descripción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-12 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-code-800 mb-6">
            La primera memecoin para programadores
          </h2>
          
          <p className="text-lg md:text-xl text-code-600 leading-relaxed">
            Combina el mate argentino con la pasión por el código. 
            Una comunidad de desarrolladores, traders y entusiastas de blockchain 
            construyendo el futuro de las finanzas descentralizadas en Solana.
          </p>
        </motion.div>

        {/* Estadísticas destacadas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
        >
          {[
            { number: '1M+', label: 'Supply Total', icon: '💰' },
            { number: '150+', label: 'Holders', icon: '👥' },
            { number: '24/7', label: 'Trading', icon: '📈' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-mate-600 mb-1">
                {stat.number}
              </div>
              <div className="text-code-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Botones de acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Botón principal */}
          <Link href="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-mate text-lg px-8 py-4"
            >
              🚀 Ir al Dashboard
            </motion.button>
          </Link>
          
          {/* Botón secundario */}
          <Link href="#about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4"
            >
              📖 Saber Más
            </motion.button>
          </Link>
        </motion.div>

        {/* Enlaces rápidos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm"
        >
          {[
            { icon: '📱', label: 'Telegram', href: 'https://t.me/programate' },
            { icon: '🐦', label: 'Twitter', href: 'https://twitter.com/programate' },
            { icon: '🎮', label: 'Discord', href: 'https://discord.gg/programate' },
            { icon: '💻', label: 'GitHub', href: 'https://github.com/programate' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-code-600 hover:text-mate-600 transition-colors duration-200"
            >
              <span className="text-lg">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-code-400 text-2xl"
        >
          ⬇️
        </motion.div>
      </motion.div>
    </section>
  );
}
