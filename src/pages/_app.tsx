import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Head from 'next/head';
import '@/styles/globals.css';

/**
 * Componente principal de la aplicación PrograMate
 * Aquí se configuran los providers globales, estilos y metadatos
 */
export default function App({ Component, pageProps }: AppProps) {
  // Efecto para inicializar configuraciones globales
  useEffect(() => {
    // Configurar tema preferido del usuario
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Aplicar tema inicial
    if (userPrefersDark) {
      document.documentElement.classList.add('dark');
    }
    
    // Configurar analytics (futuro)
    // initializeAnalytics();
    
    // Configurar wallet adapters (futuro)
    // initializeWalletAdapters();
  }, []);

  return (
    <>
      <Head>
        {/* Metadatos principales */}
        <title>PrograMate - Memecoin para Programadores 🧉</title>
        <meta name="description" content="La primera memecoin para programadores que combina el mate argentino con la pasión por el código. Disponible en Solana." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* SEO y Open Graph */}
        <meta name="keywords" content="memecoin, programadores, solana, blockchain, mate, argentina, criptomonedas" />
        <meta name="author" content="PrograMate Team" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph para redes sociales */}
        <meta property="og:title" content="PrograMate - Memecoin para Programadores" />
        <meta property="og:description" content="🧉 La primera memecoin para programadores en Solana" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://programate.com" />
        <meta property="og:image" content="/images/programate-og.png" />
        <meta property="og:site_name" content="PrograMate" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PrograMate - Memecoin para Programadores" />
        <meta name="twitter:description" content="🧉 La primera memecoin para programadores en Solana" />
        <meta name="twitter:image" content="/images/programate-twitter.png" />
        
        {/* Favicon y iconos */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Manifest para PWA */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect para optimización de rendimiento */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Meta tags adicionales */}
        <meta name="theme-color" content="#22c55e" />
        <meta name="msapplication-TileColor" content="#22c55e" />
      </Head>
      
      {/* Componente principal */}
      <Component {...pageProps} />
      
      {/* Scripts de analytics (futuro) */}
      {/* <GoogleAnalytics /> */}
      
      {/* Scripts de wallet (futuro) */}
      {/* <WalletScripts /> */}
    </>
  );
}
