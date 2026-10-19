const news = [
  {
    id: 'eleicoes-secoes',
    category: 'Política',
    tone: 'politica',
    date: '17/10/2026',
    time: 'há 3 horas',
    title: 'Mais de 4,3 mil seções eleitorais mudaram de local para o 2º turno; veja como consultar onde votar',
    summary: 'Segundo o TSE, mudanças atingem 0,87% das 499 mil seções do país. Eleitor deve conferir o endereço antes de votar.',
    source: 'g1',
    sourceLabel: 'g1 Política',
    url: 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/10/17/mais-de-43-mil-secoes-eleitorais-mudaram-de-local-para-o-2o-turno-veja-como-consultar-onde-votar.ghtml',
    mark: 'VOTO'
  },
  {
    id: 'datafolha-stf',
    category: 'Política',
    tone: 'politica',
    date: '16/10/2026',
    time: 'ontem',
    title: 'Datafolha: 59% defendem que ministros do STF deveriam ter mandato',
    summary: 'Pesquisa aponta apoio a mudanças no Judiciário entre eleitores dos dois candidatos que disputam o segundo turno.',
    source: 'g1',
    sourceLabel: 'g1 Política',
    url: 'https://g1.globo.com/politica/eleicoes/2026/noticia/2026/10/16/datafolha-ministros-stf-mandato.ghtml',
    mark: 'PESQUISA'
  },
  {
    id: 'inflacao-focus',
    category: 'Economia',
    tone: 'economia',
    date: '05/10/2026',
    time: 'publicado',
    title: 'Focus: mercado eleva previsão da inflação para 5,01% em 2026',
    summary: 'Boletim do Banco Central também aponta PIB projetado em 1,85% e Selic em 13,5% ao ano no fim de 2026.',
    source: 'agencia-brasil',
    sourceLabel: 'Agência Brasil',
    url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/focus-mercado-eleva-previsao-da-inflacao-para-501-em-2026',
    mark: 'FOCUS'
  },
  {
    id: 'amazonas-desmatamento',
    category: 'Brasil',
    tone: 'brasil',
    date: '16/10/2026',
    time: 'ontem',
    title: 'Desmatamento na Amazônia cai ao menor nível já registrado, diz Reuters',
    summary: 'Levantamento citado pela agência aponta queda histórica no desmatamento da floresta brasileira.',
    source: 'reuters',
    sourceLabel: 'Reuters',
    url: 'https://www.reuters.com/business/environment/deforestation-brazils-amazon-falls-lowest-record-2026-10-16/',
    mark: 'AMAZÔNIA'
  },
  {
    id: 'semana-trabalho',
    category: 'Brasil',
    tone: 'brasil',
    date: '15/10/2026',
    time: 'há 3 dias',
    title: 'Senado aprova redução da jornada semanal em vitória política para Lula',
    summary: 'Proposta de emenda para reduzir a jornada de trabalho avança no Senado, segundo a cobertura da Reuters.',
    source: 'reuters',
    sourceLabel: 'Reuters',
    url: 'https://www.reuters.com/world/brazils-senate-approves-shorter-workweek-win-lula-2026-10-15/',
    mark: 'TRABALHO'
  },
  {
    id: 'zelenski-acordo',
    category: 'Mundo',
    tone: 'mundo',
    date: '17/10/2026',
    time: 'ontem',
    title: 'Zelenskiy critica acordo entre Estados Unidos e Rússia sobre diesel',
    summary: 'Presidente ucraniano contestou os termos do entendimento em declaração repercutida pela Agência Brasil.',
    source: 'agencia-brasil',
    sourceLabel: 'Agência Brasil',
    url: 'https://agenciabrasil.ebc.com.br/internacional/noticia/2026-10/zelenskiy-critica-acordo-entre-eua-e-russia-sobre-diesel',
    mark: 'MUNDO'
  },
  {
    id: 'plataformas-desinformacao',
    category: 'Educação',
    tone: 'educacao',
    date: '17/10/2026',
    time: 'ontem',
    title: 'Estudantes desenvolvem plataformas para combater a desinformação',
    summary: 'Projetos apresentados por estudantes buscam apoiar o consumo crítico de informação e a checagem de conteúdos.',
    source: 'agencia-brasil',
    sourceLabel: 'Agência Brasil',
    url: 'https://agenciabrasil.ebc.com.br/educacao/noticia/2026-10/estudantes-desenvolvem-plataformas-para-combater-desinformacao',
    mark: 'IDEIAS'
  },
  {
    id: 'duelo-guitarras',
    category: 'Cultura',
    tone: 'cultura',
    date: '17/10/2026',
    time: 'ontem',
    title: 'Duelo de Guitarras termina com perfil do campeão Pedro Hills',
    summary: 'Programa da TV Brasil encerra temporada com destaque para a trajetória do vencedor.',
    source: 'agencia-brasil',
    sourceLabel: 'Agência Brasil',
    url: 'https://agenciabrasil.ebc.com.br/cultura/noticia/2026-10/duelo-de-guitarras-da-tv-brasil-termina-com-perfil-do-campeao',
    mark: 'CULTURA'
  },
  {
    id: 'libertadores-feminina',
    category: 'Esportes',
    tone: 'esportes',
    date: '17/10/2026',
    time: 'ontem',
    title: 'Libertadores Feminina: Cruzeiro resiste à altitude e vence na estreia',
    summary: 'Equipe brasileira superou as condições de Quito e começou a competição com vitória.',
    source: 'agencia-brasil',
    sourceLabel: 'Agência Brasil',
    url: 'https://agenciabrasil.ebc.com.br/esportes/noticia/2026-10/libertadores-feminina-cruzeiro-resiste-altitude-e-vence-na-estreia',
    mark: 'JOGO'
  }
];

