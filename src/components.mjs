import {
  audience,
  classQuestions,
  discoveries,
  faqs,
  materials,
  methodSteps,
  notFor
} from './content.mjs';

const html = (...parts) => parts.flat().join('');

const externalAttributes = (href) => href.startsWith('http')
  ? ' target="_blank" rel="noopener noreferrer"'
  : '';

const linkButton = (href, label, kind = 'primary') => html(
  '<a class="button button-', kind, '" href="', href, '"', externalAttributes(href), '>',
  '<span>', label, '</span>',
  '<span class="button-icon" aria-hidden="true">↗</span>',
  '</a>'
);

const sectionIntro = (eyebrow, title, text = '') => html(
  '<div class="section-intro">',
  '<p class="eyebrow">', eyebrow, '</p>',
  '<h2>', title, '</h2>',
  text ? '<p class="section-lead">' + text + '</p>' : '',
  '</div>'
);

const checkList = (items, className = '') => html(
  '<ul class="check-list ', className, '">',
  items.map((item) => html(
    '<li><span class="check-mark" aria-hidden="true">✓</span><span>', item, '</span></li>'
  )).join(''),
  '</ul>'
);

const renderHeader = () => html(
  '<header class="site-header">',
  '<div class="container header-inner">',
  '<a class="brand" href="#inicio" aria-label="Rebeca Nascimento, início">',
  '<span class="brand-mark" aria-hidden="true">RN</span>',
  '<span class="brand-copy"><strong>Rebeca Nascimento</strong><small>Planejamento Patrimonial</small></span>',
  '</a>',
  '<nav class="main-nav" aria-label="Navegação principal">',
  '<a href="#clareza">Clareza</a>',
  '<a href="#metodo">Método</a>',
  '<a href="#palestra">A palestra</a>',
  '<a href="#rebeca">Rebeca</a>',
  '</nav>',
  '<a class="header-cta" href="#oferta">Quero participar</a>',
  '</div>',
  '</header>'
);

const renderHero = (hero) => html(
  '<main>',
  '<section class="hero" id="inicio">',
  '<div class="hero-glow" aria-hidden="true"></div>',
  '<div class="container hero-grid">',
  '<div class="hero-copy">',
  '<p class="eyebrow eyebrow-light">', hero.eyebrow, '</p>',
  '<h1>', hero.title, '</h1>',
  '<p class="hero-text">', hero.text, '</p>',
  linkButton('#oferta', hero.cta),
  '<p class="microcopy">Encontro ao vivo. Aproximadamente 1 hora. Materiais de apoio incluídos.</p>',
  '</div>',
  '<div class="hero-visual">',
  '<div class="hero-frame">',
  '<img src="/images/rebeca-hero.png" alt="Rebeca Nascimento em retrato profissional" width="941" height="1672" loading="eager" decoding="async">',
  '<div class="hero-badge"><span>Ao vivo</span><strong>Legado Protegido</strong></div>',
  '</div>',
  '<p class="hero-signature">Rebeca Nascimento <span>WS Planner</span></p>',
  '</div>',
  '</div>',
  '</section>',
  '<div class="facts-bar" aria-label="Informações da palestra">',
  '<div class="container facts-grid">',
  '<p><span>01</span><strong>Aula ao vivo</strong></p>',
  '<p><span>02</span><strong>Cerca de 1 hora</strong></p>',
  '<p><span>03</span><strong>3 materiais de apoio</strong></p>',
  '<p><span>04</span><strong>Investimento de R$ 29,90</strong></p>',
  '</div>',
  '</div>'
);

const renderTransformation = () => html(
  '<section class="section transformation" id="clareza">',
  '<div class="container transformation-grid">',
  '<div class="statement">',
  '<p class="eyebrow">A pergunta que quase ninguém faz</p>',
  '<h2>Se eu não puder decidir amanhã, minha família saberá exatamente o que fazer?</h2>',
  '</div>',
  '<div class="statement-copy">',
  '<p>Você trabalha, compra, investe, abre empresa, paga imposto, resolve problemas e segue em frente. Por fora, parece que está tudo certo.</p>',
  '<p>A Palestra Legado Protegido foi criada para tirar o patrimônio do campo do “acho que está tudo bem” e levar você para o campo da clareza.</p>',
  '<p>Você não sai com uma receita pronta. Sai entendendo quais sinais merecem atenção e quais perguntas precisam ser respondidas antes de falar em Holding, doação, sucessão ou qualquer outra estrutura.</p>',
  '</div>',
  '</div>',
  '</section>'
);

