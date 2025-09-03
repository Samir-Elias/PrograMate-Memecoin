import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

/**
 * Página de error 404 personalizada para PrograMate
 * Página amigable que guía al usuario de vuelta al contenido principal
 */
export default function NotFoundPage() {
  useEffect(() => {
    // Analytics para páginas de error (futuro)
    // trackPageView('/404');
  }, []);

  return (
    <>
      <Head>
        <title>Página no encontrada - PrograMate 🧉</title>
        <meta name="description" content="La página que buscas no existe. Regresa al inicio de PrograMate." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-code-50 to-mate-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            
            {/* Animación del mate triste */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: 0.2
              }}
              className="mb-8"
            >
              <div className="text-8xl mb-4">🧉</div>
              <div className="text-4xl mb-2">😢</div>
            </motion.div>

            {/* Mensaje de error */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-6xl font-bold text-code-900 mb-4">
                404
              </h1>
              
              <h2 className="text-2xl font-semibold text-code-800 mb-4">
                ¡Ups! Página no encontrada
              </h2>
              
              <p className="text-code-600 mb-8 leading-relaxed">
                Parece que esta página se perdió en el código, 
                como un mate sin yerba. ¡Pero no te preocupes! 
                Te ayudamos a volver al camino correcto.
              </p>
            </motion.div>

            {/* Botones de acción */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              {/* Botón principal - Volver al inicio */}
              <Link href="/" className="block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-mate w-full"
                >
                  🏠 Volver al Inicio
                </motion.button>
              </Link>

              {/* Botón secundario - Ir al Dashboard */}
              <Link href="/dashboard" className="block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary w-full"
                >
                  📊 Ir al Dashboard
                </motion.button>
              </Link>
            </motion.div>

            {/* Mensaje adicional */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 p-4 bg-mate-50 rounded-lg border border-mate-200"
            >
              <p className="text-sm text-code-600">
                💡 <strong>Consejo:</strong> Si crees que esto es un error, 
                contacta a nuestro equipo de soporte.
              </p>
            </motion.div>

            {/* Enlaces útiles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-8 flex justify-center space-x-6 text-sm"
            >
              <Link href="/" className="text-mate-600 hover:text-mate-700 transition-colors">
                Inicio
              </Link>
              <Link href="/dashboard" className="text-mate-600 hover:text-mate-700 transition-colors">
                Dashboard
              </Link>
              <a 
                href="https://t.me/programate" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-mate-600 hover:text-mate-700 transition-colors"
              >
                Soporte
              </a>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
}
