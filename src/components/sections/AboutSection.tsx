import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-code-900 mb-6">
            ¿Qué es <span className="text-mate-600">PrograMate</span>?
          </h2>
          <p className="text-xl text-code-600 max-w-3xl mx-auto">
            Una memecoin única que combina la pasión por la programación con el mate argentino, 
            construida en Solana para la comunidad de desarrolladores.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center p-6"
          >
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-semibold text-code-900 mb-3">Para Programadores</h3>
            <p className="text-code-600">
              Diseñada específicamente para la comunidad de desarrolladores y entusiastas de la tecnología.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-6"
          >
            <div className="text-4xl mb-4">🧉</div>
            <h3 className="text-xl font-semibold text-code-900 mb-3">Cultura Argentina</h3>
            <p className="text-code-600">
              Celebra la tradición del mate y la innovación tecnológica argentina en el mundo crypto.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center p-6"
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-code-900 mb-3">En Solana</h3>
            <p className="text-code-600">
              Construida en la blockchain más rápida y eficiente para transacciones rápidas y costos bajos.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
