<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal(0.15)
</script>

<template>
  <section class="pagina-animada pagina-sobre">
    <!-- O HTML CONTINUA EXATAMENTE O MESMO -->
    <div class="wrap about-hero reveal">
      <p class="eyebrow">A origem do código</p>
      <h1>De diretora a desenvolvedora.</h1>
      <div class="hero-content-split">
        <div class="main-text">
          <p class="lead">Sou uma desenvolvedora e engenheira de dados em formação, construindo código com a mesma precisão sistêmica que exige a direção de um set de filmagem.</p>
          <p class="body-text">Com raízes consolidadas no Cinema e Audiovisual, passei anos orquestrando orçamentos, cronogramas rígidos e equipes em projetos reais, como a direção do curta <em>Quando o Telefone Tocar</em>. Aprendi na prática que uma boa entrega depende de uma arquitetura invisível e muito bem estruturada.</p>
          <p class="body-text">Hoje, aplico essa mesma visão na tecnologia. Meu foco é desenhar pipelines de dados eficientes, automações e ferramentas de PAM (Production Asset Management) que resolvem problemas concretos. Da estruturação lógica no terminal à arquitetura em nuvem, acredito que todo sistema bem desenhado conta uma boa história.</p>
        </div>
        <div class="highlight-quote">
          <blockquote>"Orquestrando dados e automações com a mesma visão macro de quem dirige um set de filmagem."</blockquote>
        </div>
      </div>
    </div>

    <div class="wrap content-sections">
      <div class="timeline reveal reveal-delay-1">
        <div class="t-item">
          <span class="t-dot" style="border-color:#C97B4A;"></span>
          <p class="stage" style="color:#C97B4A;">raiz</p>
          <p class="title">A Base Acadêmica (UFPE)</p>
          <p class="body">Bacharel em Cinema e Audiovisual. Uma passagem focada em pesquisa, integração e metodologias de projeto. Uso esse alicerce até hoje para estruturar problemas complexos.</p>
        </div>
        <div class="t-item">
          <span class="t-dot" style="border-color:#7CAE72;"></span>
          <p class="stage" style="color:#5B8A57;">broto</p>
          <p class="title">Primeiros passos em tech</p>
          <p class="body">Linux, bancos de dados SQL e fundamentos de nuvem. A participação em bootcamps estruturou a infraestrutura básica do meu conhecimento lógico e arquitetural.</p>
        </div>
        <div class="t-item">
          <span class="t-dot" style="border-color:#5B8A57;"></span>
          <p class="stage" style="color:#3E5C3A;">planta</p>
          <p class="title">ADS (UNINTER) + Engenharia de Dados</p>
          <p class="body">Formação técnica focada na otimização de processos. Imersão em testes de software (BDD, Unitários e Integração) e arquitetura de dados, entendendo o fluxo da informação de ponta a ponta.</p>
        </div>
      </div>

      <div class="bento-grid reveal reveal-delay-2">
        <div class="bento-box tools">
          <p class="eyebrow">arsenal</p>
          <h3>Ferramentas & Tecnologias</h3>
          <div class="tags-container">
            <span class="tag">Python</span><span class="tag">SQL & NoSQL</span><span class="tag">Apache Kafka</span>
            <span class="tag">Apache Flume</span><span class="tag">Spark SQL</span><span class="tag">MoviePy & OpenCV</span>
            <span class="tag">FFmpeg</span><span class="tag">Git</span><span class="tag">Figma</span><span class="tag">AWS Academy</span>
          </div>
        </div>
        <div class="bento-box method">
          <p class="eyebrow">como trabalho</p>
          <h3>Processos & Metodologias</h3>
          <ul class="clean-list">
            <li><strong>Testes Estruturados:</strong> Cultura de testes unitários e BDD.</li>
            <li><strong>Automação de Mídia:</strong> Visão voltada para PAM (Production Asset Management).</li>
            <li><strong>Gestão de Projetos:</strong> Base sólida na administração sob pressão.</li>
          </ul>
        </div>
        <div class="bento-box courses">
          <p class="eyebrow">adubação constante</p>
          <h3>Cursos & Bootcamps</h3>
          <ul class="timeline-list">
            <li><span>2026</span> EY Empodera & Academia SAP ABAP</li>
            <li><span>2026</span> Women in Cloud (AWS Academy)</li>
            <li><span>2025</span> Decola Tech Avanade</li>
          </ul>
        </div>
        <div class="bento-box personal">
          <p class="eyebrow">além do código</p>
          <h3>Background & Idiomas</h3>
          <p class="small-text">Baseada em <strong>Olinda, PE</strong>. Fora dos terminais, invisto em teoria do cinema, filosofia estoica e desenho.</p>
          <div class="languages">
            <div class="lang-item"><span class="lang-name">Português</span><span class="lang-level">Nativo</span></div>
            <div class="lang-item"><span class="lang-name">Inglês</span><span class="lang-level">Avançado</span></div>
          </div>
        </div>
      </div>

      <div class="script-bridge reveal reveal-delay-3">
        <div class="paper-texture">
          <div class="slugline">INT. ESTUFA DIGITAL - DIA</div>
          <div class="action">Um emaranhado de cabos e plantas. No centro, uma tela de terminal exibe linhas de código verdes. GEOVANNA ajusta o foco de uma lente solta na mesa e se vira para a câmera.</div>
          <div class="character">GEOVANNA</div>
          <div class="parenthetical">(sorrindo)</div>
          <div class="dialogue">A base dessa cena já está montada. Mas se alguém quiser dar uma olhada nos meus roteiros e direções passadas... é só olhar no rolo de filme.</div>
          <div class="action-center">
            <a href="https://portfolio-audiovisual-ten.vercel.app/" target="_blank" class="btn ghost">ACESSAR PORTFÓLIO AV ↗</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-hero { padding: 6rem 0 4rem; border-bottom: 1px solid var(--border); margin-bottom: 4rem; }
