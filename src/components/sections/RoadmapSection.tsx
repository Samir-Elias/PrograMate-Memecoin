import { motion } from 'framer-motion';

export default function RoadmapSection() {
  const roadmapItems = [
    {
      phase: "Fase 1",
      title: "MVP y Lanzamiento",
      description: "Desarrollo del MVP, testing y lanzamiento inicial",
      status: "En Progreso",
      items: ["Estructura del proyecto", "Landing page", "Dashboard básico"]
    },
    {
      phase: "Fase 2",
      title: "Integración Solana",
      description: "Conexión con blockchain y funcionalidades de trading",
      status: "Próximamente",
      items: ["Wallet connection", "Transacciones", "Gráficos en tiempo real"]
    },
    {
      phase: "Fase 3",
      title: "Expansión",
      description: "Nuevas funcionalidades y expansión de la comunidad",
      status: "Futuro",
      items: ["Staking", "Governance", "Ecosistema expandido"]
    }
  ];

  return (
    <section className="py-20 bg-code-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Roadmap <span className="text-mate-400">PrograMate</span>
          </h2>
          <p className="text-xl text-code-300 max-w-3xl mx-auto">
            Nuestro plan de desarrollo para construir la memecoin más innovadora para programadores.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-code-800 p-6 rounded-2xl border border-code-700"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-mate-600 text-white rounded-full mb-2">
                  {item.phase}
                </span>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-code-300 mb-3">{item.description}</p>
                <span className={`inline-block px-2 py-1 text-xs rounded ${
                  item.status === "En Progreso" ? "bg-yellow-600 text-white" :
                  item.status === "Próximamente" ? "bg-blue-600 text-white" :
                  "bg-gray-600 text-white"
                }`}>
                  {item.status}
                </span>
              </div>
              
              <ul className="space-y-2">
                {item.items.map((listItem, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-code-300">
                    <span className="text-mate-400 mr-2">✓</span>
                    {listItem}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
