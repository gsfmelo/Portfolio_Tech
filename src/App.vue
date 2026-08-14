<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import MenuNavegacao from './components/MenuNavegacao.vue'
import Rodape from './components/Rodape.vue'
import CallToAction from './components/CallToAction.vue'

const route = useRoute()
const mostrarBotaoTopo = ref(false)

// Verifica a rolagem da página
const checarScroll = () => {
  mostrarBotaoTopo.value = window.scrollY > 400
}

// Função para rolar suavemente para cima
const rolarParaTopo = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checarScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checarScroll)
})
</script>

<template>
  <div class="app-layout">
    <MenuNavegacao />
    
    <main class="conteudo-principal">
      <RouterView /> 
      <CallToAction v-if="route.path !== '/contato' && route.name !== 'not-found'" />
    </main>

    <Rodape />

    <!-- Botão Voltar ao Topo -->
    <Transition name="fade-slide">
      <button v-show="mostrarBotaoTopo" @click="rolarParaTopo" class="btn-topo" aria-label="Voltar ao topo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </Transition>
  </div>
</template>

<style>
.app-layout { display: flex; flex-direction: column; min-height: 100vh; }
.conteudo-principal { flex: 1; }

/* Estilos do Botão Flutuante */
.btn-topo {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: var(--terracota);
  color: var(--card);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(201, 123, 74, 0.3);
  z-index: 99;
  transition: transform 0.3s ease, background 0.3s ease;
}
.btn-topo:hover {
  background: #B36A3B;
  transform: translateY(-4px);
}

/* Animação de entrada e saída do botão */
.fade-slide-enter-active, .fade-slide-leave-active { transition: all 0.3s ease; }
.fade-slide-enter-from, .fade-slide-leave-to { opacity: 0; transform: translateY(20px); }

@media (max-width: 720px) {
  .btn-topo { bottom: 20px; right: 20px; width: 44px; height: 44px; }
}
</style>