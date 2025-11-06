// Allow overriding the backend base URL via Vite env (VITE_API_BASE).
// This makes it easy to run against local or staging backends without changing source.
export const API_BASE = import.meta.env.VITE_API_BASE || 'https://mil.psy.ntu.edu.tw:5000';
