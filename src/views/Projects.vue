<script setup>
import { ref, computed } from 'vue'
import { projetos } from '../data/projects.js'

// ==========================================
// 1. CONFIGURAÇÃO DAS COLUNAS
// ==========================================
const colunas = [
  { id: 'broto', cor: '#7CAE72', label: 'broto' },
  { id: 'planta', cor: '#5B8A57', label: 'planta' },
  { id: 'colheita', cor: '#D9A441', label: 'colheita' }
]

// ==========================================
// 2. LÓGICA DE FILTRAGEM (As tags no topo)
// ==========================================
const filtroAtual = ref('Todos')

// Extrai todas as linguagens únicas do array de projetos para criar os botões dinamicamente
const stacksUnicas = computed(() => {
  const todasStacks = projetos.flatMap(proj => proj.stack || [])
  return ['Todos', ...new Set(todasStacks)]
})

// Filtra a lista principal baseada no botão clicado
const projetosFiltrados = computed(() => {
  if (filtroAtual.value === 'Todos') return projetos
  return projetos.filter(proj => proj.stack?.includes(filtroAtual.value))
})

// Distribui os projetos já filtrados para suas respectivas colunas
const projetosPorColuna = (colunaId) => {
  return projetosFiltrados.value.filter(proj => proj.estagio === colunaId)
}

// ==========================================
// 3. LÓGICA DO MODAL & NAVEGAÇÃO
// ==========================================
const projetoAberto = ref(null)

const abrirModal = (proj) => {
  projetoAberto.value = proj
  document.body.style.overflow = 'hidden' // Impede o scroll da página no fundo
}

const fecharModal = () => {
  projetoAberto.value = null
  document.body.style.overflow = 'auto'
}

// Encontra a posição do projeto atual na lista filtrada para as setas de Próximo/Anterior
const indexAtual = computed(() => {
  if (!projetoAberto.value) return -1
  return projetosFiltrados.value.findIndex(p => p.id === projetoAberto.value.id)
})

const podeVoltar = computed(() => indexAtual.value > 0)
const podeAvancar = computed(() => indexAtual.value >= 0 && indexAtual.value < projetosFiltrados.value.length - 1)

const projetoAnterior = () => {
  if (podeVoltar.value) projetoAberto.value = projetosFiltrados.value[indexAtual.value - 1]
}

const proximoProjeto = () => {
  if (podeAvancar.value) projetoAberto.value = projetosFiltrados.value[indexAtual.value + 1]
}
</script>

<template>
  <section class="pagina-projetos pagina-animada">
    
    <div class="wrap header-projetos">
      <h1>Projetos</h1>
      <p class="lead">Um caminho de experimentos, do primeiro teste até o mais aplicado. Analise a evolução da estrutura por trás do código.</p>
    </div>

    <!-- FILTRO DE LINGUAGENS -->
    <div class="wrap filter-section">
      <button 
        v-for="stack in stacksUnicas" 
        :key="stack"
        class="filter-btn"
        :class="{ ativo: filtroAtual === stack }"
        @click="filtroAtual = stack"
      >
        {{ stack }}
      </button>
    </div>

    <!-- QUADRO KANBAN -->
    <div class="wrap kanban-board">
      <div class="kanban-col" v-for="col in colunas" :key="col.id">
        
        <!-- Cabeçalho invisível das colunas (mantendo o charme do design) -->
        <div class="col-header">
          <span class="dot" :style="{ backgroundColor: col.cor }"></span>
          <span class="col-label" :style="{ color: col.cor }">{{ col.label }}</span>
        </div>
        
        <!-- Os cards que se ajustam à altura do conteúdo -->
        <div 
          class="k-card" 
          v-for="proj in projetosPorColuna(col.id)" 
          :key="proj.id"
          :style="{ borderLeftColor: col.cor }"
          @click="abrirModal(proj)"
        >
          <h4>{{ proj.titulo }}</h4>
          <p class="k-curta">{{ proj.curta || proj.descricaoCurta }}</p>
          
          <div class="card-stacks">
            <span v-for="s in proj.stack" :key="s" class="stack-tag">{{ s }}</span>
          </div>
        </div>

      </div>
    </div>

    <!-- ==========================================
         O MODAL SOBREPOSTO
         ========================================== -->
    <transition name="fade">
      <div class="modal-overlay" v-if="projetoAberto" @click.self="fecharModal">
        
        <!-- Botão de Voltar -->
        <button class="nav-btn prev-btn" @click="projetoAnterior" :disabled="!podeVoltar" aria-label="Projeto anterior">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        <!-- Conteúdo do Modal -->
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-estagio">
              <span class="dot" :style="{ backgroundColor: colunas.find(c => c.id === projetoAberto.estagio).cor }"></span>
              <span class="mono" :style="{ color: colunas.find(c => c.id === projetoAberto.estagio).cor }">{{ projetoAberto.estagio }}</span>
            </div>
            <button class="close-btn" @click="fecharModal" aria-label="Fechar">✕</button>
          </div>
          
          <h2>{{ projetoAberto.titulo }}</h2>
          <p class="modal-detalhes">{{ projetoAberto.detalhes }}</p>
          
          <div class="modal-stacks">
            <span v-for="s in projetoAberto.stack" :key="s" class="stack-tag solid">{{ s }}</span>
          </div>
          
          <div class="modal-actions">
            <a :href="projetoAberto.link" target="_blank" class="btn primary full">Ver no GitHub</a>
          </div>
        </div>

        <!-- Botão de Avançar -->
        <button class="nav-btn next-btn" @click="proximoProjeto" :disabled="!podeAvancar" aria-label="Próximo projeto">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
        </button>

      </div>
    </transition>

  </section>
