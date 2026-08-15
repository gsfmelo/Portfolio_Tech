<script setup>
import { ref, computed } from 'vue'

const planted = ref(false)
const plantProgress = ref(0)
const hintText = ref('clique no vaso para plantar')

const plantSeed = () => {
  if (planted.value) return 
  
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

const stemHeight = computed(() => plantProgress.value * 45)
const flowerScale = computed(() => Math.max(0, (plantProgress.value - 0.6) / 0.4))
const flowerRadius = computed(() => 5 + flowerScale.value * 8)
const flowerColor = computed(() => flowerScale.value > 0.05 ? '#D9A441' : '#7CAE72')
</script>

<template>
  <section class="pagina-animada pagina-contato">
    
    <div class="wrap contact-hero">
      <p class="eyebrow">colheita em aberto</p>
      <h1>Vamos plantar algo juntos?</h1>
      <p class="lead">Aberta a estágios, projetos e trocas — focada principalmente em qualidade de software, testes estruturados e experiência do usuário. Me manda uma mensagem!</p>
    </div>

    <div class="wrap contact-grid">
      
      <!-- LADO ESQUERDO: Links e Easter Egg -->
      <div class="contact-info">
        <div class="contact-links">
          <a href="mailto:gsfmelo@gmail.com">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B8A57" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>
            gsfmelo@gmail.com
          </a>
          <a href="https://linkedin.com/in/geovanna-melo" target="_blank">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B8A57" stroke-width="1.8"><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/><path d="M10 9v12M10 13a4 4 0 0 1 8 0v8"/></svg>
            linkedin.com/in/geovanna-melo
          </a>
          <a href="https://github.com/gsfmelo" target="_blank">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B8A57" stroke-width="1.8"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.1 6.9 9.4.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.5-1.2.1-2.6 0 0 .8-.3 2.7 1a9 9 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 22 12c0-5.5-4.5-10-10-10z"/></svg>
            github.com/gsfmelo
          </a>
        </div>
        
        <div class="easter-egg-pot" @click="plantSeed" :class="{ 'is-planted': planted }">
          <svg width="100" height="110" viewBox="0 0 90 110"> <!-- SVG levemente menor -->
            <g transform="translate(45,70)" v-if="plantProgress > 0">
              <line x1="0" y1="0" x2="0" :y2="-stemHeight" stroke="#5B8A57" stroke-width="3" stroke-linecap="round"/>
              <circle cx="0" :cy="-stemHeight" :r="flowerRadius" :fill="flowerColor"/>
            </g>
            <path d="M25 70 L65 70 L58 100 L32 100 Z" fill="#C97B4A"/>
            <path d="M25 70 L65 70 L60 60 L30 60 Z" fill="#B36A3B"/>
          </svg>
          <p class="pot-hint mono">{{ hintText }}</p>
        </div>
      </div>

      <!-- LADO DIREITO: Formulário -->
      <div class="contact-form-wrapper">
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
            <!-- Reduzimos para 4 linhas para não esticar tanto a tela -->
            <textarea id="message" name="message" rows="4" placeholder="Me conte sobre a sua ideia ou projeto..." required></textarea>
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
/* Reduzimos o padding do topo para puxar o conteúdo para cima */
.pagina-contato { padding: 3.5rem 0 4rem; }

/* Reduzimos a margem abaixo do texto de introdução */
.contact-hero { margin-bottom: 2.5rem; text-align: center; display: flex; flex-direction: column; align-items: center; }
.contact-hero h1 { font-size: 42px; font-weight: 700; margin: 0 0 12px; color: var(--text-dark); letter-spacing: -0.02em; }
.contact-hero .lead { font-size: 15.5px; line-height: 1.6; max-width: 600px; color: var(--text-body); margin: 0; }

.contact-grid { 
  display: grid; 
  grid-template-columns: 1fr 1.3fr; 
  gap: 30px; /* Gap um pouquinho mais fechado */
  align-items: stretch; 
}

.contact-info { display: flex; flex-direction: column; gap: 20px; }
.contact-links { display: flex; flex-direction: column; gap: 12px; }
.contact-links a { 
  color: var(--text-dark); text-decoration: none; font-size: 14px; font-weight: 500; 
  display: inline-flex; align-items: center; gap: 12px; transition: 0.2s; 
  padding: 14px 18px; /* Padding dos botões um pouquinho menor */
  background: var(--card); border: 1px solid var(--border); border-radius: 12px; 
}
.contact-links a:hover { 
  color: var(--green-3); border-color: var(--green-2); 
  box-shadow: 0 6px 16px rgba(91, 138, 87, 0.08); transform: translateX(4px); 
}

.easter-egg-pot {
  flex-grow: 1; 
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  background: rgba(124, 174, 114, 0.1); 
  border: 1.5px dashed #B3C7AE; border-radius: 16px; 
  padding: 1.5rem; /* Menos padding aqui também */
  cursor: pointer; width: 100%; transition: all 0.3s ease;
}
.easter-egg-pot:hover { transform: translateY(-4px); background: rgba(124, 174, 114, 0.18); border-color: var(--green-2); }
.easter-egg-pot.is-planted { cursor: default; }
.easter-egg-pot.is-planted:hover { transform: translateY(0); background: rgba(124, 174, 114, 0.1); border-color: #B3C7AE; }
.pot-hint { margin-top: 0.8rem; font-size: 11px; color: var(--text-muted); text-align: center; }

/* Formulário mais compacto */
.contact-form-wrapper { 
  background: var(--card); padding: 2.5rem; border-radius: 16px; 
  border: 1px solid var(--border); box-shadow: 0 10px 30px rgba(36, 59, 41, 0.03); 
  display: flex; flex-direction: column;
}
.contact-form { display: flex; flex-direction: column; height: 100%; }
.form-group { margin-bottom: 1.2rem; } /* Margem entre os campos reduzida */
.form-group label { display: block; font-size: 12px; font-weight: 600; color: var(--green-3); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; }
.form-group input, .form-group textarea { 
  width: 100%; background: var(--panel-green); border: 1.5px solid transparent; 
  border-radius: 10px; padding: 12px 16px; font-family: 'Fredoka', sans-serif; 
  font-size: 14.5px; color: var(--text-dark); transition: all 0.3s ease; 
}
.form-group input::placeholder, .form-group textarea::placeholder { color: #A0B0A2; }
.form-group input:focus, .form-group textarea:focus { outline: none; background: var(--card); border-color: var(--green-2); box-shadow: 0 0 0 4px rgba(124, 174, 114, 0.2); }

.submit-btn { width: 100%; margin-top: auto; font-size: 15.5px; padding: 14px; gap: 10px; }

@media (max-width: 900px) { 
  .contact-grid { grid-template-columns: 1fr; gap: 30px; } 
  .easter-egg-pot { min-height: 200px; }
}
</style>