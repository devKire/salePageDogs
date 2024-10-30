import React from 'react';

export default function Features() {
  return (
    <div className="features">
      <div className="feature-item">
        <svg
          className="feature-icon"
          width="48" /* Aumentando o tamanho do ícone */
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <p>Compra Segura</p>
      </div>
      <div className="feature-item">
        <svg
          className="feature-icon"
          width="48" /* Aumentando o tamanho do ícone */
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
        <p>Satisfação Garantida</p>
      </div>
      <div className="feature-item">
        <svg
          className="feature-icon"
          width="48" /* Aumentando o tamanho do ícone */
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <p>Privacidade Protegida</p>
      </div>
    </div>
  );
}