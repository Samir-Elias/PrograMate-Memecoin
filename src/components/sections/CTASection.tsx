import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-mate-600 to-code-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para el <span className="text-mate-300">Futuro</span>?
          </h2>
          <p className="text-xl md:text-2xl text-mate-100 max-w-3xl mx-auto mb-8">
            Únete a la revolución de las memecoins para programadores. 
            PrograMate no es solo un token, es una comunidad.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link href="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary bg-white text-code-900 hover:bg-code-100 px-8 py-4 text-lg font-semibold"
            >
              🚀 Ir al Dashboard
            </motion.button>
          </Link>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-mate bg-mate-500 hover:bg-mate-600 px-8 py-4 text-lg font-semibold border-2 border-white"
          >
            🧉 Unirse a la Comunidad
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl mb-2">📈</div>
            <h3 className="text-lg font-semibold mb-2">Potencial de Crecimiento</h3>
            <p className="text-mate-200 text-sm">
              Comunidad de programadores en expansión
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-2">🔗</div>
            <h3 className="text-lg font-semibold mb-2">Tecnología Solana</h3>
            <p className="text-mate-200 text-sm">
              Blockchain más rápida y eficiente
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-2">🌍</div>
            <h3 className="text-lg font-semibold mb-2">Alcance Global</h3>
            <p className="text-mate-200 text-sm">
              Conecta programadores del mundo
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-mate-500"
        >
          <p className="text-mate-200 text-sm">
            🚨 <strong>Disclaimer:</strong> Las criptomonedas son inversiones de alto riesgo. 
            Invierte solo lo que puedas permitirte perder.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
