import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'
import Projetos from '../views/Projects.vue'
import Contato from '../views/Contato.vue'

// 1. IMPORTANTE: Importe o seu componente de erro (veja se o nome do arquivo está certo)
import NotFound from '../views/NotFound.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/sobre', name: 'sobre', component: Sobre },
    { path: '/projetos', name: 'projetos', component: Projetos },
    { path: '/contato', name: 'contato', component: Contato },
    
    // 2. ROTA DE 404 (Sempre a última do Array!)
    // Esse palavrão '/:pathMatch(.*)*' é o jeito do Vue 4 dizer "qualquer outra coisa"
    { 
      path: '/:pathMatch(.*)*', 
      name: 'not-found', 
      component: NotFound 
    }
  ],
  // Opcional: Faz a página abrir sempre no topo quando mudar de rota
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router