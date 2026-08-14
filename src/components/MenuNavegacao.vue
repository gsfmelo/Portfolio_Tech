<template>
  <nav class="nav">
    <!-- Agora a logo é um link que leva para a Home (/) -->
    <RouterLink to="/" class="brand mono">estufa digital</RouterLink>
    
    <div class="links">
      <RouterLink to="/">home</RouterLink>
      <RouterLink to="/sobre">sobre</RouterLink>
      <RouterLink to="/projetos">projetos</RouterLink>
      <RouterLink to="/contato">contato</RouterLink>
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
  z-index: 100; /* Aumentei o z-index para garantir que fique acima de tudo */
}
/* Estilos ajustados para a marca clicável */
.nav .brand { 
  font-weight: 600; font-size: 15px; 
  color: var(--text-dark); text-decoration: none; 
  transition: color 0.2s;
}
.nav .brand:hover { color: var(--green-2); }

.nav .links { display: flex; gap: 28px; font-size: 14px; color: var(--text-body); }
.nav .links a { color: inherit; text-decoration: none; transition: 0.2s; }
.nav .links a:hover, .nav .links a.router-link-active { color: var(--text-dark); font-weight: 500; }

@media (max-width: 720px) {
  .nav { padding: 1rem 1.4rem; }
  .nav .links { display: none; }
}
</style>