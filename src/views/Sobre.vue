<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal(0.15)

// Variáveis reativas que controlam o SVG da plantinha
const stemHeight = ref(10)
const leafOpacity1 = ref(0)
const leafOpacity2 = ref(0)
const flowerScale = ref(0)
const stemColor = ref('#7CAE72')

// Referência para sabermos onde a linha do tempo está na tela
const timelineContainer = ref(null)

const handleScroll = () => {
  if (!timelineContainer.value) return
  
  const rect = timelineContainer.value.getBoundingClientRect()
  const windowHeight = window.innerHeight
  
  const progress = Math.min(1, Math.max(0, (windowHeight * 0.7 - rect.top) / rect.height))
  
  stemHeight.value = 10 + progress * 34
  leafOpacity1.value = Math.min(1, progress / 0.4)
  leafOpacity2.value = Math.min(1, Math.max(0, (progress - 0.3) / 0.4))
  flowerScale.value = Math.max(0, (progress - 0.7) / 0.3)
  stemColor.value = progress < 0.35 ? '#7CAE72' : (progress < 0.7 ? '#5B8A57' : '#3E5C3A')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="pagina-animada pagina-sobre">
    
    <!-- ==========================================
         HERO SOBRE (Visual Editorial Cuidando das Coisas)
         ========================================== -->
    <div class="wrap" style="padding-top: 4rem;">
      <div class="hero-box">
        
        <!-- Fundo de pontos/sementes -->
        <svg class="hero-bg-dots" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <circle cx="80" cy="120" r="2" fill="#C97B4A"/>
          <circle cx="920" cy="80" r="2" fill="#7CAE72"/>
          <circle cx="960" cy="300" r="2" fill="#D9A441"/>
          <circle cx="60" cy="450" r="2" fill="#7CAE72"/>
          <circle cx="940" cy="600" r="2" fill="#C97B4A"/>
          <circle cx="40" cy="700" r="2" fill="#D9A441"/>
        </svg>

        <div class="hero-content">
          <div class="eyebrow-container">
            <svg width="26" height="26" viewBox="0 0 26 26">
              <line x1="13" y1="24" x2="13" y2="10" stroke="#5B8A57" stroke-width="2.5" stroke-linecap="round"/>
              <circle cx="13" cy="6" r="6" fill="#7CAE72"/>
            </svg>
            <p class="eyebrow-text mono">diário de cultivo</p>
          </div>

          <h1 class="title-gigante">Cuidando de como as coisas crescem</h1>

          <div class="sobre-grid">
            <!-- Esquerda: Textos e Tags -->
            <div class="sobre-texto">
              <p>Sou Geovanna Melo, estudante de Análise e Desenvolvimento de Sistemas com trilha em Engenharia de Software. Tem gente que ama escrever código do zero — eu amo descobrir onde ele vai <span class="destaque terracota">quebrar</span>.</p>
              <p>Enquanto muitos focam só em plantar (escrever), eu me interesso em entender como cada parte se comporta de verdade: se funciona bem, se aguenta o tranco, se faz sentido pra quem usa.</p>
              <p>Estou constantemente testando os limites da <span class="destaque verde">tecnologia</span>, da <span class="destaque ambar">IA</span>, da criatividade e os meus.</p>
              
              <div class="hero-tags">
                <span class="h-tag">qa</span>
                <span class="h-tag">ux/ui</span>
                <span class="h-tag">curiosa</span>
                <span class="h-tag">organizada</span>
              </div>
            </div>

            <!-- Direita: Citação Destacada -->
            <div class="sobre-destaque">
              <div class="quote-box">
                <p>"Sou a profissional que pergunta 'mas por quê', cutuca até entender — e ainda acha isso divertido."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ==========================================
         CONTEÚDO PRINCIPAL (Linha do Tempo & Bento)
         ========================================== -->
    <div class="wrap content-sections" ref="timelineContainer" style="margin-top: 4rem;">
      
      <!-- A Plantinha Companheira -->
      <div class="companion-plant">
        <svg viewBox="0 0 60 80" width="100%" height="100%">
          <rect x="18" y="60" width="24" height="16" rx="3" fill="#C97B4A"/>
          <g transform="translate(30,60)">
            <line x1="0" y1="0" x2="0" :y2="-stemHeight" :stroke="stemColor" stroke-width="3" stroke-linecap="round"/>
            <circle cx="-6" :cy="-stemHeight*0.5" r="5" fill="#7CAE72" :opacity="leafOpacity1"/>
            <circle cx="6" :cy="-stemHeight*0.7" r="5" fill="#7CAE72" :opacity="leafOpacity2"/>
            <circle cx="0" :cy="-stemHeight" :r="6 + flowerScale*7" :fill="flowerScale > 0.05 ? '#D9A441' : '#5B8A57'"/>
          </g>
        </svg>
      </div>

      <!-- Linha do Tempo -->
      <div class="timeline reveal reveal-delay-1">
        <div class="t-item">
          <span class="t-dot" style="border-color:#C97B4A;"></span>
          <p class="stage" style="color:#C97B4A;">raiz</p>
          <p class="title">Antes de tudo</p>
          <p class="body">Bacharel em Cinema e Audiovisual pela UFPE. Onde aprendi a prestar atenção aos detalhes e a construir narrativas que conectam com o público. Algo que se conecta com a forma que trabalho em qualquer tipo de projeto.</p>
        </div>
        <div class="t-item">
          <span class="t-dot" style="border-color:#7CAE72;"></span>
          <p class="stage" style="color:#5B8A57;">broto</p>
          <p class="title">A virada</p>
          <p class="body">Em algum momento, ficou claro que a tecnologia era algo muito presente na minha vida e que merecia um foco principal, não só um apoio. Ainda sem saber o que queria fazer, explorei ideias até decidir seguir pela área de desenvolvimento.</p>
        </div>
        <div class="t-item">
          <span class="t-dot" style="border-color:#5B8A57;"></span>
          <p class="stage" style="color:#3E5C3A;">planta</p>
          <p class="title">Onde descobri meu tipo</p>
          <p class="body">Sabendo que não consigo fazer nada de maneira casual, iniciei o Tecnólogo em Análise e Desenvolvimento de Sistemas pela UNINTER, outra graduação para o meu repertório. Segui uma trilha de Engenharia de Software, onde meu trabalho final foi focado em QA.</p>
        </div>
        <div class="t-item">
          <span class="t-dot" style="border-color:#5B8A57;"></span>
          <p class="stage" style="color:#3E5C3A;">colheitas</p>
          <p class="title">Formação contínua & experiências</p>
          <p class="body">Curso de Desenvolvimento de Software Back-End pela Cubos Academy, cursos livres sobre SQL, Figma e Git. Participei de um Hackathon da Globo que me desafiou a aplicar meus conhecimentos em um ambiente real. Por fim, uma atividade extensionista ao qual elaborei vídeos tutoriais ensinando ferramentas Google de maneira acessível para idosos e iniciantes.</p>
        </div>
      </div>

      <!-- Bento Grid (Habilidades e Background) -->
      <div class="bento-grid reveal reveal-delay-2">
        <div class="bento-box tools">
          <p class="eyebrow">arsenal</p>
          <h3>Ferramentas & Tecnologias</h3>
          <div class="tags-container">
            <span class="tag">Python</span><span class="tag">JavaScript</span><span class="tag">Java</span>
            <span class="tag">HTML</span><span class="tag">CSS</span><span class="tag">React</span>
            <span class="tag">Node.js</span><span class="tag">Express.js</span><span class="tag">SQL</span>
            <span class="tag">PostgreSQL</span><span class="tag">MySQL</span><span class="tag">REST API</span>
            <span class="tag">Git</span><span class="tag">GitHub</span><span class="tag">Figma</span>
            <span class="tag">Next.js</span><span class="tag">OpenCV</span><span class="tag">FFmpeg</span>
          </div>
        </div>
        
        <div class="bento-box method">
          <p class="eyebrow">como trabalho</p>
          <h3>Processos & Metodologias</h3>
          <ul class="clean-list">
            <li><strong>Testes com intenção:</strong> Interesse ativo em QA, gosto de testar com propósito, entendendo como o sistema funciona.</li>
            <li><strong>Metodologias Ágeis:</strong> Familiaridade com o ritmo de sprints, entregas curtas e ajustes constantes.</li>
            <li><strong>Gestão de Projetos:</strong> Experiência prévia lidando com prazos curtos e situações de pressão.</li>
          </ul>
        </div>
        
        <div class="bento-box courses">
          <p class="eyebrow">certificações & cursos</p>
          <h3>Formação Contínua</h3>
          <ul class="timeline-list">
            <li><span>2023</span> <strong>Desenvolvimento de Software com foco em Back-End</strong> (Cubos Academy)</li>
            <li><span>2023</span> <strong>Workshop: Seu primeiro portfólio como DEV!</strong> (EBAC)</li>
            <li><span>2023</span> <strong>Jornada para o Futuro - 5 Soft Skills da Imersão Tech</strong> (Cia de Talentos)</li>
            <li><span>2024</span> <strong>Trilha de Git e Fluxo de Trabalho em Equipe</strong> (Cubos Academy)</li>
            <li><span>2025</span> <strong>Trilha de SQL</strong> (Cubos Academy)</li>
            <li><span>2025</span> <strong>Figma</strong> (Cubos Academy)</li>
          </ul>
        </div>
        
        <div class="bento-box personal">
          <p class="eyebrow">além do código</p>
          <h3>Background & Idiomas</h3>
          <p class="small-text">Baseada em <strong>Recife, PE</strong>. Fora dos terminais, sou uma cinéfila incurável, apaixonada por cinema italiano e New Hollywood. Não sou bem gamer, mas sou viciada em jogos de simulação (Stardew Valley hoje, The Sims 4 durante <strong>anos</strong>). Sou uma pessoa curiosa por natureza, gosto de me aventurar e aprender coisas novas sempre que posso.</p>
          <div class="tags-container" style="margin-bottom: 1.8rem;">
            <span class="tag">Organizada</span>
            <span class="tag">Curiosa</span>
            <span class="tag">Determinada</span>
          </div>
          <div class="languages">
            <div class="lang-item"><span class="lang-name">Português</span><span class="lang-level">Nativo</span></div>
            <div class="lang-item"><span class="lang-name">Inglês</span><span class="lang-level">Fluente</span></div>
            <div class="lang-item"><span class="lang-name">Espanhol</span><span class="lang-level">Básico</span></div>
            <div class="lang-item"><span class="lang-name">Francês</span><span class="lang-level">Básico</span></div>
            <div class="lang-item"><span class="lang-name">Italiano</span><span class="lang-level">Básico</span></div>
          </div>
        </div>
      </div>

      <!-- Ponte para o Portfólio de Audiovisual -->
      <div class="script-bridge reveal reveal-delay-3">
        <div class="paper-texture">
          <div class="slugline">INT. ESTUFA DIGITAL - DIA</div>
          <div class="action">Um emaranhado de cabos e plantas. No centro, uma tela de terminal exibe linhas de código verdes. GEOVANNA ajusta o foco de uma lente solta na mesa e se vira para a câmera.</div>
          <div class="character">GEOVANNA</div>
          <div class="parenthetical">(sorrindo)</div>
          <div class="dialogue">A cena principal agora é essa: tech. Mas tem um corte anterior, onde eu dirigia de verdade. Bastidores aqui.</div>
          <div class="action-center">
            <a href="https://portfolio-audiovisual-ten.vercel.app/" target="_blank" class="btn ghost">ACESSAR PORTFÓLIO AV ↗</a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* =========================================
   ESTRUTURA GERAL DA PÁGINA
   ========================================= */
.content-sections { position: relative; padding-bottom: 4rem; }

/* =========================================
   NOVO HERO EDITORIAL (BASEADO NO MOCKUP)
   ========================================= */
.hero-box {
  font-family: 'Fredoka', sans-serif;
  background: var(--card); /* #F3F0E4 ou a cor da sua variável card */
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 3.5rem;
  color: var(--text-dark);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.02);
}

