/**
 * Utilidades y funciones helper para PrograMate
 * Funciones reutilizables para formateo, validación y cálculos
 */

/**
 * Formatea un número con separadores de miles y sufijos
 * @param num - Número a formatear
 * @param decimals - Decimales a mostrar
 * @returns Número formateado como string
 */
export const formatNumber = (num: number, decimals: number = 2): string => {
  if (isNaN(num) || !isFinite(num)) return '0';
  
  if (num >= 1e12) return (num / 1e12).toFixed(decimals) + 'T';
  if (num >= 1e9) return (num / 1e9).toFixed(decimals) + 'B';
  if (num >= 1e6) return (num / 1e6).toFixed(decimals) + 'M';
  if (num >= 1e3) return (num / 1e3).toFixed(decimals) + 'K';
  
  return num.toFixed(decimals);
};

/**
 * Formatea un precio de criptomoneda
 * @param price - Precio a formatear
 * @param currency - Moneda (por defecto USD)
 * @returns Precio formateado
 */
export const formatPrice = (price: number, currency: string = 'USD'): string => {
  if (price < 0.000001) return `${currency} ${price.toExponential(2)}`;
  if (price < 0.01) return `${currency} ${price.toFixed(6)}`;
  if (price < 1) return `${currency} ${price.toFixed(4)}`;
  if (price < 100) return `${currency} ${price.toFixed(2)}`;
  
  return `${currency} ${price.toFixed(2)}`;
};

/**
 * Formatea un porcentaje con signo y color
 * @param change - Cambio porcentual
 * @returns Objeto con valor formateado y clases CSS
 */
export const formatPercentage = (change: number) => {
  const isPositive = change > 0;
  const isNegative = change < 0;
  
  return {
    value: `${isPositive ? '+' : ''}${change.toFixed(2)}%`,
    color: isPositive ? 'text-green-600' : isNegative ? 'text-red-600' : 'text-code-600',
    icon: isPositive ? '📈' : isNegative ? '📉' : '➡️'
  };
};

/**
 * Formatea una dirección de wallet para mostrar
 * @param address - Dirección completa
 * @param start - Caracteres al inicio
 * @param end - Caracteres al final
 * @returns Dirección truncada
 */
export const formatAddress = (address: string, start: number = 6, end: number = 4): string => {
  if (!address || address.length < start + end) return address;
  return `${address.slice(0, start)}...${address.slice(-end)}`;
};

/**
 * Calcula el tiempo transcurrido desde una fecha
 * @param date - Fecha de referencia
 * @returns Tiempo formateado
 */
export const timeAgo = (date: Date | string | number): string => {
  const now = new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'Ahora';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d`;
  
  return `${Math.floor(diffInSeconds / 2592000)}m`;
};

/**
 * Valida si una dirección es válida de Solana
 * @param address - Dirección a validar
 * @returns true si es válida
 */
export const isValidSolanaAddress = (address: string): boolean => {
  // Solana addresses are 32-44 characters long and contain only base58 characters
  const base58Regex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
  return base58Regex.test(address);
};

/**
 * Genera un ID único simple
 * @returns ID único
 */
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Debounce function para optimizar llamadas a API
 * @param func - Función a debounce
 * @param wait - Tiempo de espera en ms
 * @returns Función debounced
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function para limitar frecuencia de llamadas
 * @param func - Función a throttle
 * @param limit - Límite de tiempo en ms
 * @returns Función throttled
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Formatea bytes a unidades legibles
 * @param bytes - Bytes a formatear
 * @returns String formateado
 */
export const formatBytes = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Capitaliza la primera letra de un string
 * @param str - String a capitalizar
 * @returns String capitalizado
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Genera un color aleatorio para avatares
 * @returns Color en formato hex
 */
export const generateAvatarColor = (): string => {
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

/**
 * Valida formato de email
 * @param email - Email a validar
 * @returns true si es válido
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Limpia y normaliza un string
 * @param str - String a limpiar
 * @returns String limpio
 */
export const sanitizeString = (str: string): string => {
  return str
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[^\w\s-]/g, '');
};

/**
 * Convierte un número a formato de moneda argentina
 * @param amount - Cantidad a formatear
 * @returns String formateado
 */
export const formatARS = (amount: number): string => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  }).format(amount);
};

/**
 * Convierte un número a formato de moneda estadounidense
 * @param amount - Cantidad a formatear
 * @returns String formateado
 */
export const formatUSD = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
};
