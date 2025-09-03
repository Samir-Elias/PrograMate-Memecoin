/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración experimental para optimizaciones
  experimental: {
    // Habilitar el nuevo sistema de imágenes de Next.js
    optimizePackageImports: ['framer-motion', 'chart.js'],
  },
  
  // Configuración de imágenes
  images: {
    // Dominios permitidos para imágenes externas
    domains: ['pump.fun', 'solscan.io'],
    // Formatos de imagen soportados
    formats: ['image/webp', 'image/avif'],
  },
  
  // Configuración de webpack para optimizaciones
  webpack: (config, { isServer }) => {
    // Optimizaciones para el bundle
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
  
  // Configuración de headers para seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
  
  // Configuración de redirecciones
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