.about-hero h1 { font-size: 52px; font-weight: 700; margin: 0 0 2rem; letter-spacing: -0.03em; color: var(--text-dark); line-height: 1.1; }
.hero-content-split { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; align-items: start; }
.main-text .lead { font-size: 20px; font-weight: 500; color: var(--green-3); line-height: 1.6; margin-bottom: 1.5rem; letter-spacing: -0.01em; }
.main-text .body-text { font-size: 16px; line-height: 1.75; color: var(--text-body); margin-bottom: 1.2rem; }
.highlight-quote { position: relative; padding: 2.5rem; background: var(--panel-green); border-radius: 16px; border-left: 4px solid var(--amber); }
.highlight-quote::before { content: '"'; position: absolute; top: 10px; left: 15px; font-size: 80px; font-family: 'Zilla Slab', serif; color: rgba(217, 164, 65, 0.2); line-height: 1; }
.highlight-quote blockquote { margin: 0; font-size: 24px; font-family: 'Zilla Slab', serif; font-style: italic; font-weight: 600; line-height: 1.4; color: var(--text-dark); position: relative; z-index: 1; }

.content-sections { padding-bottom: 4rem; }
.timeline { position: relative; padding-left: 36px; margin-left: 8px; margin-bottom: 6rem; }
.timeline::before { content: ''; position: absolute; top: 6px; bottom: 0; left: 0; width: 2px; background: linear-gradient(to bottom, var(--terracota) 0%, var(--green-1) 50%, var(--green-2) 100%); opacity: 0.4; }
.t-item { position: relative; margin-bottom: 40px; padding: 1.5rem; border-radius: 12px; transition: all 0.3s ease; border: 1px solid transparent; }
.t-item:last-child { margin-bottom: 0; }
.t-item:hover { background: var(--card); border-color: var(--border); box-shadow: 0 10px 30px rgba(36, 59, 41, 0.04); transform: translateX(4px); }
.t-dot { position: absolute; left: -44px; top: 1.8rem; width: 14px; height: 14px; border-radius: 50%; background: var(--bg); border: 3px solid; transition: transform 0.3s ease; }
.t-item:hover .t-dot { transform: scale(1.3); }
.t-item .stage { font-family: 'JetBrains Mono', monospace; font-size: 12px; margin: 0 0 6px; text-transform: uppercase; }
.t-item .title { font-size: 18px; font-weight: 500; margin: 0 0 8px; color: var(--text-dark); }
.t-item .body { font-size: 14px; color: var(--text-muted); margin: 0; max-width: 500px; line-height: 1.7; }

.bento-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 6rem; }
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
.languages { display: flex; gap: 20px; }
.lang-item { display: flex; flex-direction: column; }
.lang-name { font-weight: 500; font-size: 15px; color: var(--text-dark); }
.lang-level { font-size: 13px; color: var(--text-muted); }

.script-bridge { perspective: 1000px; display: flex; justify-content: center; margin-bottom: 2rem; }
.paper-texture { background: #FCFBF7; border: 1px solid #EBE9DF; border-radius: 2px; padding: 4rem 5rem; font-family: 'Courier Prime', 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.4; color: #2D2D2D; width: 100%; max-width: 720px; box-shadow: -2px 4px 16px rgba(0,0,0,0.03), 0 12px 24px rgba(0,0,0,0.02); transition: transform 0.3s ease, box-shadow 0.3s ease; }
.paper-texture:hover { transform: translateY(-2px) rotateX(1deg); box-shadow: -4px 8px 20px rgba(0,0,0,0.04), 0 16px 32px rgba(0,0,0,0.03); }
.slugline { font-weight: bold; text-transform: uppercase; margin-bottom: 1.5rem; }
.action { margin-bottom: 1.5rem; text-align: justify; }
.character { text-align: left; font-weight: bold; margin-left: 35%; margin-bottom: 0; }
.parenthetical { text-align: left; margin-left: 30%; margin-bottom: 0; font-style: italic; }
.dialogue { text-align: left; margin-left: 20%; width: 60%; margin-bottom: 2rem; }
.action-center { display: flex; justify-content: center; margin-top: 2rem; }

@media (max-width: 950px) { .hero-content-split { grid-template-columns: 1fr; gap: 40px; } }
@media (max-width: 850px) { .bento-grid { grid-template-columns: 1fr; } }
@media (max-width: 720px) { .paper-texture { padding: 2.5rem 1.5rem; } .character, .parenthetical, .dialogue { margin-left: 0; width: 100%; text-align: left; } .t-item { padding: 1.5rem 0 1.5rem 1rem; } .t-dot { left: -32px; } }
</style>