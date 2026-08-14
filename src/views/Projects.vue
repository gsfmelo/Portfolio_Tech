<script setup>
import { ref } from 'vue'
import { projetos } from '../data/projects.js'
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal(0.1)

const modalAberto = ref(false)
const projetoAtivo = ref(null)

const abrirModal = (projeto) => {
  projetoAtivo.value = projeto
  modalAberto.value = true
  document.body.style.overflow = 'hidden'
}

const fecharModal = () => {
  modalAberto.value = false
  projetoAtivo.value = null
  document.body.style.overflow = 'auto'
}
</script>

<template>
  <section class="pagina-animada">
    <!-- MANTÉM O MESMO TEMPLATE DO PROJETOS QUE VOCÊ JÁ TEM -->
    <div class="wrap projects reveal">
      <p class="eyebrow">canteiro de experimentos</p>
      <h1>Projetos</h1>
      <p class="lead">Um caminho de experimentos, do primeiro teste até o mais aplicado. Clique nos cards para analisar a estrutura por trás da interface.</p>

      <div class="trail-wrap">
        <svg class="trail-line" viewBox="0 0 960 20" preserveAspectRatio="none" style="overflow:visible;">
          <path d="M 20 10 Q 240 -10, 480 10 T 940 10" fill="none" stroke="#B3C7AE" stroke-width="2" stroke-dasharray="1 8" stroke-linecap="round"/>
        </svg>

        <div class="proj-grid">
          <div v-for="projeto in projetos" :key="projeto.id" class="proj-card reveal reveal-delay-1" :class="{ featured: projeto.destaque }" @click="abrirModal(projeto)">
            <span class="proj-dot" :style="{ background: projeto.corDot, width: projeto.destaque ? '16px' : '14px', height: projeto.destaque ? '16px' : '14px', top: projeto.destaque ? '-9px' : '-8px' }"></span>
            <p class="stage">{{ projeto.tagEstagio }}</p>
            <p class="title">{{ projeto.titulo }}</p>
            <p class="desc">{{ projeto.descricaoCurta }}</p>
          </div>
        </div>
      </div>

      <div class="legend reveal reveal-delay-2">
        <span><span class="dot" style="background:#7CAE72;"></span>broto — primeiros testes</span>
        <span><span class="dot" style="background:#5B8A57;"></span>planta — projeto completo</span>
        <span><span class="dot" style="background:#D9A441;"></span>colheita — aplicado fora da sala</span>
      </div>
    </div>

    <!-- MODAL (MANTIDO) -->
    <Transition name="fade">
      <div v-if="modalAberto" class="modal-overlay" @click.self="fecharModal">
        <div class="modal-content case-study-modal">
          <button class="close-btn" @click="fecharModal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
          
          <div class="modal-grid">
            <div class="modal-info">
              <p class="eyebrow" :style="{ color: projetoAtivo.corDot }">{{ projetoAtivo.tagEstagio }}</p>
              <h2>{{ projetoAtivo.titulo }}</h2>
              <p class="modal-desc">{{ projetoAtivo.detalhes }}</p>
              
              <div class="features-list" v-if="projetoAtivo.features">
                <h4 class="mini-title">O que construí:</h4>
                <ul class="clean-list">
                  <li v-for="feat in projetoAtivo.features" :key="feat">{{ feat }}</li>
                </ul>
              </div>

              <div class="modal-stack" v-if="projetoAtivo.stack">
                <span v-for="tech in projetoAtivo.stack" :key="tech" class="modal-tag">{{ tech }}</span>
              </div>
              
              <a :href="projetoAtivo.link" target="_blank" class="btn primary">Ver Repositório ↗</a>
            </div>

            <div class="modal-visual" v-if="projetoAtivo.codeSnippet">
              <div class="code-window">
                <div class="code-header">
                  <span class="mac-dot red"></span><span class="mac-dot yellow"></span><span class="mac-dot green"></span>
                  <span class="file-name mono">snippet.py</span>
                </div>
                <div class="code-body">
                  <pre><code class="mono">{{ projetoAtivo.codeSnippet }}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.projects { padding: 5.5rem 0 3rem; }
