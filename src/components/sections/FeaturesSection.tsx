import { motion } from 'framer-motion';

export default function FeaturesSection() {
  const features = [
    {
      icon: "⚡",
      title: "Transacciones Rápidas",
      description: "Solana permite transacciones en milisegundos con costos mínimos."
    },
    {
      icon: "🔒",
      title: "Seguridad Blockchain",
      description: "Tecnología descentralizada y transparente para máxima confianza."
    },
    {
      icon: "🌐",
      title: "Comunidad Global",
      description: "Conecta programadores de todo el mundo a través del mate."
    },
    {
      icon: "📱",
      title: "Interfaz Moderna",
      description: "Dashboard intuitivo y responsive para una experiencia excepcional."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-mate-50 to-code-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-code-900 mb-6">
            Características <span className="text-mate-600">Destacadas</span>
          </h2>
          <p className="text-xl text-code-600 max-w-3xl mx-auto">
            PrograMate combina lo mejor de la tecnología blockchain con una experiencia de usuario excepcional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-code-900 mb-3">{feature.title}</h3>
              <p className="text-code-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
