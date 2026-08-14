<template>
  <section class="global-cta">
    <div class="wrap cta-box">
      <div class="cta-content">
        <h2>Pronta para cultivar novas ideias?</h2>
        <p>Seja para discutir arquitetura de dados, planejar automações ou apenas trocar referências de cinema e tecnologia, minha estufa está de portas abertas.</p>
        <div class="btn-row">
          <RouterLink to="/contato" class="btn primary">Vamos conversar</RouterLink>
          <a href="#" class="btn ghost-light">Baixar currículo</a>
        </div>
      </div>
      <div class="cta-visual">
        <!-- Ícone minimalista de uma folha/broto -->
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
  overflow: hidden;
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 560px;
}

.cta-box h2 {
  font-size: 36px;
  font-weight: 600;
  color: var(--text-dark);
  margin: 0 0 16px;
  letter-spacing: -0.02em;
}

.cta-box p {
  font-size: 16px;
  color: var(--text-body);
  line-height: 1.7;
  margin: 0 0 32px;
}

.btn-row {
  display: flex;
  gap: 16px;
}

.btn {
  font-family: 'Fredoka', sans-serif; font-size: 15px; font-weight: 500;
  border-radius: 8px; padding: 14px 28px; cursor: pointer; text-decoration: none;
  display: inline-flex; align-items: center; justify-content: center;
  transition: all 0.3s ease;
}

.primary {
  background: var(--green-2); color: var(--card); border: none;
  box-shadow: 0 4px 14px rgba(91, 138, 87, 0.2);
}
.primary:hover {
  background: var(--green-3); transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(62, 92, 58, 0.25);
}

.ghost-light {
  background: transparent; color: var(--text-dark);
  border: 1.5px solid var(--border-soft);
}
.ghost-light:hover {
  background: var(--card); border-color: var(--card);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.cta-visual {
  position: absolute;
  right: -20px;
  bottom: -30px;
  transform: scale(2.5) rotate(-15deg);
  z-index: 1;
}

@media (max-width: 768px) {
  .cta-box { padding: 3rem 2rem; flex-direction: column; text-align: center; }
  .btn-row { flex-direction: column; width: 100%; }
  .cta-visual { display: none; }
}
</style>