.projects h1 { font-size: 42px; font-weight: 600; margin: 0 0 16px; letter-spacing: -0.02em; }
.projects p.lead { font-size: 16px; color: var(--text-body); margin: 0 0 3.5rem; max-width: 600px; line-height: 1.7; }

.trail-wrap { position: relative; }
.trail-line { position: absolute; left: 0; top: 14px; width: 100%; height: 2px; }
.proj-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; position: relative; }
.proj-card { background: var(--card); border-radius: 14px; padding: 1.5rem; border: 1px solid var(--border); position: relative; cursor: pointer; transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.3s; }
.proj-card:hover { transform: translateY(-6px); box-shadow: 0 12px 24px rgba(36, 59, 41, 0.08); }
.proj-card.featured { border: 2px solid var(--amber); }
.proj-dot { position: absolute; left: 22px; border-radius: 50%; border: 2px solid var(--bg); transition: transform 0.2s; }
.proj-card:hover .proj-dot { transform: scale(1.2); }
.proj-card .stage { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #8A6A34; margin: 12px 0 6px; text-transform: uppercase; }
.proj-card .title { font-size: 17px; font-weight: 600; margin: 0 0 6px; color: var(--text-dark); }
.proj-card .desc { font-size: 13.5px; color: var(--text-muted); margin: 0; line-height: 1.5; }

.legend { margin-top: 2.5rem; background: var(--panel-green); border-radius: 14px; padding: 1rem 1.6rem; display: inline-flex; gap: 22px; flex-wrap: wrap; font-size: 13px; color: var(--text-body); font-weight: 500; }
.legend span { display: flex; align-items: center; gap: 8px; }
.legend .dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(24, 38, 27, 0.6); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 2rem; }
.case-study-modal { background: var(--bg); border-radius: 20px; padding: 3rem; max-width: 900px; width: 100%; position: relative; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); max-height: 90vh; overflow-y: auto; }
.close-btn { position: absolute; top: 1.5rem; right: 1.5rem; background: var(--panel-green); border: none; cursor: pointer; color: var(--text-dark); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.2s; z-index: 10; }
.close-btn:hover { background: var(--terracota); color: white; transform: rotate(90deg); }

.modal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.modal-info h2 { font-size: 32px; font-weight: 700; margin: 0 0 1rem; color: var(--text-dark); letter-spacing: -0.02em; }
.modal-desc { font-size: 15px; line-height: 1.7; color: var(--text-body); margin-bottom: 2rem; }
.mini-title { font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: var(--green-3); margin: 0 0 12px; }
.clean-list { list-style: none; padding: 0; margin: 0 0 2rem; }
.clean-list li { font-size: 14px; color: var(--text-body); line-height: 1.6; margin-bottom: 10px; padding-left: 20px; position: relative; }
.clean-list li::before { content: '✓'; position: absolute; left: 0; color: var(--terracota); font-weight: bold; }
.modal-stack { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 2.5rem; }
.modal-tag { background: var(--card); border: 1px solid var(--border); color: var(--text-dark); font-size: 12px; font-family: 'JetBrains Mono', monospace; padding: 6px 12px; border-radius: 6px; font-weight: 500; }

.modal-visual { display: flex; align-items: stretch; }
.code-window { background: #1E1E1E; border-radius: 12px; width: 100%; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.15); display: flex; flex-direction: column; }
.code-header { background: #2D2D2D; padding: 12px 16px; display: flex; align-items: center; gap: 8px; position: relative; }
.mac-dot { width: 10px; height: 10px; border-radius: 50%; }
.red { background: #FF5F56; } .yellow { background: #FFBD2E; } .green { background: #27C93F; }
.file-name { position: absolute; left: 50%; transform: translateX(-50%); color: #858585; font-size: 12px; }
.code-body { padding: 16px; overflow-x: auto; flex: 1; }
.code-body pre { margin: 0; }
.code-body code { font-size: 13px; color: #D4D4D4; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word; }

@media (max-width: 900px) { .modal-grid { grid-template-columns: 1fr; gap: 30px; } .code-window { max-height: 350px; } }
@media (max-width: 600px) { .case-study-modal { padding: 2rem 1.5rem; } }
</style>