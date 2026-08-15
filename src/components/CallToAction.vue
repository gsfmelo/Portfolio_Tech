<script setup>
// As cores da estufa digital para as folhinhas
const colors = ['#7CAE72', '#D9A441', '#C97B4A', '#5B8A57']

// Gerando 15 folhinhas/pétalas aleatórias
const leaves = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  left: Math.random() * 100, // Posição horizontal aleatória (0% a 100%)
  delay: Math.random() * 5, // Atraso para não caírem todas juntas
  duration: 6 + Math.random() * 8, // Tempo de queda
  color: colors[Math.floor(Math.random() * colors.length)],
  scale: 0.8 + Math.random() * 0.7 
}))
</script>

<template>
  <section class="global-cta">
    <div class="wrap cta-box">
      
      <!-- CAMADA DAS FOLHAS CAINDO (Fundo do CTA) -->
      <div class="leaves-container">
        <div
          v-for="leaf in leaves"
          :key="leaf.id"
          class="leaf-particle"
          :style="{
            left: leaf.left + '%',
            animationDelay: leaf.delay + 's',
            animationDuration: leaf.duration + 's',
            color: leaf.color,
            transform: `scale(${leaf.scale})`
          }"
        >
          <svg width="12" height="12" viewBox="0 0 10 10">
            <ellipse cx="5" cy="5" rx="5" ry="3" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <!-- CONTEÚDO REAL DO CTA -->
      <div class="cta-content">
        <h2>Pronto para cultivar novas ideias?</h2>
        <p>Seja pra falar de novos projetos, QA, trocar ideia sobre UX/UI ou só compartilhar referências de tecnologia, minha estufa está de portas abertas.</p>
        <div class="btn-row">
          <RouterLink to="/contato" class="btn primary">Vamos conversar</RouterLink>
          <a href="/cv-geovanna-melo.pdf" download="CV_GeovannaMelo_Tech.pdf" target="_blank" class="btn ghost-light">Baixar currículo</a>
        </div>
      </div>
      
      <!-- ÍCONE DE FUNDO -->
      <div class="cta-visual">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(91, 138, 87, 0.2)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
        </svg>
      </div>

    </div>
  </section>
</template>

<style scoped>
.global-cta {
  padding: 4rem 0 6rem;
}

.cta-box {
  background: var(--panel-green);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden; /* Isso garante que as folhas não vazem da caixa verde */
}

/* =========================================
   ANIMAÇÃO DAS FOLHAS CAINDO
   ========================================= */
.leaves-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* As folhas não bloqueiam os cliques nos botões */
  z-index: 1;
}

.leaf-particle {
  position: absolute;
  top: -30px; 
  opacity: 0;
  will-change: transform, opacity;
  animation: fall linear infinite;
}

@keyframes fall {
  0% { transform: translateY(0) rotate(0deg) translateX(0); opacity: 0; }
  15% { opacity: 0.7; }
  85% { opacity: 0.7; }
  100% { transform: translateY(350px) rotate(360deg) translateX(40px); opacity: 0; }
}

/* =========================================
   CONTEÚDO
   ========================================= */
.cta-content {
  position: relative;
  z-index: 2; /* Fica acima das folhas */
  max-width: 560px;
}

.cta-box h2 { font-size: 36px; font-weight: 600; color: var(--text-dark); margin: 0 0 16px; letter-spacing: -0.02em; }
.cta-box p { font-size: 16px; color: var(--text-body); line-height: 1.7; margin: 0 0 32px; }

.btn-row { display: flex; gap: 16px; }

/* Os botões pegam as classes globais do main.css, mas a gente ajusta o ghost-light aqui */
.ghost-light {
  background: transparent; color: var(--text-dark); border: 1.5px solid var(--border-soft);
  font-family: 'Fredoka', sans-serif; font-size: 15px; font-weight: 500;
  border-radius: 8px; padding: 14px 28px; cursor: pointer; text-decoration: none;
  display: inline-flex; align-items: center; justify-content: center; transition: all 0.3s ease;
}
.ghost-light:hover { background: var(--card); border-color: var(--card); transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.05); }

.cta-visual {
  position: absolute; right: -20px; bottom: -30px; transform: scale(2.5) rotate(-15deg); z-index: 1;
}

@media (max-width: 768px) {
  .cta-box { padding: 3rem 2rem; flex-direction: column; text-align: center; }
  .btn-row { flex-direction: column; width: 100%; }
  .cta-visual { display: none; }
}
</style>