const isProduction =
  process.env.NODE_ENV === 'production' ||
  (typeof window !== 'undefined' && window.location.hostname !== 'localhost');

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  (isProduction
    ? 'https://ready-nest-intership-week-6.onrender.com/api'
    : 'http://localhost:5000/api');

export const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  (isProduction
    ? 'https://ready-nest-intership-week-6.onrender.com'
    : 'http://localhost:5000');