.hero-bg-dots {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.eyebrow-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.eyebrow-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  letter-spacing: 1px;
  color: var(--green-3);
  margin: 0;
  text-transform: uppercase;
}

.title-gigante {
  font-size: 42px;
  font-weight: 700;
  margin: 0 0 2rem;
  color: var(--text-dark);
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.sobre-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 3rem;
  align-items: start;
}

.sobre-texto p {
  font-size: 16px;
  line-height: 1.75;
  margin: 0 0 1.2rem;
  color: var(--text-body);
}

.destaque { font-weight: 600; }
.destaque.terracota { color: var(--terracota); }
.destaque.verde { color: var(--green-3); }
.destaque.ambar { color: var(--amber); }

.hero-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.h-tag {
  background: var(--bg);
  border: 1px solid #C4D6C0;
  border-radius: 20px;
  padding: 6px 14px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--green-3);
}

.quote-box {
  background: #E8EEE6; /* Fundo esverdeado suave do mockup */
  border-left: 4px solid var(--amber);
  border-radius: 12px;
  padding: 1.8rem 1.8rem 1.8rem 2rem;
  margin-top: 1rem;
}

.quote-box p {
  font-family: 'Georgia', serif;
  font-style: italic;
  font-size: 20px;
  line-height: 1.5;
  margin: 0;
  color: #33513A;
}

