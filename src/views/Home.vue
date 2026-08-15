<script setup>
import { computed } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { projetos } from '../data/projects.js' // Mantenha este caminho se o seu arquivo for projects.js mesmo!

useScrollReveal(0.1)

// ==========================================
// PROJETOS EM DESTAQUE (Lógica Automática)
// ==========================================
// Filtra apenas colheitas, ordena pela data mais recente e pega só as 2 primeiras
const projetosDestaque = computed(() => {
  return projetos
    .filter(proj => proj.estagio === 'colheita')
    .sort((a, b) => {
      // Se não tiver data, joga pro final da fila usando uma data antiga
      const dataA = a.data ? new Date(a.data) : new Date('2000-01-01')
      const dataB = b.data ? new Date(b.data) : new Date('2000-01-01')
      return dataB - dataA
    })
    .slice(0, 2)
})

// ==========================================
// LISTA DE BADGES (Habilidades)
// ==========================================
const badges = [
  { 
    nome: 'SQL', 
    icone: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/><path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>' 
  },
  { 
    nome: 'Figma', 
    icone: '<path d="M12 2a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5V2z"/><path d="M12 2a5 5 0 0 1 5 5 5 5 0 0 1-5 5"/>' 
  },
  { 
    nome: 'Git', 
    icone: '<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="12" r="2.5"/><path d="M6 8.5v7M8.2 6.8 15.8 10.8M8.2 17.2 15.8 13.2"/>' 
  }
]
</script>

<template>
  <section class="pagina-animada">
    
    <!-- ==========================================
         1. HERO SECTION
         ========================================== -->
    <div class="wrap hero reveal">
      <div class="hero-grid">
        
        <div class="hero-content">
          <div class="status-badge reveal reveal-delay-1">
            <span class="pulse"></span> 📍 Recife, PE · Disponível para projetos
          </div>
          
          <h1 class="reveal reveal-delay-1">Geovanna Melo</h1>
          
          <h2 class="role reveal reveal-delay-1">
            <span class="amp">Desenvolvedora de Software Júnior</span>
          </h2>

          <p class="desc reveal reveal-delay-2">
            Not your average software developer. Observo como cada parte de um sistema cresce — e principalmente onde ela quebra. Construo com <strong>Python, Java, JavaScript e Node.js</strong>, com uma queda declarada por <strong>QA</strong>, organização e um olhar estético que não desliga (e é por isso que <strong>UX/UI</strong> também mora aqui).
          </p>
          
          <div class="btn-row reveal reveal-delay-3">
            <RouterLink to="/projetos" class="btn primary">Ver projetos</RouterLink>
            <a href="/cv-geovanna-melo.pdf" download="CV_GeovannaMelo_Tech.pdf" target="_blank" class="btn ghost">Baixar currículo</a>
            <a href="https://github.com/gsfmelo" target="_blank" class="btn ghost github-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div class="hero-visual reveal reveal-delay-2">
          <div class="glass-card">
            <!-- Espaço para a sua foto (basta trocar o src depois) -->
            <img src="../assets/home.jpg" alt="Geovanna Melo" class="hero-photo float-anim" />
            <div class="floating-tag tag-1 mono">.py</div>
            <div class="floating-tag tag-2 mono">sql</div>
          </div>
        </div>

      </div>
    </div>

    <!-- ==========================================
         2. BADGES (Itens Coletados)
         ========================================== -->
    <div class="wrap badges reveal reveal-delay-2">
      <p class="eyebrow" style="color:#8A6A34;">itens coletados</p>
      
      <div class="badge-container">
        <!-- O Vue repete essa div para cada badge -->
        <div class="badge-item" v-for="badge in badges" :key="badge.nome">
          <svg class="badge-slot-icon" viewBox="0 0 24 24" fill="none" stroke="#C97B4A" stroke-width="1.8" v-html="badge.icone"></svg>
          <span>{{ badge.nome }}</span>
        </div>
        
        <!-- Slot vazio/adicionar -->
        <div class="badge-item empty">
          <svg class="badge-slot-icon" viewBox="0 0 24 24" fill="none" stroke="#B3C7AE" stroke-width="1.8">
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- ==========================================
         3. PROJETOS EM DESTAQUE
         ========================================== -->
    <div class="wrap featured-section reveal reveal-delay-2">
      <div class="section-header">
        <div>
          <p class="eyebrow">no canteiro</p>
          <h2>Colheitas Recentes</h2>
        </div>
        <RouterLink to="/projetos" class="link-more">Ver todos ↗</RouterLink>
      </div>

      <div class="featured-grid">
        <div v-for="projeto in projetosDestaque" :key="projeto.id" class="featured-card">
          <div class="card-header">
            <span class="proj-dot" :style="{ background: projeto.corDot }"></span>
            <span class="stage mono">{{ projeto.tagEstagio }}</span>
          </div>
          <h3>{{ projeto.titulo }}</h3>
          <p>{{ projeto.descricaoCurta }}</p>
          
          <div class="card-stack" v-if="projeto.stack">
            <span v-for="(tech, index) in projeto.stack.slice(0, 3)" :key="index" class="stack-tag">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ==========================================
         4. FOCO ATUAL / EXPERIÊNCIA
         ========================================== -->
    <div class="wrap experience-section reveal reveal-delay-3">
      <div class="exp-box">
        <div class="exp-left">
          <p class="eyebrow" style="color: var(--card);">foco de estudo & desenvolvimento</p>
          <h3>Engenharia de Software, com um olho em QA</h3>
          <p>
            Graduanda em Análise e Desenvolvimento de Sistemas (UNINTER), com trilha voltada a <strong>Engenharia de Software</strong> e TCC sobre <strong>QA</strong>. Sou organizada por natureza — isso vaza para como penso interface. Gosto de sistemas estruturados e de <strong>UX/UI</strong>: qualidade não é só "funcionar", é como algo se comporta e se apresenta pra quem usa.
          </p>
          <div class="exp-tags">
            <span class="exp-tag">Engenharia de Software</span>
            <span class="exp-tag">QA & Testes</span>
            <span class="exp-tag">UX/UI</span>
          </div>
        </div>
        
        <div class="exp-right">
          <ul class="mini-timeline">
            <li>
              <span class="year mono">2023-2026</span>
              <span class="event">Análise e Desenvolvimento de Sistemas (UNINTER)</span>
            </li>
            <li>
              <span class="year mono">2023</span>
              <span class="event">Desenvolvimento de Software com foco em Back-end (Cubos Academy)</span>
            </li>
            <li>
              <span class="year mono">2025</span>
              <span class="event">Hackathon: Produção de Conteúdo Inteligente Multiplataforma (Globo & Rec'N'Play)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
