<template>
  <section class="pagina-animada error-page">
    <div class="wrap error-content">
      <div class="error-visual">
        <svg viewBox="0 0 150 150">
          <!-- Vaso quebrado -->
          <path d="M40 100 L110 100 L102 70 L70 85 L65 70 L48 70 Z" fill="#C97B4A"/>
          <path d="M70 85 L85 100" stroke="#F3F0E4" stroke-width="3"/>
          <path d="M60 70 L70 90" stroke="#F3F0E4" stroke-width="2"/>
          <ellipse cx="75" cy="110" rx="40" ry="6" fill="#E0D6B8" opacity="0.5"/>
          <!-- Folha caída -->
          <path d="M100 120 C 110 110, 130 115, 125 125 C 120 135, 100 130, 100 120 Z" fill="#8A6A34" opacity="0.6"/>
        </svg>
      </div>
      
      <p class="eyebrow error-code">erro 404</p>
      <h1>Semente não encontrada.</h1>
      <p class="desc">A página que você está procurando murchou, mudou de endereço ou nunca chegou a ser plantada nesse canteiro.</p>
      
      <RouterLink to="/" class="btn primary">Voltar para a Estufa</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.pagina-animada { animation: fadeIn 0.4s ease-in-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

.error-page {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 0;
}

.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  /* Garantindo padding lateral independentemente do .wrap global */
  padding: 0 1.5rem; 
}

.error-visual {
  margin-bottom: 2rem;
  animation: float 5s ease-in-out infinite;
}

/* Deixei o SVG responsivo removendo o width/height fixos da tag HTML */
.error-visual svg {
  width: 160px;
  height: 160px;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}

.error-code {
  color: var(--terracota);
  font-size: 14px;
  margin-bottom: 1rem;
}

h1 {
  font-size: 42px;
  font-weight: 700;
  color: var(--text-dark);
  margin: 0 0 1rem;
  letter-spacing: -0.02em;
}

.desc {
  font-size: 16px;
  color: var(--text-body);
  line-height: 1.6;
  margin: 0 0 2.5rem;
}

.btn.primary {
  font-family: 'Fredoka', sans-serif; font-size: 15px; font-weight: 500;
  border-radius: 8px; padding: 14px 32px; text-decoration: none;
  background: var(--green-2); color: var(--card);
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(91, 138, 87, 0.2);
}
.btn.primary:hover {
  background: var(--green-3);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(62, 92, 58, 0.25);
}

/* =========================================
   RESPONSIVIDADE (MOBILE)
   ========================================= */
@media (max-width: 600px) {
  .error-page {
    min-height: 60vh;
    padding: 3rem 0;
  }

  .error-visual svg {
    width: 120px; /* Reduzindo a ilustração no mobile */
    height: 120px;
  }

  h1 {
    font-size: 32px; /* Fonte ajustada para não quebrar a tela */
  }

  .desc {
    font-size: 15px;
    margin: 0 0 2rem;
  }
}
</style>