@media (max-width: 900px) {
  .hero-box { padding: 2.5rem; }
  .title-gigante { font-size: 32px; }
  .sobre-grid { grid-template-columns: 1fr; gap: 2rem; }
  .quote-box { margin-top: 0; }
}

/* =========================================
   A PLANTINHA COMPANHEIRA DE SCROLL
   ========================================= */
.companion-plant {
  position: sticky;
  top: 180px; 
  float: right; 
  margin-right: -40px; 
  width: 90px;
  height: 110px;
  z-index: 10;
}

/* =========================================
   LINHA DO TEMPO
   ========================================= */
.timeline { position: relative; padding-left: 32px; margin-left: 8px; margin-bottom: 4rem; }
.timeline::before { 
  content: ''; position: absolute; top: 6px; bottom: 0; left: 0; width: 2px; 
  background: linear-gradient(to bottom, var(--terracota) 0%, var(--green-1) 50%, var(--green-2) 100%); 
  opacity: 0.4; 
}
.t-item { position: relative; margin-bottom: 16px; padding: 1rem 1.2rem; border-radius: 12px; transition: all 0.3s ease; border: 1px solid transparent; width: 85%; }
.t-item:last-child { margin-bottom: 0; }
.t-item:hover { background: var(--card); border-color: var(--border); box-shadow: 0 10px 30px rgba(36, 59, 41, 0.04); transform: translateX(4px); }
.t-dot { position: absolute; left: -39px; top: 1.4rem; width: 14px; height: 14px; border-radius: 50%; background: var(--bg); border: 3px solid; transition: transform 0.3s ease; }
.t-item:hover .t-dot { transform: scale(1.3); }
.t-item .stage { font-family: 'JetBrains Mono', monospace; font-size: 11px; margin: 0 0 4px; text-transform: uppercase; }
.t-item .title { font-size: 17px; font-weight: 600; margin: 0 0 6px; color: var(--text-dark); }
.t-item .body { font-size: 14px; color: var(--text-muted); margin: 0; line-height: 1.5; }