const renderDiscoveries = () => html(
  '<section class="section discoveries">',
  '<div class="container">',
  sectionIntro(
    'O que você vai descobrir',
    'Clareza antes de qualquer estrutura.',
    'Um raciocínio organizado para olhar o patrimônio, a família e o futuro antes de escolher ferramentas.'
  ),
  '<div class="discovery-grid">',
  discoveries.map((item, index) => html(
    '<article class="discovery-card">',
    '<span class="card-number">', String(index + 1).padStart(2, '0'), '</span>',
    '<p>', item, '</p>',
    '</article>'
  )).join(''),
  '</div>',
  '</div>',
  '</section>'
);

const renderTree = () => html(
  '<section class="section tree-section">',
  '<div class="container tree-grid">',
  '<div class="tree-art" aria-hidden="true">',
  '<div class="tree-crown"><span>Imóveis</span><span>Empresa</span><span>Investimentos</span><span>Renda</span></div>',
  '<div class="tree-trunk"></div>',
  '<div class="tree-roots"><i></i><i></i><i></i><i></i><strong>Família</strong></div>',
  '</div>',
  '<div class="tree-copy">',
  '<p class="eyebrow eyebrow-light">A primeira coisa que você precisa entender</p>',
  '<h2>Patrimônio é como uma árvore.</h2>',
  '<p>Você passa anos cuidando da raiz. Depois vêm os galhos: imóveis, empresa, investimentos, propriedades e renda.</p>',
  '<p>Só que uma árvore grande não se sustenta apenas porque cresceu. Ela precisa de raiz forte, poda, direção e continuidade.</p>',
  '<p>Construir foi a primeira missão. Organizar para que continue cumprindo seu propósito é outra.</p>',
  '<blockquote>E é aqui que muita família descobre tarde demais que tinha bens, mas não tinha um plano.</blockquote>',
  '</div>',
  '</div>',
  '</section>'
);

const renderMethod = () => html(
  '<section class="section method" id="metodo">',
  '<div class="container">',
  sectionIntro(
    'Método Raiz do Legado',
    'A solução vem depois da compreensão.',
    'Na WS Planner, o trabalho não começa com uma Holding. Começa com a história da família.'
  ),
  '<div class="method-grid">',
  methodSteps.map((step) => html(
    '<article class="method-card">',
    '<span>', step.number, '</span>',
    '<h3>', step.title, '</h3>',
    '<p>', step.text, '</p>',
    '</article>'
  )).join(''),
  '</div>',
  '<div class="method-note">',
  '<p>A diferença parece pequena. Na prática, é a diferença entre comprar uma solução pronta e construir uma estrutura compatível com a sua realidade.</p>',
  '</div>',
  '</div>',
  '</section>'
);

const renderMistake = () => html(
  '<section class="section mistake">',
  '<div class="container narrow">',
  '<p class="eyebrow">O erro que mais custa tranquilidade</p>',
  '<h2>O problema não é ter pouco ou muito patrimônio.</h2>',
  '<p class="large-copy">O problema é ter algo importante para a família e não saber o que acontece com esse patrimônio quando a vida muda.</p>',
  '<div class="mistake-panel">',
  '<p>Muita gente pensa que Planejamento Patrimonial é assunto para milionário. Por isso adia. Enquanto adia, continua concentrando decisões, documentos, empresas, imóveis e responsabilidades em uma única pessoa.</p>',
  '</div>',
  '</div>',
  '</section>'
);

const renderClass = () => html(
  '<section class="section class-section" id="palestra">',
  '<div class="container class-grid">',
  '<div class="class-copy">',
  '<p class="eyebrow">Como funciona a palestra</p>',
  '<h2>Uma hora para organizar as perguntas que antecedem grandes decisões.</h2>',
  '<p>Um encontro ao vivo de aproximadamente 1 hora para você entender o que precisa observar antes de tomar decisões sobre o futuro do patrimônio da sua família.</p>',
  '<div class="class-meta"><strong>Ao vivo</strong><span>Aproximadamente 1 hora</span></div>',
  linkButton('#oferta', 'Quero participar por R$ 29,90'),
  '</div>',
  '<div class="question-panel">',
  '<p class="panel-label">Durante a aula</p>',
  '<ol>',
  classQuestions.map((item, index) => html(
    '<li><span>', String(index + 1).padStart(2, '0'), '</span><p>', item, '</p></li>'
  )).join(''),
  '</ol>',
  '</div>',
  '</div>',
  '</section>'
);

const renderMaterials = () => html(
  '<section class="section materials">',
  '<div class="container">',
  sectionIntro(
    'O que você recebe',
    'A aula continua na conversa da sua família.',
    'Além do encontro ao vivo, você recebe materiais de apoio para organizar o raciocínio e observar pontos que merecem atenção.'
  ),
  '<div class="materials-grid">',
  materials.map((item) => html(
    '<article class="material-card">',
    '<span class="material-number">', item.number, '</span>',
    '<div><h3>', item.title, '</h3><p>', item.text, '</p></div>',
    '</article>'
  )).join(''),
  '</div>',
  '</div>',
  '</section>'
);

