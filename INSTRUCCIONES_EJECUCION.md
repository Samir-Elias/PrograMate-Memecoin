# 🚀 Instrucciones de Ejecución - PrograMate

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** versión 18 o superior
- **npm** o **yarn** como gestor de paquetes
- **Git** para control de versiones
- **Cursor** o cualquier editor de código

## 🛠️ Instalación y Configuración

### 1. Clonar el Repositorio
```bash
# Si ya tienes el proyecto en tu directorio actual, omite este paso
git clone [URL_DEL_REPOSITORIO]
cd programate-memecoin
```

### 2. Instalar Dependencias
```bash
# Usando npm
npm install

# O usando yarn
yarn install
```

### 3. Configurar Variables de Entorno
```bash
# Copiar el archivo de ejemplo
cp env.example .env.local

# Editar .env.local con tus configuraciones
# Usar Cursor o tu editor preferido
```

### 4. Verificar Instalación
```bash
# Verificar que todas las dependencias estén instaladas
npm list --depth=0

# Verificar versión de Node.js
node --version

# Verificar versión de npm
npm --version
```

## 🚀 Ejecutar el Proyecto

### Modo Desarrollo
```bash
# Iniciar servidor de desarrollo
npm run dev

# El proyecto estará disponible en:
# http://localhost:3000
```

### Modo Producción
```bash
# Construir el proyecto
npm run build

# Iniciar servidor de producción
npm start
```

## 📁 Estructura del Proyecto

```
programate-memecoin/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── layout/         # Layout, Navbar, Footer
│   │   ├── sections/       # Secciones de la página principal
│   │   ├── dashboard/      # Componentes del dashboard
│   │   └── ui/            # Componentes básicos de UI
│   ├── pages/              # Páginas de Next.js
│   ├── styles/             # Estilos globales y Tailwind
│   ├── utils/              # Funciones helper
│   ├── hooks/              # Custom hooks de React
│   └── data/               # Datos estáticos del proyecto
├── public/                 # Archivos estáticos
├── package.json            # Dependencias y scripts
├── tailwind.config.js      # Configuración de Tailwind
├── next.config.js          # Configuración de Next.js
├── tsconfig.json           # Configuración de TypeScript
└── README.md               # Documentación del proyecto
```

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Construir para producción
npm run start        # Iniciar servidor de producción
npm run lint         # Ejecutar linter
npm run type-check   # Verificar tipos de TypeScript

# Limpieza
npm run clean        # Limpiar archivos generados
```

## 🌐 Acceso a las Páginas

Una vez ejecutando el proyecto, podrás acceder a:

- **Página Principal:** http://localhost:3000/
- **Dashboard:** http://localhost:3000/dashboard
- **404 Personalizado:** Cualquier URL inexistente

## 📱 Características del MVP

### ✅ Implementado
- [x] Estructura completa del proyecto
- [x] Configuración de Next.js con TypeScript
- [x] Tailwind CSS con colores personalizados
- [x] Framer Motion para animaciones
- [x] Layout responsive con Navbar y Footer
- [x] Página principal con sección Hero
- [x] Página de Dashboard con estructura
- [x] Página 404 personalizada
- [x] Hooks personalizados para datos
- [x] Utilidades y funciones helper
- [x] Configuración de TypeScript y paths

### 🚧 En Desarrollo
- [ ] Componentes de secciones faltantes
- [ ] Integración con APIs reales
- [ ] Conexión con Solana
- [ ] Gráficos y visualizaciones

## 🎨 Personalización

### Colores del Tema
Los colores están definidos en `tailwind.config.js`:

- **Mate Verde:** `#22c55e` (color principal)
- **Code Gris:** `#64748b` (color secundario)
- **Accent Amarillo:** `#eab308` (color de acentos)

### Fuentes
- **Display:** Inter (para títulos y texto principal)
- **Mono:** JetBrains Mono (para código)

### Animaciones
- **Framer Motion** para transiciones suaves
- **Animaciones personalizadas** en Tailwind
- **Efectos hover** y **transiciones**

## 🔍 Debugging

### Console del Navegador
```javascript
// Verificar que el proyecto esté funcionando
console.log('PrograMate está funcionando! 🧉');

// Verificar datos del proyecto
console.log(window.location.href);
```

### Herramientas de Desarrollo
- **React Developer Tools** para inspeccionar componentes
- **Redux DevTools** (si se implementa Redux en el futuro)
- **Network tab** para verificar llamadas a APIs

## 🚨 Solución de Problemas

### Error: "Module not found"
```bash
# Limpiar caché de npm
npm cache clean --force

# Eliminar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port already in use"
```bash
# Cambiar puerto en package.json
"dev": "next dev -p 3001"

# O matar el proceso que usa el puerto 3000
lsof -ti:3000 | xargs kill -9
```

### Error: "TypeScript compilation failed"
```bash
# Verificar tipos
npm run type-check

# Limpiar caché de TypeScript
rm -rf .next
npm run dev
```

## 📊 Próximos Pasos

### 1. Completar Componentes Faltantes
- [ ] AboutSection
- [ ] FeaturesSection
- [ ] RoadmapSection
- [ ] TeamSection
- [ ] CTASection

### 2. Implementar Dashboard
- [ ] PriceChart con Chart.js
- [ ] TransactionList
- [ ] WalletConnect
- [ ] TradingPanel
- [ ] MarketStats

### 3. Integración con APIs
- [ ] Conectar con pump.fun
- [ ] Implementar Solana SDK
- [ ] Configurar WebSockets

## 🌟 Consejos de Desarrollo

### Usar Cursor Eficientemente
- **Cmd/Ctrl + Shift + P** para comandos
- **Cmd/Ctrl + P** para buscar archivos
- **Cmd/Ctrl + Shift + F** para buscar en todo el proyecto

### Workflow Recomendado
1. **Desarrollar** en ramas separadas
2. **Testear** localmente antes de commitear
3. **Hacer commit** con mensajes descriptivos
4. **Push** y crear Pull Request

### Estándares de Código
- **TypeScript** para todo el código
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **Componentes funcionales** con hooks

## 📞 Soporte

Si encuentras problemas:

1. **Revisar** este archivo de instrucciones
2. **Consultar** la documentación de Next.js
3. **Buscar** en GitHub Issues
4. **Contactar** al equipo de desarrollo

## 🎉 ¡Listo para Desarrollar!

Con estas instrucciones ya tienes todo lo necesario para ejecutar y desarrollar PrograMate. 

**¡Que comience la aventura! 🧉💻🚀**

---

**Última actualización:** Enero 2024  
**Versión:** 1.0.0  
**Estado:** MVP en desarrollo