@media (max-width: 720px) { 
  .t-item { padding: 1.5rem 0 1.5rem 1rem; width: 100%; } 
  .t-dot { left: -32px; } 
  .companion-plant { display: none; } 
}

/* =========================================
   BENTO GRID (Habilidades e Infos)
   ========================================= */
.bento-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 6rem; clear: both; }
.bento-box { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 2rem; transition: transform 0.3s ease, box-shadow 0.3s ease; }
.bento-box:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(36, 59, 41, 0.06); }
.bento-box h3 { font-size: 20px; font-weight: 600; margin: 0 0 1.2rem; color: var(--text-dark); }
.bento-box .eyebrow { margin-bottom: 6px; }

.tags-container { display: flex; flex-wrap: wrap; gap: 8px; }
.tag { background: var(--panel-green); color: var(--green-3); font-size: 13px; font-family: 'JetBrains Mono', monospace; padding: 6px 12px; border-radius: 6px; }

.clean-list, .timeline-list { list-style: none; padding: 0; margin: 0; }
.clean-list li { font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 12px; padding-left: 20px; position: relative; }
.clean-list li::before { content: '•'; position: absolute; left: 0; color: var(--terracota); font-size: 18px; line-height: 1; top: 0; }

.timeline-list { border-left: 2px solid var(--border-soft); padding-left: 16px; }
.timeline-list li { position: relative; font-size: 14px; color: var(--text-dark); margin-bottom: 14px; }
.timeline-list li::before { content: ''; position: absolute; left: -21px; top: 6px; width: 8px; height: 8px; background: var(--amber); border-radius: 50%; }
.timeline-list li span { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--green-2); margin-right: 8px; }