const renderAudience = () => html(
  '<section class="section audience-section">',
  '<div class="container audience-grid">',
  '<div class="audience-column positive">',
  '<p class="eyebrow">Para quem faz sentido</p>',
  '<h2>Para quem quer decidir com clareza enquanto há tempo.</h2>',
  checkList(audience),
  '</div>',
  '<div class="audience-column negative">',
  '<p class="eyebrow">Para quem não é</p>',
  '<h2>Não é uma promessa pronta.</h2>',
  checkList(notFor, 'neutral-list'),
  '</div>',
  '</div>',
  '</section>'
);

const renderAuthority = () => html(
  '<section class="section authority" id="rebeca">',
  '<div class="container authority-grid">',
  '<div class="authority-visual">',
  '<div class="authority-frame">',
  '<img src="/images/rebeca-autoridade.png" alt="Rebeca Nascimento sentada em ambiente profissional" width="941" height="1672" loading="lazy" decoding="async">',
  '</div>',
  '<div class="experience-seal"><strong>3 anos</strong><span>acompanhando famílias</span></div>',
  '</div>',
  '<div class="authority-copy">',
  '<p class="eyebrow eyebrow-light">Quem é Rebeca Nascimento</p>',
  '<h2>Clareza jurídica para decisões que pertencem à família.</h2>',
  '<p>Rebeca Nascimento atua ao lado da equipe da WS Planner com Planejamento Patrimonial Familiar e Empresarial.</p>',
  '<p>Há 3 anos, o escritório acompanha famílias na organização do patrimônio, da sucessão e das estruturas necessárias para preservar o legado. Ao longo desse período, a equipe já conduziu casos de 7 patriarcas.</p>',
  '<p>A premissa é clara: nenhuma família deve receber uma solução padronizada antes de ser compreendida.</p>',
  '<p>A comunicação da Rebeca segue a mesma lógica do trabalho. Traduzir temas jurídicos e patrimoniais para uma linguagem simples, para que a família participe das decisões sabendo o que está sendo feito e por quê.</p>',
  '<div class="authority-tags"><span>Patrimônio</span><span>Sucessão</span><span>Estruturas familiares</span></div>',
  '</div>',
  '</div>',
  '</section>'
);

const renderOffer = (checkoutUrl) => {
  const hasCheckout = Boolean(checkoutUrl);
  const action = hasCheckout
    ? linkButton(checkoutUrl, 'Quero participar por R$ 29,90')
    : html(
      '<button class="button button-primary button-disabled" type="button" disabled aria-disabled="true">',
      '<span>Quero participar por R$ 29,90</span>',
      '<span class="button-icon" aria-hidden="true">↗</span>',
      '</button>',
      '<p class="pending-note">O link de inscrição será inserido aqui assim que for disponibilizado.</p>'
    );

  return html(
    '<section class="section offer-section" id="oferta" data-checkout-status="', hasCheckout ? 'disponivel' : 'pendente', '">',
    '<div class="container offer-grid">',
    '<div class="offer-copy">',
    '<p class="eyebrow eyebrow-light">Palestra Legado Protegido</p>',
    '<h2>Troque suposição por clareza antes de decisões que envolvem anos de trabalho.</h2>',
    '<p>Sua participação inclui a aula ao vivo e os três materiais de apoio para continuar a conversa dentro da família.</p>',
    checkList([
      'Encontro ao vivo de aproximadamente 1 hora',
      'Raio X Patrimonial Familiar',
      'Mapa de Vulnerabilidades Patrimoniais',
      'Roteiro de Conversa Familiar'
    ], 'offer-list'),
    '</div>',
    '<div class="price-card">',
    '<p class="price-label">Investimento único</p>',
    '<div class="price"><span>R$</span><strong>29,90</strong></div>',
    '<p class="price-copy">Um investimento pequeno para entender o que merece atenção antes de escolher qualquer estrutura.</p>',
    action,
    '<div class="guarantee">',
    '<span class="guarantee-icon" aria-hidden="true">7</span>',
    '<div><strong>7 dias de garantia</strong><p>Conforme as condições informadas no checkout. Se o conteúdo não fizer sentido para você, poderá solicitar o reembolso dentro do prazo aplicável.</p></div>',
    '</div>',
    '</div>',
    '</div>',
    '</section>'
  );
};

const renderNextStep = () => html(
  '<section class="section next-step">',
  '<div class="container next-grid">',
  '<div>',
  '<p class="eyebrow">O próximo passo, se fizer sentido</p>',
  '<h2>Conhecer os riscos é diferente de saber qual estratégia aplicar.</h2>',
  '</div>',
  '<div>',
  '<p>Para quem quiser aprofundar, existe a Sessão de Viabilidade Patrimonial. É um encontro estratégico em que a equipe analisa a realidade familiar, patrimonial e empresarial para identificar se existe necessidade de Planejamento Patrimonial e quais caminhos merecem ser considerados.</p>',
  '<blockquote>O compromisso não é vender uma Holding. É dizer com clareza se ela faz sentido ou se outra estratégia é mais adequada.</blockquote>',
  '</div>',
  '</div>',
  '</section>'
);