</template>

<style scoped>
.header-projetos { padding: 4rem 0 2rem; }
.header-projetos h1 { font-size: 46px; font-weight: 800; margin: 0 0 16px; color: var(--text-dark); letter-spacing: -0.02em; }
.header-projetos .lead { font-size: 16px; color: var(--text-body); max-width: 580px; line-height: 1.6; }

/* =========================================
   FILTROS
   ========================================= */
.filter-section { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 3rem; }
.filter-btn {
  background: transparent; border: 1.5px solid var(--border); border-radius: 20px;
  padding: 6px 16px; font-family: 'JetBrains Mono', monospace; font-size: 12px;
  color: var(--text-muted); cursor: pointer; transition: all 0.2s ease;
}
.filter-btn:hover { border-color: var(--green-2); color: var(--green-3); }
.filter-btn.ativo { background: var(--green-2); border-color: var(--green-2); color: var(--bg); }

/* =========================================
   KANBAN BOARD (Alturas independentes)
   ========================================= */
.kanban-board {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  align-items: start; /* Mágica que impede a coluna de esticar! */
  margin-bottom: 6rem;
}
.kanban-col { display: flex; flex-direction: column; gap: 16px; }

.col-header { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; padding-left: 4px; }
.col-header .dot { width: 8px; height: 8px; border-radius: 50%; }
.col-header .col-label { font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; }

/* CARDS */
.k-card {
  background: var(--card); border-radius: 8px; padding: 16px 20px;
  border-left: 4px solid; /* A cor vem dinamicamente do estilo inline */
  box-shadow: 0 2px 8px rgba(0,0,0,0.03); cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.k-card:hover { transform: translateY(-3px); box-shadow: 0 8px 16px rgba(36, 59, 41, 0.06); }
.k-card h4 { font-size: 16px; font-weight: 600; color: var(--text-dark); margin: 0 0 6px; }
.k-curta { font-size: 13.5px; color: var(--text-muted); line-height: 1.5; margin: 0 0 12px; }

.card-stacks { display: flex; flex-wrap: wrap; gap: 6px; }
.stack-tag { font-family: 'JetBrains Mono', monospace; font-size: 10px; background: var(--bg); color: var(--green-2); padding: 3px 8px; border-radius: 4px; }
.stack-tag.solid { background: var(--panel-green); color: var(--green-3); font-size: 11px; }

/* =========================================
   MODAL & NAVEGAÇÃO
   ========================================= */
.modal-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(36, 59, 41, 0.6); backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center; gap: 20px;
  z-index: 1000; padding: 2rem;
}

.modal-content {
  background: var(--bg); border-radius: 16px; padding: 2.5rem;
  width: 100%; max-width: 500px; position: relative;
  box-shadow: 0 24px 48px rgba(0,0,0,0.2);
}

.modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
.modal-estagio { display: flex; align-items: center; gap: 8px; }
.modal-estagio .dot { width: 8px; height: 8px; border-radius: 50%; }
.modal-estagio .mono { font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; }

.close-btn { background: none; border: none; font-size: 20px; color: var(--text-muted); cursor: pointer; transition: 0.2s; }
.close-btn:hover { color: var(--terracota); }

.modal-content h2 { font-size: 24px; font-weight: 700; color: var(--text-dark); margin: 0 0 1rem; }
.modal-detalhes { font-size: 15px; color: var(--text-body); line-height: 1.7; margin: 0 0 1.5rem; }
.modal-stacks { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 2rem; }

.btn.full { display: block; text-align: center; width: 100%; padding: 14px; border-radius: 8px; }

/* Setas de Navegação */
.nav-btn {
  background: var(--card); border: none; border-radius: 50%;
  width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;
  color: var(--green-3); cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.2s, background 0.2s; flex-shrink: 0;
}
.nav-btn:hover:not(:disabled) { transform: scale(1.1); background: var(--panel-green); }
.nav-btn:disabled { opacity: 0.3; cursor: not-allowed; }

/* Transição suave do Modal */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 768px) {
  .kanban-board { grid-template-columns: 1fr; }
  .modal-overlay { padding: 1rem; gap: 10px; }
  .nav-btn { width: 36px; height: 36px; }
  .modal-content { padding: 1.5rem; }
}
</style>