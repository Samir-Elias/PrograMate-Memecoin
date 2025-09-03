import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * Componente Footer de PrograMate
 * Pie de página con enlaces, información de contacto y redes sociales
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'PrograMate',
      links: [
        { name: 'Acerca de', href: '#about', external: false },
        { name: 'Roadmap', href: '#roadmap', external: false },
        { name: 'Equipo', href: '#team', external: false },
        { name: 'Whitepaper', href: '#whitepaper', external: false },
      ]
    },
    {
      title: 'Producto',
      links: [
        { name: 'Dashboard', href: '/dashboard', external: false },
        { name: 'Token', href: '#token', external: false },
        { name: 'Staking', href: '#staking', external: false },
        { name: 'NFTs', href: '#nfts', external: false },
      ]
    },
    {
      title: 'Comunidad',
      links: [
        { name: 'Telegram', href: 'https://t.me/programate', external: true },
        { name: 'Discord', href: 'https://discord.gg/programate', external: true },
        { name: 'Twitter', href: 'https://twitter.com/programate', external: true },
        { name: 'GitHub', href: 'https://github.com/programate', external: true },
      ]
    },
    {
      title: 'Soporte',
      links: [
        { name: 'FAQ', href: '#faq', external: false },
        { name: 'Documentación', href: '#docs', external: false },
        { name: 'Contacto', href: '#contact', external: false },
        { name: 'Reportar Bug', href: '#bug-report', external: false },
      ]
    }
  ];

  return (
    <footer className="bg-code-900 text-white">
      {/* Contenido principal del footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-4xl">🧉</span>
                <h3 className="text-2xl font-bold text-mate-400">
                  PrograMate
                </h3>
              </div>
              <p className="text-code-300 leading-relaxed">
                La primera memecoin para programadores que combina el mate argentino 
                con la pasión por el código. Construyendo el futuro de las finanzas 
                descentralizadas en Solana.
              </p>
            </motion.div>

            {/* Redes sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {[
                { icon: '📱', href: 'https://t.me/programate', label: 'Telegram' },
                { icon: '🐦', href: 'https://twitter.com/programate', label: 'Twitter' },
                { icon: '🎮', href: 'https://discord.gg/programate', label: 'Discord' },
                { icon: '💻', href: 'https://github.com/programate', label: 'GitHub' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-code-800 hover:bg-mate-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Enlaces del footer */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-mate-400 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-code-300 hover:text-mate-400 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-code-300 hover:text-mate-400 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-code-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-code-400 text-sm"
            >
              © {currentYear} PrograMate. Todos los derechos reservados.
            </motion.div>

            {/* Enlaces legales */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              <Link href="#terms" className="text-code-400 hover:text-mate-400 transition-colors">
                Términos de Servicio
              </Link>
              <Link href="#privacy" className="text-code-400 hover:text-mate-400 transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#cookies" className="text-code-400 hover:text-mate-400 transition-colors">
                Cookies
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-code-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-xs text-code-500"
          >
            ⚠️ <strong>Descargo de responsabilidad:</strong> Este es un proyecto experimental. 
            Invertir en criptomonedas conlleva riesgos significativos. 
            No inviertas más de lo que puedas permitirte perder.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
