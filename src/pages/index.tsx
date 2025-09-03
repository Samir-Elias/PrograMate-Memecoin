import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import TeamSection from '@/components/sections/TeamSection';
import CTASection from '@/components/sections/CTASection';

/**
 * Página principal de PrograMate
 * Landing page con narrativa, branding y llamadas a la acción
 */
export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simular carga inicial para animaciones
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>PrograMate - Memecoin para Programadores 🧉</title>
        <meta name="description" content="La primera memecoin para programadores que combina el mate argentino con la pasión por el código. Disponible en Solana." />
      </Head>

      <Layout>
        {/* Contenedor principal con animaciones */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen"
        >
          {/* Sección Hero - Primera impresión */}
          <HeroSection />
          
          {/* Sección Acerca de - Narrativa del proyecto */}
          <AboutSection />
          
          {/* Sección Características - Qué ofrece PrograMate */}
          <FeaturesSection />
          
          {/* Sección Roadmap - Plan de desarrollo */}
          <RoadmapSection />
          
          {/* Sección Equipo - Quiénes somos */}
          <TeamSection />
          
          {/* Sección CTA - Llamada a la acción */}
          <CTASection />
        </motion.div>
      </Layout>
    </>
  );
}

// Configuración de la página para Next.js
export async function getStaticProps() {
  return {
    props: {
      // Datos estáticos que se pueden pasar a la página
      seo: {
        title: 'PrograMate - Memecoin para Programadores',
        description: 'La primera memecoin para programadores que combina el mate argentino con la pasión por el código',
        keywords: ['memecoin', 'programadores', 'solana', 'blockchain', 'mate', 'argentina']
      }
    },
    // Revalidar cada hora para contenido dinámico
    revalidate: 3600
  };
}
