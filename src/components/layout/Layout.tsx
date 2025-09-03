import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Componente Layout principal de PrograMate
 * Envuelve todas las páginas con navegación y pie de página
 */
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navegación principal */}
      <Navbar />
      
      {/* Contenido principal */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Pie de página */}
      <Footer />
    </div>
  );
}
