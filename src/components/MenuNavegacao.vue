<script setup>
import { ref } from 'vue'

// Controla se o menu de celular está aberto ou fechado
const menuAberto = ref(false)

const toggleMenu = () => {
  menuAberto.value = !menuAberto.value
  
  // Impede a rolagem da página quando o menu mobile está aberto
  if (menuAberto.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

// Função para fechar o menu ao clicar em um link
const fecharMenu = () => {
  menuAberto.value = false
  document.body.style.overflow = 'auto'
}
</script>

<template>
  <nav class="nav">
    <RouterLink to="/" class="brand mono" @click="fecharMenu">estufa digital</RouterLink>
    
    <!-- Botão Sanduíche (Aparece apenas no mobile) -->
    <button class="hamburger" @click="toggleMenu" :class="{ 'is-active': menuAberto }" aria-label="Menu">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </button>

    <!-- Lista de Links -->
    <div class="links" :class="{ 'menu-aberto': menuAberto }">
      <RouterLink to="/" @click="fecharMenu">home</RouterLink>
      <RouterLink to="/sobre" @click="fecharMenu">sobre</RouterLink>
      <RouterLink to="/projetos" @click="fecharMenu">projetos</RouterLink>
      <RouterLink to="/contato" @click="fecharMenu">contato</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  display: flex; justify-content: space-between; align-items: center;
  padding: 1.1rem 3rem;
  border-bottom: 1px solid var(--border);
  position: sticky; top: 0; 
  background: rgba(243,240,228,0.92); backdrop-filter: blur(6px);
  z-index: 100; 
}

.nav .brand { 
  font-weight: 600; font-size: 15px; 
  color: var(--text-dark); text-decoration: none; 
  transition: color 0.2s;
  z-index: 101; /* Fica acima do menu aberto */
}
.nav .brand:hover { color: var(--green-2); }

.nav .links { display: flex; gap: 28px; font-size: 14px; color: var(--text-body); }
.nav .links a { color: inherit; text-decoration: none; transition: 0.2s; }
.nav .links a:hover, .nav .links a.router-link-active { color: var(--text-dark); font-weight: 500; }

/* =========================================
   MENU MOBILE & SANDUÍCHE
   ========================================= */
.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 0 8px 8px;
  z-index: 101; /* Fica acima da tela do menu aberto */
}

.hamburger .line {
  display: block;
  width: 24px;
  height: 2px;
  margin: 5px auto;
  background-color: var(--text-dark);
  transition: all 0.3s ease-in-out;
  border-radius: 2px;
}

/* Animação para transformar o sanduíche num 'X' */
.hamburger.is-active .line:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.is-active .line:nth-child(2) { opacity: 0; }
.hamburger.is-active .line:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 720px) {
  .nav { padding: 1rem 1.4rem; }
  
  .hamburger { display: block; }
  
  /* O menu vira uma tela inteira que desliza da direita */
  .nav .links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: var(--bg);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    font-size: 22px;
    transition: right 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: 100;
  }

  .nav .links.menu-aberto {
    right: 0;
  }
}
</style>