.small-text { font-size: 14px; color: var(--text-muted); line-height: 1.6; margin: 0 0 1.5rem; }

.languages { display: flex; flex-wrap: wrap; gap: 20px; }
.lang-item { display: flex; flex-direction: column; }
.lang-name { font-weight: 500; font-size: 15px; color: var(--text-dark); }
.lang-level { font-size: 13px; color: var(--text-muted); }

@media (max-width: 850px) { .bento-grid { grid-template-columns: 1fr; } }

/* =========================================
   PONTE DO ROTEIRO (LINK AUDIOVISUAL)
   ========================================= */
.script-bridge { clear: both; width: 100%; perspective: 1000px; display: flex; justify-content: center; margin-top: 2rem; margin-bottom: 2rem; }
.paper-texture { 
  background: #FCFBF7; border: 1px solid #EBE9DF; border-radius: 2px; 
  padding: 1.5rem 3rem; font-family: 'Courier Prime', 'Courier New', Courier, monospace; 
  font-size: 15px; line-height: 1.3; color: #2D2D2D; width: 100%; max-width: 900px; 
  box-shadow: -2px 4px 16px rgba(0,0,0,0.03), 0 12px 24px rgba(0,0,0,0.02); 
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
}
.paper-texture:hover { transform: translateY(-2px) rotateX(1deg); box-shadow: -4px 8px 20px rgba(0,0,0,0.04), 0 16px 32px rgba(0,0,0,0.03); }

.slugline { font-weight: bold; text-transform: uppercase; margin-bottom: 0.8rem; }
.action { margin-bottom: 0.8rem; text-align: justify; }
.character { text-align: left; font-weight: bold; margin-left: 35%; margin-bottom: 0; }
.parenthetical { text-align: left; margin-left: 30%; margin-bottom: 0; font-style: italic; }
.dialogue { text-align: left; margin-left: 15%; width: 70%; margin-bottom: 1rem; }
.action-center { display: flex; justify-content: center; margin-top: 1rem; }

@media (max-width: 780px) { 
  .paper-texture { padding: 1.5rem 1.5rem; } 
  .character, .parenthetical, .dialogue { margin-left: 0; width: 100%; text-align: left; } 
}
</style>