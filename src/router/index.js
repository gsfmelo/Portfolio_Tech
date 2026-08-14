import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'
import Projects from '../views/Projects.vue'
import Contato from '../views/Contato.vue'
import NotFound from '../views/NotFound.vue' // <--- Nova importação

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/sobre', name: 'sobre', component: Sobre },
    { path: '/projetos', name: 'projetos', component: Projects },
    { path: '/contato', name: 'contato', component: Contato },
    // Esta rota captura qualquer URL não identificada e joga para o 404
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
  ]
})

export default router