const renderFaq = () => html(
  '<section class="section faq-section">',
  '<div class="container faq-grid">',
  '<div class="faq-heading">',
  '<p class="eyebrow">Dúvidas frequentes</p>',
  '<h2>Perguntas importantes merecem respostas responsáveis.</h2>',
  '</div>',
  '<div class="faq-list">',
  faqs.map((item, index) => html(
    '<details', index === 0 ? ' open' : '', '>',
    '<summary><span>', item.question, '</span><i aria-hidden="true"></i></summary>',
    '<p>', item.answer, '</p>',
    '</details>'
  )).join(''),
  '</div>',
  '</div>',
  '</section>'
);

const renderClosing = () => html(
  '<section class="section closing">',
  '<div class="container closing-inner">',
  '<p class="eyebrow eyebrow-light">Enquanto você ainda pode escolher</p>',
  '<h2>Você levou anos para construir. Agora é hora de entender como fazer o patrimônio continuar cumprindo seu papel.</h2>',
  '<p>O patrimônio não precisa esperar um problema aparecer para receber atenção. Enquanto você ainda pode conversar, escolher e decidir, existe espaço para estratégia. E estratégia começa com clareza.</p>',
  linkButton('#oferta', 'Quero participar da palestra por R$ 29,90'),
  '</div>',
  '</section>',
  '</main>'
);

const renderFooter = () => html(
  '<footer class="site-footer">',
  '<div class="container footer-grid">',
  '<div class="footer-brand"><span class="brand-mark">RN</span><p><strong>Rebeca Nascimento</strong><small>WS Planner</small></p></div>',
  '<p>A palestra oferece orientação geral e não entrega uma estratégia individual pronta. A escolha de qualquer estrutura depende da realidade de cada família.</p>',
  '<p>© 2026 Rebeca Nascimento. Todos os direitos reservados.</p>',
  '</div>',
  '</footer>'
);

export const renderSalesPage = (hero, checkoutUrl) => html(
  renderHeader(),
  renderHero(hero),
  renderTransformation(),
  renderDiscoveries(),
  renderTree(),
  renderMethod(),
  renderMistake(),
  renderClass(),
  renderMaterials(),
  renderAudience(),
  renderAuthority(),
  renderOffer(checkoutUrl),
  renderNextStep(),
  renderFaq(),
  renderClosing(),
  renderFooter()
);

export const renderThankYouPage = () => html(
  '<main class="thanks-page">',
  '<section class="thanks-hero">',
  '<div class="thanks-glow" aria-hidden="true"></div>',
  '<div class="container thanks-grid">',
  '<div class="thanks-copy">',
  '<a class="brand brand-light" href="/a1" aria-label="Rebeca Nascimento, página principal">',
  '<span class="brand-mark">RN</span>',
  '<span class="brand-copy"><strong>Rebeca Nascimento</strong><small>Planejamento Patrimonial</small></span>',
  '</a>',
  '<p class="eyebrow eyebrow-light">Inscrição concluída</p>',
  '<h1>Obrigada por dar este passo em direção a um legado mais claro.</h1>',
  '<p>Guarde a confirmação da sua compra. Seu próximo passo é aguardar as orientações oficiais de acesso à Palestra Legado Protegido.</p>',
  '<a class="button button-secondary" href="/a1"><span>Voltar para a página da palestra</span><span class="button-icon" aria-hidden="true">↗</span></a>',
  '</div>',
  '<div class="thanks-card">',
  '<p class="panel-label">O que fazer agora</p>',
  '<ol>',
  '<li><span>01</span><div><strong>Guarde sua confirmação</strong><p>Mantenha o comprovante da inscrição em um local de fácil acesso.</p></div></li>',
  '<li><span>02</span><div><strong>Aguarde as orientações</strong><p>As informações oficiais de acesso serão comunicadas pela organização.</p></div></li>',
  '<li><span>03</span><div><strong>Reserve cerca de 1 hora</strong><p>Prepare um momento tranquilo para acompanhar o encontro ao vivo.</p></div></li>',
  '</ol>',
  '<div class="thanks-note"><strong>Importante</strong><p>O canal de acesso e os dados de suporte ainda precisam ser definidos para esta página.</p></div>',
  '</div>',
  '</div>',
  '</section>',
  '</main>',
  '<footer class="site-footer thanks-footer"><div class="container footer-grid"><p>Rebeca Nascimento. WS Planner.</p><p>© 2026. Todos os direitos reservados.</p></div></footer>'
);
