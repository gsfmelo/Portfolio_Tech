<script setup>
import { ref, computed } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal(0.15)

// ==========================================
// LÓGICA DO EASTER EGG (VASINHO)
// ==========================================
const planted = ref(false)
const plantProgress = ref(0)
const hintText = ref('clique no vaso para plantar')

const plantSeed = () => {
  if (planted.value) return // Se já plantou, não faz nada
  
  planted.value = true
  hintText.value = 'semente plantada! 🌱'
  
  let t = 0
  const interval = setInterval(() => {
    t += 0.05
    if (t >= 1) {
      t = 1
      clearInterval(interval)
      hintText.value = 'obrigada por cuidar da semente 🌸'
    }
    plantProgress.value = t
  }, 40)
}

// Cálculos reativos baseados no progresso de 0 a 1
const stemHeight = computed(() => plantProgress.value * 45)
const flowerScale = computed(() => Math.max(0, (plantProgress.value - 0.6) / 0.4))
const flowerRadius = computed(() => 5 + flowerScale.value * 8)
const flowerColor = computed(() => flowerScale.value > 0.05 ? '#D9A441' : '#7CAE72')
</script>

<template>
  <section class="pagina-animada pagina-contato">
    <div class="wrap contact-hero reveal">
      <p class="eyebrow">colheita em aberto</p>
      <h1>Vamos plantar algo juntos?</h1>
      <p class="lead">Aberta a estágios, projetos e trocas — focada principalmente em engenharia de dados, testes estruturados e automação de processos. Me mande uma mensagem!</p>
    </div>

    <div class="wrap contact-grid">
      <!-- LADO ESQUERDO: Links e Easter Egg -->
      <div class="contact-info reveal reveal-delay-1">
        
        <div class="contact-links">
          <a href="mailto:geovanna@email.com"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B8A57" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>geovanna@email.com</a>
          <a href="https://linkedin.com/in/geovannamelo" target="_blank"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B8A57" stroke-width="1.8"><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/><path d="M10 9v12M10 13a4 4 0 0 1 8 0v8"/></svg>linkedin.com/in/geovannamelo</a>
          <a href="https://github.com/geovannamelo" target="_blank"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B8A57" stroke-width="1.8"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.1 6.9 9.4.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.5-1.2.1-2.6 0 0 .8-.3 2.7 1a9 9 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 22 12c0-5.5-4.5-10-10-10z"/></svg>github.com/geovannamelo</a>
        </div>
        
        <div class="contact-visual">
          <div class="easter-egg-pot" @click="plantSeed" :class="{ 'is-planted': planted }">
            <svg width="110" height="130" viewBox="0 0 90 110">
              <!-- A planta que cresce dinamicamente -->
              <g transform="translate(45,70)" v-if="plantProgress > 0">
                <line x1="0" y1="0" x2="0" :y2="-stemHeight" stroke="#5B8A57" stroke-width="3" stroke-linecap="round"/>
                <circle cx="0" :cy="-stemHeight" :r="flowerRadius" :fill="flowerColor"/>
              </g>
              <!-- O Vaso -->
              <path d="M25 70 L65 70 L58 100 L32 100 Z" fill="#C97B4A"/>
              <path d="M25 70 L65 70 L60 60 L30 60 Z" fill="#B36A3B"/>
            </svg>
            <p class="pot-hint mono">{{ hintText }}</p>
          </div>
        </div>

      </div>

      <!-- LADO DIREITO: Formulário -->
      <div class="contact-form-wrapper reveal reveal-delay-2">
        <form action="https://formspree.io/f/SEU_CODIGO_AQUI" method="POST" class="contact-form">
          <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" id="name" name="name" placeholder="Como posso te chamar?" required>
          </div>
          <div class="form-group">
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="seu@email.com" required>
          </div>
          <div class="form-group">
            <label for="message">Mensagem</label>
            <textarea id="message" name="message" rows="5" placeholder="Me conte sobre a sua ideia ou projeto..." required></textarea>
          </div>
          <button type="submit" class="btn primary submit-btn">
            Enviar mensagem
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pagina-contato { padding: 5.5rem 0 6rem; }
.contact-hero { margin-bottom: 4rem; text-align: center; display: flex; flex-direction: column; align-items: center; }
.contact-hero h1 { font-size: 46px; font-weight: 700; margin: 0 0 16px; color: var(--text-dark); letter-spacing: -0.02em; }
.contact-hero .lead { font-size: 17px; line-height: 1.7; max-width: 600px; color: var(--text-body); margin: 0; }

.contact-grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 60px; align-items: start; }

/* Links de Contato */
.contact-links { display: flex; flex-direction: column; gap: 16px; margin-bottom: 3rem; }
.contact-links a { color: var(--text-dark); text-decoration: none; font-size: 15px; font-weight: 500; display: inline-flex; align-items: center; gap: 12px; transition: 0.2s; padding: 12px 20px; background: var(--card); border: 1px solid var(--border); border-radius: 12px; }
.contact-links a:hover { color: var(--green-3); border-color: var(--green-2); box-shadow: 0 6px 16px rgba(91, 138, 87, 0.08); transform: translateX(4px); }

/* =========================================
   ESTILOS DO VASINHO (EASTER EGG)
   ========================================= */
.contact-visual { display: flex; justify-content: center; }

.easter-egg-pot {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--panel-green);
  border: 2px dashed #B3C7AE;
  border-radius: 20px;
  padding: 2.5rem 2rem 1.5rem;
  cursor: pointer;
  width: 100%;
  max-width: 280px;
  transition: all 0.3s ease;
}

.easter-egg-pot:hover {
  transform: translateY(-4px);
  background: #E1E8DE;
  border-color: var(--green-2);
}

.easter-egg-pot.is-planted {
  cursor: default; /* Remove o cursor de clique depois de plantado */
}
.easter-egg-pot.is-planted:hover {
  transform: translateY(0);
  background: var(--panel-green);
  border-color: #B3C7AE;
}

.pot-hint {
  margin-top: 1rem;
  font-size: 11px;
  color: var(--text-muted);
  text-align: center;
}

/* =========================================
   FORMULÁRIO (MANTIDO)
   ========================================= */
.contact-form-wrapper { background: var(--card); padding: 3rem; border-radius: 20px; border: 1px solid var(--border); box-shadow: 0 20px 40px rgba(36, 59, 41, 0.05); }
.form-group { margin-bottom: 1.5rem; }
.form-group label { display: block; font-size: 13px; font-weight: 600; color: var(--green-3); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
.form-group input, .form-group textarea { width: 100%; background: var(--panel-green); border: 1.5px solid transparent; border-radius: 10px; padding: 14px 18px; font-family: 'Fredoka', sans-serif; font-size: 15px; color: var(--text-dark); transition: all 0.3s ease; }
.form-group input::placeholder, .form-group textarea::placeholder { color: #A0B0A2; }
.form-group input:focus, .form-group textarea:focus { outline: none; background: var(--card); border-color: var(--green-2); box-shadow: 0 0 0 4px rgba(124, 174, 114, 0.2); }

.submit-btn { width: 100%; margin-top: 1rem; font-size: 16px; padding: 16px; gap: 10px; }

@media (max-width: 900px) { 
  .contact-grid { grid-template-columns: 1fr; gap: 40px; } 
  .contact-links { flex-direction: row; flex-wrap: wrap; justify-content: center; } 
}
@media (max-width: 600px) { 
  .contact-links { flex-direction: column; } 
  .contact-form-wrapper { padding: 2rem 1.5rem; } 
}
</style>