/* =========================================
   HERO E VISUAL
   ========================================= */
.hero { padding: 6rem 0 3rem; }
.hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; align-items: center; }

.status-badge {
  display: inline-flex; align-items: center; gap: 8px; background: rgba(124, 174, 114, 0.15); 
  border: 1px solid rgba(124, 174, 114, 0.3); padding: 6px 14px; border-radius: 20px;
  font-size: 13px; font-weight: 500; color: var(--green-3); margin-bottom: 24px;
}
.pulse { width: 8px; height: 8px; background: var(--green-2); border-radius: 50%; animation: pulsing 1.5s infinite; }
@keyframes pulsing { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(91, 138, 87, 0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(91, 138, 87, 0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(91, 138, 87, 0); } }

.hero-content h1 { font-size: 64px; font-weight: 700; margin: 0 0 8px; color: var(--text-dark); letter-spacing: -0.03em; line-height: 1; }
.amp { color: var(--terracota); font-family: 'Zilla Slab', serif; font-style: italic; font-size: 28px; }
.desc { font-size: 16.5px; line-height: 1.7; max-width: 540px; color: var(--text-body); margin: 16px 0 36px; }

/* Botões do Hero */
.btn-row { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
.github-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  background: transparent;
  color: var(--text-dark);
  border: 1.5px solid var(--border);
  border-radius: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}
.github-btn:hover {
  border-color: var(--green-2);
  color: var(--green-3);
  background: var(--card);
  transform: translateY(-2px);
}

.hero-visual { display: flex; justify-content: center; position: relative; }
.glass-card { 
  position: relative; width: 280px; height: 280px; 
  background: linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%); 
  backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.5); 
  border-radius: 50%; display: flex; align-items: center; justify-content: center; 
  box-shadow: 0 20px 40px rgba(36, 59, 41, 0.08); padding: 12px;
}
.hero-photo { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }

.float-anim { animation: float 6s ease-in-out infinite; }
@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }

.floating-tag { position: absolute; background: var(--card); border: 1px solid var(--border); border-radius: 6px; padding: 4px 10px; font-size: 11px; font-weight: 500; color: var(--terracota); box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
.tag-1 { top: 20%; left: -10%; animation: float 5s ease-in-out infinite alternate; }
.tag-2 { bottom: 25%; right: -5%; animation: float 7s ease-in-out infinite alternate-reverse; color: var(--green-2); }

/* =========================================
   BADGES (Itens Coletados)
   ========================================= */
.badges { padding: 1rem 0 3.5rem; }
.badge-container { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 12px; }
.badge-item { background: var(--card); border: 1.5px solid var(--amber); border-radius: 8px; width: 78px; height: 78px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; transition: transform 0.2s; }
.badge-item:hover { transform: translateY(-4px); }
.badge-item span { font-size: 11px; font-weight: 500; color: var(--text-muted); text-align: center; }
.badge-slot-icon { width: 22px; height: 22px; }
.badge-item.empty { border: 1.5px dashed var(--border-soft); background: transparent; box-shadow: none; }

/* =========================================
   PROJETOS EM DESTAQUE
   ========================================= */
.featured-section { padding: 2rem 0 4rem; }
.section-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem; border-bottom: 1px solid var(--border-soft); padding-bottom: 1rem; }
.section-header h2 { font-size: 28px; font-weight: 600; color: var(--text-dark); margin: 0; }
.link-more { font-family: 'Fredoka', sans-serif; font-size: 14px; color: var(--terracota); text-decoration: none; font-weight: 500; transition: 0.2s; }
.link-more:hover { color: var(--text-dark); }

.featured-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.featured-card { 
  background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 2rem; 
  box-shadow: 0 4px 12px rgba(0,0,0,0.02); transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.featured-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(36, 59, 41, 0.06); }
.card-header { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
.proj-dot { width: 12px; height: 12px; border-radius: 50%; }
.stage { font-size: 12px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; }
.featured-card h3 { font-size: 22px; margin: 0 0 8px; color: var(--text-dark); }
.featured-card p { font-size: 14px; color: var(--text-body); line-height: 1.6; margin: 0 0 20px; }
.card-stack { display: flex; gap: 8px; flex-wrap: wrap; }
.stack-tag { background: var(--panel-green); color: var(--green-3); font-family: 'JetBrains Mono', monospace; font-size: 11px; padding: 4px 10px; border-radius: 4px; }

/* =========================================
   FOCO ATUAL / EXPERIÊNCIA
   ========================================= */
.experience-section { padding: 0 0 5rem; }
.exp-box { 
  background: var(--panel-green); border-radius: 20px; padding: 3rem 4rem; 
  display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;
  background-image: linear-gradient(135deg, var(--green-2) 0%, var(--green-3) 100%);
  color: var(--card);
}
.exp-left h3 { font-size: 28px; font-weight: 600; margin: 0 0 1rem; color: var(--card); }
.exp-left p { font-size: 15px; line-height: 1.7; color: rgba(255,255,255,0.85); margin: 0; }
.exp-left strong { color: var(--amber); }

.exp-tags { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 2rem; }
.exp-tag {
  font-family: 'JetBrains Mono', monospace; font-size: 12px; padding: 6px 14px; border-radius: 20px;
  background: rgba(217, 164, 65, 0.15); color: var(--amber); border: 1px solid rgba(217, 164, 65, 0.3);
  font-weight: 500; letter-spacing: 0.5px; transition: all 0.3s ease;
}
.exp-tag:hover { background: rgba(217, 164, 65, 0.25); transform: translateY(-2px); }

.mini-timeline { list-style: none; padding: 0; margin: 0; border-left: 1px solid rgba(255,255,255,0.2); padding-left: 20px; }
.mini-timeline li { position: relative; margin-bottom: 20px; }
.mini-timeline li:last-child { margin-bottom: 0; }
.mini-timeline li::before { content: ''; position: absolute; left: -25px; top: 6px; width: 8px; height: 8px; background: var(--amber); border-radius: 50%; }
.year { display: block; font-size: 12px; color: rgba(255,255,255,0.6); margin-bottom: 4px; }
.event { font-size: 15px; font-weight: 500; }

/* =========================================
   RESPONSIVIDADE (MOBILE)
   ========================================= */
/* =========================================
   RESPONSIVIDADE (MOBILE)
   ========================================= */
@media (max-width: 900px) { 
  /* O respiro lateral que faltava! */
  .wrap { 
    padding-left: 1.5rem; 
    padding-right: 1.5rem; 
  }

  .hero-grid { grid-template-columns: 1fr; text-align: center; gap: 30px; } 
  .hero-content h1 { font-size: 52px; }
  .status-badge, .desc { margin: 0 auto 24px; } 
  
  .btn-row { justify-content: center; flex-direction: column; width: 100%; } 
  .btn-row .btn, .btn-row .github-btn { width: 100%; justify-content: center; }
  
  .featured-grid { grid-template-columns: 1fr; }
  .exp-box { grid-template-columns: 1fr; padding: 2.5rem; }
}
</style>