const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));
const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

function thumbMarkup(item, compact = false) {
  return `<div class="news-thumb tone-${escapeHtml(item.tone)} ${compact ? 'thumb-compact' : ''}" aria-hidden="true"><span>${escapeHtml(item.mark)}</span><i></i></div>`;
}

function cardMarkup(item, index) {
  return `<article class="news-card reveal" data-category="${escapeHtml(item.category)}" data-search="${escapeHtml(normalize(`${item.title} ${item.summary} ${item.category} ${item.sourceLabel}`))}">
    ${thumbMarkup(item)}
    <div class="news-card-body">
      <div class="eyebrow"><span class="category-dot dot-${escapeHtml(item.tone)}"></span>${escapeHtml(item.category)} <span class="separator">·</span> ${escapeHtml(item.time)}</div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.summary)}</p>
      <div class="card-meta"><span>${escapeHtml(item.sourceLabel)}</span><time datetime="2026-${item.date.split('/')[1]}-${item.date.split('/')[0]}">${escapeHtml(item.date)}</time></div>
      <div class="card-actions"><button class="text-button js-open-article" type="button" data-id="${escapeHtml(item.id)}">Ler resumo <span aria-hidden="true">↗</span></button><a class="source-link" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">Fonte original</a></div>
    </div>
  </article>`;
}

function renderNews(items = news) {
  const grid = document.querySelector('#news-grid');
  const empty = document.querySelector('#empty-state');
  if (!grid) return;
  grid.innerHTML = items.map(cardMarkup).join('');
  if (empty) empty.hidden = items.length > 0;
  document.querySelector('#results-count')?.replaceChildren(document.createTextNode(`${items.length} ${items.length === 1 ? 'notícia encontrada' : 'notícias encontradas'}`));
  bindArticleButtons();
}

function bindArticleButtons() {
  document.querySelectorAll('.js-open-article').forEach((button) => {
    button.addEventListener('click', () => openArticle(button.dataset.id));
  });
}

function openArticle(id) {
  const item = news.find((entry) => entry.id === id);
  const modal = document.querySelector('#article-modal');
  if (!item || !modal) return;
  modal.querySelector('[data-modal-thumb]').innerHTML = thumbMarkup(item, true);
  modal.querySelector('[data-modal-category]').textContent = `${item.category} · ${item.date}`;
  modal.querySelector('[data-modal-title]').textContent = item.title;
  modal.querySelector('[data-modal-summary]').textContent = item.summary;
  modal.querySelector('[data-modal-source]').textContent = `Fonte: ${item.sourceLabel}`;
  modal.querySelector('[data-modal-link]').href = item.url;
  modal.showModal();
}

function initFilters() {
  const search = document.querySelector('#site-search');
  const chips = [...document.querySelectorAll('.filter-chip')];
  let active = 'Todos';
  const filter = () => {
    const term = normalize(search?.value || '');
    const filtered = news.filter((item) => {
      const matchesCategory = active === 'Todos' || item.category === active;
      const haystack = normalize(`${item.title} ${item.summary} ${item.category} ${item.sourceLabel}`);
      return matchesCategory && (!term || haystack.includes(term));
    });
    renderNews(filtered);
  };
  search?.addEventListener('input', filter);
  chips.forEach((chip) => chip.addEventListener('click', () => {
    chips.forEach((item) => item.classList.remove('is-active'));
    chip.classList.add('is-active');
    active = chip.dataset.category;
    filter();
  }));
}

function initMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  toggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('is-open')));
}

function initModal() {
  const modal = document.querySelector('#article-modal');
  modal?.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', () => modal.close()));
  modal?.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });
}

function initYear() {
  document.querySelectorAll('[data-current-year]').forEach((element) => { element.textContent = '2026'; });
}

document.addEventListener('DOMContentLoaded', () => {
  renderNews();
  initFilters();
  initMenu();
  initModal();
  initYear();
});
