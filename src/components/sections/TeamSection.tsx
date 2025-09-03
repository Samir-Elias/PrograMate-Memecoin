import { motion } from 'framer-motion';

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Samir Elias",
      role: "Desarrollador Full-Stack",
      description: "Especialista en Next.js, TypeScript y blockchain",
      avatar: "👨‍💻",
      social: {
        github: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Tu Amigo",
      role: "Marketing & Comunidad",
      description: "Experto en estrategias de crecimiento y engagement",
      avatar: "👨‍💼",
      social: {
        twitter: "#",
        telegram: "#"
      }
    }
  ];

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
            Nuestro <span className="text-mate-600">Equipo</span>
          </h2>
          <p className="text-xl text-code-600 max-w-3xl mx-auto">
            Conoce a las personas detrás de PrograMate, apasionadas por la tecnología y la innovación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-mate-50 to-code-50 rounded-2xl border border-mate-200"
            >
              <div className="text-6xl mb-4">{member.avatar}</div>
              <h3 className="text-2xl font-bold text-code-900 mb-2">{member.name}</h3>
              <p className="text-mate-600 font-medium mb-3">{member.role}</p>
              <p className="text-code-600 mb-6">{member.description}</p>
              
              <div className="flex justify-center space-x-4">
                {Object.entries(member.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    className="text-code-500 hover:text-mate-600 transition-colors"
                  >
                    {platform === 'github' && '🐙'}
                    {platform === 'twitter' && '🐦'}
                    {platform === 'linkedin' && '💼'}
                    {platform === 'telegram' && '📱'}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-code-600 mb-4">
            ¿Te gustaría unirte a nuestro equipo?
          </p>
          <button className="btn-mate">
            Contactar
          </button>
        </motion.div>
      </div>
    </section>
  );
}
