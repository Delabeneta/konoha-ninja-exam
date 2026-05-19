const STORAGE_KEY = 'naruto_quiz_v4';
const OLD_KEY     = 'naruto_quiz_v3';

const RANK_ORDER = ['academia','genin','chunin','jounin','anbu','hokage'];

const RANKS = {
  academia:{ rank:'Aluno da Academia', icon:'', badge:'📜', phrase:'Seu chakra acabou de despertar. O caminho é longo, mas começa aqui.' },
  genin:   { rank:'Genin',            icon:'', badge:'🎭', phrase:'Você está apto para missões de baixo risco. Siga seu sensei.' },
  chunin:  { rank:'Chunin',           icon:'', badge:'⚔️', phrase:'Seu julgamento em campo foi reconhecido pelo Conselho.' },
  jounin:  { rank:'Jounin',           icon:'', badge:'🛡️', phrase:'Poucos chegam aqui. Sua maestria é inegável.' },
  anbu:    { rank:'ANBU',             icon:'', badge:'🎴', phrase:'Você opera onde a luz não alcança. Não revele sua identidade.' },
  hokage:  { rank:'Hokage',           icon:'', badge:'👑', phrase:'A Vila da Folha tem um novo guardião. Que seu nome perdure.' },
};

const MISSIONS = [
  { id:'academia', num:1, name:'Academia Ninja', title:'Academia Ninja',   desc:'Primeiros passos.', icon:'忍', color:'#4A90D9', questions:[0,1,2,3,4,5,6,7,8,9] },
  { id:'genin',    num:2, name:'Exame Genin',    title:'Exame Genin',      desc:'Mostre seu valor.', icon:'葉', color:'#27AE60', questions:[10,11,12,13,14,15,16,17,18,19] },
  { id:'chunin',   num:3, name:'Exame Chunin',   title:'Exame Chunin',     desc:'Nível sobe.',       icon:'⚔', color:'#E8650A', questions:[20,21,22,23,24,25,26,27,28,29] },
  { id:'jounin',   num:4, name:'Operação Jounin',title:'Operação Jounin',  desc:'Experientes.',      icon:'雷', color:'#8E44AD', questions:[30,31,32,33,34,35,36,37,38,39] },
  { id:'anbu',     num:5, name:'Arquivos ANBU',  title:'Arquivos ANBU',    desc:'Conhecimento oculto.', icon:'暗', color:'#C0392B', questions:[40,41,42,43,44,45,46,47,48,49] },
  { id:'hokage',   num:6, name:'Prova Hokage',   title:'Prova Hokage',     desc:'Teste definitivo.', icon:'火', color:'#F5A623', questions:[50,51,52,53,54,55,56,57,58,59] },
];

const QUESTIONS_ACADEMIA = [
  {q:"Qual é o nome completo do protagonista?",o:["Naruto Uzumaki","Naruto Uchiha","Naruto Namikaze","Naruto Sarutobi"],a:0},
  {q:"Qual demônio foi selado dentro de Naruto?",o:["Kyuubi","Shukaku","Matatabi","Gyūki"],a:0},
  {q:"Qual é a aldeia onde Naruto nasceu?",o:["Aldeia da Folha","Aldeia da Areia","Aldeia da Névoa","Aldeia da Chuva"],a:0},
  {q:"Qual é o sonho de Naruto?",o:["Ser Hokage","Vencer Sasuke","Encontrar seu pai","Dominar o Kyuubi"],a:0},
  {q:"Quem são os outros membros do Time 7?",o:["Sasuke e Sakura","Shikamaru e Ino","Neji e Hinata","Gaara e Kankuro"],a:0},
  {q:"Quem é o sensei do Time 7?",o:["Kakashi","Iruka","Jiraiya","Minato"],a:0},
  {q:"Qual técnica Naruto mais usa no início?",o:["Kage Bunshin","Rasengan","Chidori","Henge"],a:0},
  {q:"Primeiro professor de Naruto?",o:["Iruka","Kakashi","Jiraiya","Ebisu"],a:0},
  {q:"Qual comida favorita de Naruto?",o:["Lámen","Onigiri","Dango","Curry"],a:0},
  {q:"Qual invocação Naruto aprende com Jiraiya?",o:["Sapos","Cobras","Lesmas","Corvos"],a:0},
];

const QUESTIONS_GENIN = [
  {q:"Em qual exame Naruto tenta avançar de rank?",o:["Exame Chunin","Exame Jounin","ANBU","Teste Hokage"],a:0},
  {q:"Quem são os Três Sannin Lendários?",o:["Jiraiya, Tsunade e Orochimaru","Kakashi, Gai e Kurenai","Danzo, Hiruzen e Asuma","Minato, Kushina e Jiraiya"],a:0},
  {q:"De qual aldeia Gaara é originário?",o:["Areia","Folha","Névoa","Chuva"],a:0},
  {q:"Qual Bijuu está dentro de Gaara?",o:["Shukaku","Kyuubi","Chomei","Kokuo"],a:0},
  {q:"Orochimaru é conhecido por dominar quais técnicas?",o:["Serpentes e experimentos","Fogo","Taijutsu","Clones"],a:0},
  {q:"Qual clã possui o Byakugan?",o:["Hyuga","Uchiha","Senju","Uzumaki"],a:0},
  {q:"Parceiro de Shikamaru no Time 10?",o:["Choji","Ino","Kiba","Lee"],a:0},
  {q:"Quem é a Quinta Hokage?",o:["Tsunade","Konan","Sakura","Kushina"],a:0},
  {q:"Qual é o cachorro parceiro de Kiba?",o:["Akamaru","Pakkun","Kurama","Enma"],a:0},
  {q:"Qual é a habilidade especial de Rock Lee?",o:["Taijutsu","Genjutsu","Ninjutsu médico","Doujutsu"],a:0},
];

const QUESTIONS_CHUNIN = [
  {q:"Objetivo principal da Akatsuki?",o:["Capturar Bijuus","Dominar Konoha","Reviver Orochimaru","Matar Hokages"],a:0},
  {q:"Qual genjutsu lendário Itachi utiliza?",o:["Tsukuyomi","Byakugan","Kamui","Jogan"],a:0},
  {q:"Verdadeiro motivo do massacre Uchiha?",o:["Proteger Konoha","Ganhar poder","Obedecer Madara","Testar Sharingan"],a:0},
  {q:"Qual kekkei genkai combina elementos?",o:["Mokuton","Sharingan","Byakugan","Rinnegan"],a:0},
  {q:"Quem era o verdadeiro líder da Akatsuki?",o:["Nagato","Konan","Itachi","Kisame"],a:0},
  {q:"Quem derrotou Sasori?",o:["Chiyo e Sakura","Naruto e Kakashi","Gaara","Kankuro"],a:0},
  {q:"Técnica do clã Nara?",o:["Kage Mane","Baika","Kikaichu","Leitura mental"],a:0},
  {q:"Qual recurso Deidara utiliza em combate?",o:["Argila explosiva","Espadas","Som","Insetos"],a:0},
  {q:"Quem foi o Mizukage jinchuuriki?",o:["Yagura","Bee","Han","Roshi"],a:0},
  {q:"Especialidade do clã Aburame?",o:["Insetos kikaichu","Sombras","Expansão","Genjutsu"],a:0},
];

const QUESTIONS_JOUNIN = [
  {q:"Ordem correta dos primeiros Hokages?",o:["Hashirama,Tobirama,Hiruzen,Minato,Tsunade","Tobirama,Hashirama,Hiruzen,Minato,Tsunade","Hiruzen,Hashirama,Tobirama,Minato,Tsunade","Minato,Hashirama,Tobirama,Hiruzen,Tsunade"],a:0},
  {q:"Qual parte da Kurama Minato selou em Naruto?",o:["Chakra Yang","Chakra Yin","Kurama completa","Apenas selo residual"],a:0},
  {q:"O que o Rinnegan permite ao usuário?",o:["Seis Caminhos","Copiar jutsus","Ver chakra","Prever ataques"],a:0},
  {q:"Por que Kakashi é chamado de Ninja Copiador?",o:["Copiou mais de mil jutsus","Criou mil jutsus","Roubou técnicas","É discípulo de Minato"],a:0},
  {q:"Técnica de vento criada por Naruto?",o:["Rasenshuriken","Rasengan Supremo","Vento Cortante","Bijuu Ball"],a:0},
  {q:"Qual foi o papel de Danzo no massacre Uchiha?",o:["Ordenou","Protegeu","Foi contra","Ignorou"],a:0},
  {q:"Relação entre Nagato, Yahiko e Konan?",o:["Fundaram a Akatsuki","Eram irmãos","Rivais","Senseis"],a:0},
  {q:"Quem deu o Sharingan para Kakashi?",o:["Obito","Madara","Itachi","Shisui"],a:0},
  {q:"Qual arma espiritual Itachi usa no Susanoo?",o:["Espada de Totsuka","Samehada","Kubikiribocho","Gunbai"],a:0},
  {q:"Resultado da invasão de Pain?",o:["Pain revive mortos após Naruto convencê-lo","Pain vence","Tsunade derrota Pain","Pain foge"],a:0},
];

const QUESTIONS_ANBU = [
  {q:"A qual clã Kaguya pertence?",o:["Otsutsuki","Uchiha","Senju","Hyuga"],a:0},
  {q:"Por que Tsukuyomi parece durar dias?",o:["Controle temporal do genjutsu","Paralisa o corpo","Amplia chakra","Duplica percepção"],a:0},
  {q:"Quantas caudas possui Son Goku?",o:["4","3","5","6"],a:0},
  {q:"Origem do Sharingan?",o:["Descendentes de Hagoromo","Madara criou","Indra inventou","Kaguya entregou"],a:0},
  {q:"Qual sapo treinou Naruto em Senjutsu?",o:["Fukasaku","Gamabunta","Shima","Gamakichi"],a:0},
  {q:"Quem era o membro Root rival de Shino?",o:["Torune","Sai","Fuu","Danzo"],a:0},
  {q:"Qual habilidade especial Torune Aburame possuía?",o:["Insetos nano venenosos","Kotoamatsukami","Liberação de madeira","Areia de ferro"],a:0},
  {q:"Tio de Gaara que tentou matá-lo?",o:["Yashamaru","Baki","Kankuro","Temari"],a:0},
  {q:"O que é Edo Tensei?",o:["Ressurreição de mortos","Clone avançado","Selamento","Genjutsu"],a:0},
  {q:"Qual evento levou Obito a se tornar Tobi?",o:["Manipulação de Madara após acidente","Massacre Uchiha","Luta contra Minato","Exame Chunin"],a:0},
];

const QUESTIONS_HOKAGE = [
  {q:"Capítulos do duelo final Naruto vs Sasuke?",o:["693-699","650-660","700-710","500-510"],a:0},
  {q:"Plano final de Madara?",o:["Tsukuyomi Infinito","Destruir vilas","Reviver Orochimaru","Dominar Konoha"],a:0},
  {q:"Qual fruta Kaguya comeu?",o:["Fruto da Árvore Divina","Fruto Bijuu","Fruto proibido","Semente chakra"],a:0},
  {q:"O que a marca Karma representa em Boruto?",o:["Backup genético Otsutsuki","Chakra infinito","Novo dojutsu","Selo de proteção"],a:0},
  {q:"Como Sasuke controlou os Bijuus na guerra?",o:["Rinnegan e Chibaku Tensei","Tsukuyomi","Amaterasu","Susanoo puro"],a:0},
  {q:"Resultado final da Quarta Guerra Ninja?",o:["Aliança vence Kaguya e Madara","Madara vence","Pain retorna","Folha destruída"],a:0},
  {q:"Nome real do Sábio dos Seis Caminhos?",o:["Hagoromo Otsutsuki","Hamura Otsutsuki","Indra Otsutsuki","Ashura Otsutsuki"],a:0},
  {q:"O que o Jougan permite perceber?",o:["Rupturas dimensionais e chakra anômalo","Somente chakra","Genjutsu","Kurama"],a:0},
  {q:"Quem foi o primeiro jinchuuriki da Kurama?",o:["Mito Uzumaki","Kushina","Naruto","Hashirama"],a:0},
  {q:"Quem selou Kaguya originalmente?",o:["Hagoromo e Hamura","Naruto e Sasuke","Madara","Hashirama"],a:0},
];

const ALL_QUESTIONS = [
  ...QUESTIONS_ACADEMIA,
  ...QUESTIONS_GENIN,
  ...QUESTIONS_CHUNIN,
  ...QUESTIONS_JOUNIN,
  ...QUESTIONS_ANBU,
  ...QUESTIONS_HOKAGE
];

const LOADING_MSGS = [
  '"Concentre seu chakra..." — Kakashi',
  '"O verdadeiro teste começa agora." — Iruka',
  '"Os pergaminhos são invocados..." — Ancião',
  '"Forme o selo do tigre!" — Guy',
  '"O Conselho observa seu progresso." — 3º Hokage',
  '"Respire fundo." — Jiraiya',
];

/* ── ESTADO ── */
const state = {
  userName: '',
  currentMission: null,
  currentQ: 0,
  score: 0,
  answered: false,
  missionQuestions: [],
  prevOverallRankKey: null,
  isLoggedIn: false,
  _modalOpener: null, 
};

/* ═══════════════════════════════════════════════════════════════
   STORAGE
═══════════════════════════════════════════════════════════════ */
function loadStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
    const old = localStorage.getItem(OLD_KEY);
    if (old) {
      const data = JSON.parse(old);
      saveStorage(data);
      return data;
    }
    return {};
  } catch { return {}; }
}

function saveStorage(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
}

function getMissionData(id) {
  const s = loadStorage();
  return s[id] || { history: [], bestScore: null, attempts: 0 };
}

function saveMissionResult(id, score) {
  const s = loadStorage();
  if (!s[id]) s[id] = { history: [], bestScore: null, attempts: 0 };
  const dateStr = new Date().toLocaleDateString('pt-BR');
  const rankKey = getRankKey(score, 10);
  s[id].history.unshift({ date: dateStr, score, rank: RANKS[rankKey].rank });
  if (s[id].history.length > 8) s[id].history = s[id].history.slice(0, 8);
  if (s[id].bestScore === null || score > s[id].bestScore) s[id].bestScore = score;
  s[id].attempts++;
  saveStorage(s);
}

function saveUserName(name) {
  const s = loadStorage();
  s.userName = name;
  saveStorage(s);
}

function getTotalCorrectAnswers() {
  const s = loadStorage();
  let total = 0;
  MISSIONS.forEach(m => {
    const d = s[m.id];
    if (d && d.history) {
      d.history.forEach(h => total += h.score);
    }
  });
  return total;
}


function getRankKey(acertos, total) {
  const pct = acertos / total;
  if (pct < 0.40) return 'academia';
  if (pct < 0.55) return 'genin';
  if (pct < 0.70) return 'chunin';
  if (pct < 0.83) return 'jounin';
  if (pct < 0.95) return 'anbu';
  return 'hokage'; // 95%+
}

function isMissionUnlocked(missionIndex) {
  if (missionIndex === 0) return true;
  const prev = MISSIONS[missionIndex - 1];
  const d = getMissionData(prev.id);
  return d.attempts > 0;
}

function getOverallStats() {
  const s = loadStorage();
  let done = 0, attempts = 0, totalScore = 0, totalMax = 0;
  MISSIONS.forEach(m => {
    const d = s[m.id];
    if (!d || d.attempts === 0) return;
    done++;
    attempts += d.attempts;
    if (d.bestScore !== null) { totalScore += d.bestScore; totalMax += 10; }
  });
  return {
    done, attempts,
    avg: totalMax > 0 ? Math.round((totalScore / totalMax) * 100) : 0,
    progress: Math.round((done / MISSIONS.length) * 100),
  };
}

function getOverallRankKey() {
  const s = loadStorage();
  let total = 0, max = 0;
  MISSIONS.forEach(m => {
    const d = s[m.id];
    if (d && d.bestScore !== null) { total += d.bestScore; max += 10; }
  });
  if (max === 0) return 'academia';
  return getRankKey(total, max);
}

function getHighestRankKey() {
  const s = loadStorage();
  let total = 0, completed = 0;
  MISSIONS.forEach(m => {
    const d = s[m.id];
    if (d && d.bestScore !== null) { total += d.bestScore; completed++; }
  });
  if (completed === 0) return 'academia';
  return getRankKey(total, completed * 10);
}

function getUnlockedBadges() {
  const s = loadStorage();
  const unlocked = new Set();
  let done = 0, hasPerfect = false, hasHokage = false, hasAnbu = false, allMaster = true;
  let totalAttempts = 0;
  let totalCorrect = 0;
  
  MISSIONS.forEach(m => {
    const d = s[m.id];
    if (!d || d.attempts === 0) { allMaster = false; return; }
    done++;
    totalAttempts += d.attempts;
    if (d.bestScore === 10) hasPerfect = true;
    const rk = getRankKey(d.bestScore || 0, 10);
    if (rk === 'hokage') hasHokage = true;
    if ((rk === 'anbu' || rk === 'hokage') && m.id === 'anbu') hasAnbu = true;
    if (d.bestScore !== 10) allMaster = false;
    if (d.history) d.history.forEach(h => totalCorrect += h.score);
  });

  if (done >= 1) unlocked.add('first_mission');
  if (done >= 6) unlocked.add('all_missions');
  if (hasPerfect) unlocked.add('perfect');
  if (hasAnbu) unlocked.add('anbu_ops');
  if (allMaster && done === 6) unlocked.add('master');

  const highestRank = getHighestRankKey();
  
  // Badges de progressão de rank (baseado na média geral)
  if (['genin', 'chunin', 'jounin', 'anbu', 'hokage'].includes(highestRank)) 
    unlocked.add('genin_promo');
  if (['chunin', 'jounin', 'anbu', 'hokage'].includes(highestRank)) 
    unlocked.add('chunin_elite');
  if (['jounin', 'anbu', 'hokage'].includes(highestRank)) 
    unlocked.add('jounin_elite');  
  if (['anbu', 'hokage'].includes(highestRank)) 
    unlocked.add('anbu_unlocked');
  if (highestRank === 'hokage') 
    unlocked.add('hokage_reached');
    
  // Badge: Construtor de Lendas (todas as missões com rank Chunin ou superior)
    let allChuninOrBetter = true;
    MISSIONS.forEach(m => {
      const d = s[m.id];
      if (d && d.bestScore !== null) {
        const rankKey = getRankKey(d.bestScore, 10);
        if (!['chunin', 'jounin', 'anbu', 'hokage'].includes(rankKey)) {
          allChuninOrBetter = false;
        }
      } else {
        allChuninOrBetter = false; 
      }
    });
    if (allChuninOrBetter && done === 6) unlocked.add('legacy_builder');


  if (totalAttempts >= 10) unlocked.add('ten_attempts');
  if (totalCorrect >= 100) unlocked.add('rasengan_master');

  return unlocked;
}
function shuffleOptions(question) {
  const indices = [0, 1, 2, 3];
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  const newCorrectIndex = indices.indexOf(question.a);
  const shuffledOptions = indices.map(i => question.o[i]);
  return { q: question.q, o: shuffledOptions, a: newCorrectIndex };
}

/* ═══════════════════════════════════════════════════════════════
   CANVAS
═══════════════════════════════════════════════════════════════ */
(function initCanvas() {
  const c = document.getElementById('canvas-bg');
  if (!c) return;
  const ctx = c.getContext('2d');
  let W, H, particles = [];

  function resize() { W = c.width = innerWidth; H = c.height = innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  class P {
    constructor() { this.reset(true); }
    reset(init) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : H + 10;
      this.size = Math.random() * 2.5 + 0.5;
      this.speed = Math.random() * 0.6 + 0.2;
      this.drift = Math.random() * 0.4 - 0.2;
      this.angle = Math.random() * Math.PI * 2;
      this.alpha = Math.random() * 0.4 + 0.1;
      this.leaf = Math.random() > 0.6;
    }
    update() {
      this.y -= this.speed; this.x += this.drift; this.angle += 0.015;
      if (this.y < -20) this.reset(false);
    }
    draw() {
      ctx.save(); ctx.globalAlpha = this.alpha;
      if (this.leaf) {
        ctx.translate(this.x, this.y); ctx.rotate(this.angle);
        ctx.fillStyle = 'rgba(232,101,10,0.6)';
        ctx.beginPath(); ctx.ellipse(0, 0, this.size * 2.5, this.size, 0, 0, Math.PI * 2); ctx.fill();
      } else {
        ctx.fillStyle = 'rgba(245,166,35,0.35)';
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < 35; i++) particles.push(new P());

  function loop() {
    ctx.clearRect(0, 0, W, H);
    ctx.strokeStyle = 'rgba(232,101,10,0.02)'; ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 80) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 80) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ═══════════════════════════════════════════════════════════════
   UI UTILS
═══════════════════════════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
}

let toastTimer;
function showToast(msg, type = 'ok', ms = 2600) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast show${type === 'error' ? ' error' : type === 'info' ? ' info' : ''}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), ms);
}

/* ── MODAL COM TRAP DE FOCO ── */

// Elementos focáveis dentro de um container
function getFocusable(container) {
  return Array.from(container.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )).filter(el => !el.closest('[hidden]') && el.offsetParent !== null);
}

function trapFocus(e, container) {
  const focusable = getFocusable(container);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.key === 'Tab') {
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }
}

let _trapHandler = null;

function openModal(title, bodyHTML, footerHTML = '', openerEl = null) {
  state._modalOpener = openerEl || document.activeElement;

  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = bodyHTML;
  document.getElementById('modal-footer').innerHTML = footerHTML;

  const overlay = document.getElementById('modal-overlay');
  overlay.classList.add('open');

  const modal = document.getElementById('modal');
  requestAnimationFrame(() => {
    const focusable = getFocusable(modal);
    if (focusable.length) focusable[0].focus();
  });

  if (_trapHandler) modal.removeEventListener('keydown', _trapHandler);
  _trapHandler = (e) => trapFocus(e, modal);
  modal.addEventListener('keydown', _trapHandler);
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('open');

  if (state._modalOpener && typeof state._modalOpener.focus === 'function') {
    state._modalOpener.focus();
  }
  state._modalOpener = null;

  const modal = document.getElementById('modal');
  if (_trapHandler) { modal.removeEventListener('keydown', _trapHandler); _trapHandler = null; }
}

document.getElementById('modal-close').onclick = closeModal;
document.getElementById('modal-overlay').onclick = e => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
};

/* ── SOUND ── */
function playClick() {
  try {
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    const o = ac.createOscillator(), g = ac.createGain();
    o.connect(g); g.connect(ac.destination);
    o.frequency.setValueAtTime(900, ac.currentTime);
    o.frequency.exponentialRampToValueAtTime(500, ac.currentTime + 0.08);
    g.gain.setValueAtTime(0.07, ac.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.12);
    o.start(); o.stop(ac.currentTime + 0.12);
  } catch {}
}

function playCorrect() {
  try {
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    [523, 659, 784].forEach((f, i) => {
      const o = ac.createOscillator(), g = ac.createGain();
      o.connect(g); g.connect(ac.destination);
      o.frequency.value = f;
      g.gain.setValueAtTime(0.07, ac.currentTime + i * 0.1);
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + i * 0.1 + 0.15);
      o.start(ac.currentTime + i * 0.1); o.stop(ac.currentTime + i * 0.1 + 0.15);
    });
  } catch {}
}

function playWrong() {
  try {
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    const o = ac.createOscillator(), g = ac.createGain();
    o.connect(g); g.connect(ac.destination);
    o.type = 'sawtooth'; o.frequency.value = 180;
    g.gain.setValueAtTime(0.05, ac.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.25);
    o.start(); o.stop(ac.currentTime + 0.25);
  } catch {}
}

/* ═══════════════════════════════════════════════════════════════
   AVATAR & MENU
═══════════════════════════════════════════════════════════════ */
function updateAvatar() {
  const initials = state.userName.substring(0, 2).toUpperCase();
  document.getElementById('avatar-initials').textContent = initials;
  document.getElementById('dropdown-user-name').textContent = state.userName;
}

function showAvatarMenu() {
  document.getElementById('avatar-menu-container').style.display = 'block';
}

function hideAvatarMenu() {
  document.getElementById('avatar-menu-container').style.display = 'none';
}

function toggleDropdown() {
  const btn = document.getElementById('avatar-btn');
  const dropdown = document.getElementById('dropdown-menu');
  const isOpen = dropdown.classList.toggle('open');

  btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

function closeDropdown() {
  const btn = document.getElementById('avatar-btn');
  const dropdown = document.getElementById('dropdown-menu');
  dropdown.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
}

function showDashboard() {
  closeDropdown();
  renderDashboard();
  showScreen('dashboard');
}

function showProfile() {
  closeDropdown();
  renderProfile();
  showScreen('profile');
}

function showRankingGlobal() {
  closeDropdown();
  showToast('Ranking Global em desenvolvimento...', 'info');
}

function showSettings() {
  closeDropdown();
  showToast('Configurações em desenvolvimento...', 'info');
}

function logoutUser() {
  const logoutBtn = document.querySelector('[data-action="logout"]');
  closeDropdown();
  openModal(
    '⚠️ Sair da Conta Ninja? ⚠️',
    '<p class="modal-confirm-text">Deseja realmente sair da sua conta? Seu progresso será mantido, mas você precisará fazer login novamente.</p>',
    `<button class="btn-res btn-res-danger" id="confirm-logout"> Sair</button>
     <button class="btn-res btn-res-secondary" onclick="closeModal()">Cancelar</button>`,
    logoutBtn
  );
  document.getElementById('confirm-logout').onclick = () => {
    state.userName = '';
    state.isLoggedIn = false;
    state.currentMission = null;
  
    hideAvatarMenu();
    closeModal();
    showScreen('home');
  
    document.getElementById('ninja-name').value = '';
    document.getElementById('ninja-name').focus();

    showToast('Você saiu da sua conta. Até a próxima, shinobi! 🍃', 'info');
  };
}

/* ═══════════════════════════════════════════════════════════════
   HOME
═══════════════════════════════════════════════════════════════ */
 (function initHome() {

  document.getElementById('btn-start').onclick = () => {
    const name = document.getElementById('ninja-name').value.trim();
    if (!name) {
      document.getElementById('ninja-name').focus();
      showToast('Digite seu nome ninja!', 'error');
      return;
    }
    state.userName = name;
    state.isLoggedIn = true;
    saveUserName(name);
    updateAvatar();
    showAvatarMenu();
    playClick();
    startLoading('dashboard');
  };

  document.getElementById('ninja-name').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('btn-start').click();
  });

   
  
})();

/* ═══════════════════════════════════════════════════════════════
   LOADING
═══════════════════════════════════════════════════════════════ */
function startLoading(target) {
  showScreen('loading');
  const bar = document.getElementById('loading-bar');
  const msg = document.getElementById('loading-msg');
  document.getElementById('loading-text').textContent =
    target === 'quiz' ? 'Invocando Pergaminho de Batalha...' : 'Abrindo Registro do Ninja...';
  let pct = 0, mi = 0;
  bar.style.width = '0%';

  const iv = setInterval(() => {
    pct += Math.random() * 10 + 3;
    if (pct > 100) pct = 100;
    bar.style.width = pct + '%';
    const mi2 = Math.floor(pct / 22);
    if (mi2 > mi) { mi = mi2; msg.textContent = LOADING_MSGS[Math.min(mi, LOADING_MSGS.length - 1)]; }
    if (pct >= 100) {
      clearInterval(iv);
      setTimeout(() => { target === 'quiz' ? renderQuiz() : renderDashboard(); }, 300);
    }
  }, 60);
}

/* ═══════════════════════════════════════════════════════════════
   DASHBOARD
═══════════════════════════════════════════════════════════════ */
function renderDashboard() {
  showScreen('dashboard');
  const overallRankKey = getOverallRankKey();
  const overallRank = RANKS[overallRankKey];
  const stats = getOverallStats();

  const rankBar = `
  <div class="rank-bar">
    <div class="rank-bar-left">
      <div class="rank-bar-badge" aria-hidden="true">${overallRank.badge}</div>
      <div class="rank-bar-info">
        <div class="rank-bar-title">${state.userName}</div>
        <div class="rank-bar-rank">${overallRank.rank} · Konoha</div>
        <div class="rank-bar-progress-wrap">
          <div class="rank-bar-progress-label">
            <span>Progresso Ninja</span>
            <span>${stats.progress}%</span>
          </div>
          <div class="rank-bar-progress-track" role="progressbar" aria-valuenow="${stats.progress}" aria-valuemin="0" aria-valuemax="100" aria-label="Progresso geral">
            <div class="rank-bar-progress-fill" style="width:${stats.progress}%"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="rank-bar-stats">
      <div class="rank-stat">
        <div class="rank-stat-n">${stats.done}/6</div>
        <div class="rank-stat-l">Pergaminhos</div>
      </div>
      <div class="rank-stat">
        <div class="rank-stat-n">${stats.avg}%</div>
        <div class="rank-stat-l">Sincronia</div>
      </div>
    </div>
  </div>`;

  const missionsHTML = `
    <div class="section-label">Pergaminhos de Rankeamento</div>
    <div class="missions-grid">
      ${MISSIONS.map((m, idx) => buildMissionCard(m, idx)).join('')}
    </div>`;

  document.getElementById('dash-body').innerHTML = rankBar + missionsHTML;

  MISSIONS.forEach((m, idx) => {
    const card = document.querySelector(`[data-id="${m.id}"]`);
    if (!card) return;
    const unlocked = isMissionUnlocked(idx);
    if (!unlocked) return;

    const btn = card.querySelector('.mission-btn');
    const handler = () => startMission(m.id);
    if (btn) btn.onclick = e => { e.stopPropagation(); handler(); };
    card.onclick = handler;

    const histBtn = card.querySelector('.mission-hist-btn');
    if (histBtn) histBtn.onclick = e => {
      e.stopPropagation();
      openHistoryModal(m, histBtn);
    };
  });
}

function getMissionQuote(missionId) {
  const quotes = {
    'academia': 'As folhas dançam, mas a árvore permanece.',
    'genin':    'Um verdadeiro ninja nunca desiste!',
    'chunin':   'Hehe... você tem potencial.',
    'jounin':   'O importante não é ser o melhor, mas dar o seu melhor.',
    'anbu':     'Nas sombras, protegemos a luz.',
    'hokage':   'Aquele que suporta e protege a todos.'
  };
  return quotes[missionId] || 'O caminho do ninja é árduo.';
}

function getRecommendedRank(missionId) {
  const ranks = {
    'academia': 'Academia',
    'genin':    'Genin',
    'chunin':   'Chunin',
    'jounin':   'Jounin',
    'anbu':     'ANBU',
    'hokage':   'Hokage'
  };
  return ranks[missionId] || '—';
}

function getVisualProgress(score) {
  const filled = Math.ceil(score / 2);
  const empty = 5 - filled;
  return '🌀'.repeat(filled) + '◻️'.repeat(empty);
}

function buildMissionCard(m, idx) {
  const unlocked = isMissionUnlocked(idx);
  const md = getMissionData(m.id);
  const done = md.attempts > 0;
  const master = done && md.bestScore === 10;

  const statusClass = !unlocked ? 'status-locked' : master ? 'status-master' : done ? 'status-done' : 'status-new';
  const statusLabel = !unlocked ? 'Trancada' : master ? 'Completa' : done ? 'Feita' : 'Disponível';

  return `
    <div class="mission-card${!unlocked ? ' locked' : ''}" data-id="${m.id}" style="--mission-color:${m.color}" ${unlocked ? 'role="button" tabindex="0"' : 'aria-disabled="true"'} aria-label="${m.title}${done ? ', completada' : !unlocked ? ', bloqueada' : ''}">
      <div class="mission-top">
        <span class="mission-icon" aria-hidden="true" style="font-family:'Noto Serif JP',serif;font-size:1.6rem;color:${m.color};opacity:0.9;">${m.icon}</span>
        <span class="mission-status ${statusClass}">${statusLabel}</span>
      </div>
      <div class="mission-title-main">${m.title}</div>
      <div class="mission-quote">"${getMissionQuote(m.id)}"</div>
      <div class="mission-meta-single">
        <span>◈ ${getRecommendedRank(m.id)}</span>
        <span>巻 ${md.attempts || 0} tentativa${md.attempts !== 1 ? 's' : ''}</span>
        ${md.bestScore !== null ? `<span aria-label="Progresso: ${md.bestScore} de 10">🌀 ${getVisualProgress(md.bestScore)}</span>` : '<span aria-label="Sem progresso">🌀 ◻️◻️◻️◻️◻️</span>'}
      </div>
      <button class="mission-btn" ${!unlocked ? 'disabled aria-disabled="true"' : ''}>
        ${!unlocked ? '🔒 Selo Proibido' : done ? '↺ Treinar Novamente' : '📜 Aceitar Pergaminho'}
      </button>
      ${done ? `<button class="mission-hist-btn">巻  Ver Tentativas</button>` : ''}
    </div>`;
}

function openHistoryModal(m, openerEl) {
  const md = getMissionData(m.id);
  if (!md.history.length) { showToast('Nenhum treino registrado.', 'info'); return; }

  const rows = md.history.map(h => `
    <div class="modal-hist-row">
      <span class="modal-hist-date">${h.date}</span>
      <span class="modal-hist-score">${h.score}/10</span>
      <span class="modal-hist-rank">${h.rank}</span>
    </div>`).join('');

  const footer = `<button class="btn-res btn-res-secondary" onclick="closeModal()">Fechar</button>`;
  openModal(`${m.icon} ${m.title} — Histórico`, rows, footer, openerEl);
}

/* Suporte a teclado nas mission cards (Enter/Space) */
document.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.mission-card[role="button"]')) {
    e.preventDefault();
    e.target.click();
  }
});

/* ═══════════════════════════════════════════════════════════════
   PROFILE
═══════════════════════════════════════════════════════════════ */
function renderProfile() {
  const overallRankKey = getOverallRankKey();
  const overallRank = RANKS[overallRankKey];
  const stats = getOverallStats();
  const badges = getUnlockedBadges();
  const highestRankKey = getHighestRankKey();
  const highestRank = RANKS[highestRankKey];
  const bestOverallScore = Math.max(...MISSIONS.map(m => getMissionData(m.id).bestScore || 0));
  const progressPct = stats.progress;

  document.getElementById('profile-name').textContent = state.userName;
  document.getElementById('profile-rank-title').innerHTML = `${highestRank.badge} ${highestRank.rank} de Konoha`;
  document.getElementById('profile-avatar-large').textContent = overallRank.badge;
  document.getElementById('profile-missions-done').textContent = `${stats.done}/6`;
  document.getElementById('profile-avg-score').textContent = `${stats.avg}%`;
  document.getElementById('profile-best-score').textContent = bestOverallScore;
  document.getElementById('profile-highest-rank').textContent = highestRank.rank;
  document.getElementById('profile-progress-pct').textContent = `${progressPct}%`;
  document.getElementById('profile-progress-fill').style.width = `${progressPct}%`;

  const allBadges = [
  // --- Progressão de Missões ---
  { id: 'first_mission',   icon: '🥷', label: 'Primeiro Selo',    desc: 'Complete qualquer missão com sucesso' },
  { id: 'all_missions',    icon: '📜', label: 'Pergaminho Lendário', desc: 'Complete todos os 6 pergaminhos' },
  { id: 'perfect',         icon: '🎯', label: 'Kami no Teki',      desc: 'Alcance 10/10 em qualquer missão' },
  { id: 'master',          icon: '🌀', label: 'Mestre da Vila',      desc: 'Domine perfeitamente todas as missões' },

  // --- Ranks Ninja (Progressão de Carreira) ---
  { id: 'genin_promo',     icon: '🍃', label: 'Graduação Genin',     desc: 'Deixe a academia e alcance o rank Genin' },
  { id: 'chunin_elite',    icon: '⚔️', label: 'Chunin da Elite',     desc: 'Passe no exame e alcance o rank Chunin' },
  { id: 'jounin_elite',    icon: '🛡️', label: 'Jonin Especial',      desc: 'Alcance o rank Jonin, a elite ninja' },
  { id: 'anbu_unlocked',   icon: '👺', label: 'Máscara ANBU',        desc: 'Entre para as forças especiais ANBU' },
  { id: 'anbu_ops',        icon: '🗡️', label: 'Operação Tática',     desc: 'Conclua a Missão 5 com rank ANBU' },
  { id: 'hokage_reached',  icon: '🔥', label: 'Sombra do Fogo',      desc: 'Realize o sonho e alcance o rank Hokage' },
  { id: 'legacy_builder', icon: '🏛️', label: 'Construtor de Lendas', desc: 'Complete todas as missões com pelo menos rank Chunin' },
  
  // --- Estatísticas / Grind ---
  { id: 'ten_attempts',    icon: '⚡', label: 'Determinação de Aço', desc: 'Não desista! Realize 10 tentativas' },
  { id: 'rasengan_master', icon: '🌀', label: 'Esfera Espiral',      desc: 'Domine o chakra acumulando 100 acertos' },
];

  const badgesHTML = allBadges.map(b => `
    <div class="profile-badge ${badges.has(b.id) ? 'unlocked' : 'locked'}" role="listitem" aria-label="${b.label}: ${badges.has(b.id) ? 'desbloqueado' : 'bloqueado'}">
      <div class="profile-badge-icon" aria-hidden="true">${b.icon}</div>
      <div class="profile-badge-info">
        <div class="profile-badge-name">${b.label}</div>
        <div class="profile-badge-desc">${b.desc}</div>
      </div>
      <div class="profile-badge-lock" aria-hidden="true">${!badges.has(b.id) ? '🔒' : '✅'}</div>
    </div>
  `).join('');

  document.getElementById('badges-grid').innerHTML = badgesHTML;
}

/* ═══════════════════════════════════════════════════════════════
   QUIZ
═══════════════════════════════════════════════════════════════ */
function startMission(id) {
  playClick();
  state.currentMission = MISSIONS.find(m => m.id === id);
  state.currentQ = 0;
  state.score = 0;
  state.answered = false;
  state.missionQuestions = state.currentMission.questions.map(i => shuffleOptions(ALL_QUESTIONS[i]));
  state.prevOverallRankKey = getOverallRankKey();
  startLoading('quiz');
}

function renderQuiz() {
  showScreen('quiz');
  document.getElementById('quiz-topbar-title').textContent = state.currentMission.title;
  renderQuestion();
}

function renderQuestion() {
  const q = state.missionQuestions[state.currentQ];
  const total = state.missionQuestions.length;
  const techNames = ['Técnica', 'Jutsu', 'Estratégia', 'Sabedoria', 'Revelação'];
  const randomTech = techNames[state.currentQ % techNames.length];

  document.getElementById('quiz-count').textContent = `${state.currentQ + 1}/${total}`;
  document.getElementById('quiz-progress-fill').style.width = `${((state.currentQ + 1) / total) * 100}%`;
  document.getElementById('q-label').textContent = `${randomTech} ${state.currentQ + 1}:`;
  document.getElementById('q-text').textContent = q.q;

  const list = document.getElementById('options-list');
  list.setAttribute('role', 'radiogroup');
  list.setAttribute('aria-label', 'Opções de resposta');
  list.innerHTML = '';

  ['A', 'B', 'C', 'D'].forEach((letter, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt';
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', 'false');
    btn.setAttribute('aria-label', `Opção ${letter}: ${q.o[i]}`);
    btn.innerHTML = `<span class="opt-letter" aria-hidden="true">${letter}</span><span>${q.o[i]}</span>`;
    btn.onclick = () => selectOption(btn, i);
    list.appendChild(btn);
  });

  const nxt = document.getElementById('btn-next');
  nxt.classList.remove('visible');
  state.answered = false;

  const card = document.getElementById('question-card');
  card.style.animation = 'none';
  requestAnimationFrame(() => { card.style.animation = 'cardIn .4s ease both'; });

  // Move foco para a primeira opção após a transição
  requestAnimationFrame(() => {
    const firstOpt = list.querySelector('.opt');
    if (firstOpt) firstOpt.focus();
  });
}

function selectOption(btn, idx) {
  if (state.answered) return;
  state.answered = true;
  playClick();

  const q = state.missionQuestions[state.currentQ];
  const all = document.querySelectorAll('.opt');

  all.forEach(b => {
    b.disabled = true;
    b.setAttribute('aria-checked', b === btn ? 'true' : 'false');
  });

  if (idx === q.a) {
    btn.classList.add('correct');
    btn.setAttribute('aria-label', btn.getAttribute('aria-label') + ' — Correto!');
    state.score++;
    playCorrect();
  } else {
    btn.classList.add('wrong');
    btn.setAttribute('aria-label', btn.getAttribute('aria-label') + ' — Incorreto');
    all[q.a].classList.add('correct');
    all[q.a].setAttribute('aria-label', all[q.a].getAttribute('aria-label') + ' — Resposta correta');
    playWrong();
  }

  const nextBtn = document.getElementById('btn-next');
  nextBtn.classList.add('visible');
  requestAnimationFrame(() => nextBtn.focus());
}

document.getElementById('btn-next').onclick = () => {
  playClick();
  state.currentQ++;
  if (state.currentQ >= state.missionQuestions.length) {
    finishMission();
  } else {
    renderQuestion();
  }
};

document.getElementById('quiz-back').onclick = () => {
  const backBtn = document.getElementById('quiz-back');
  openModal(
    '⚠️ Missão Abortada? ⚠️',
    '<p class="modal-confirm-text">"Desistir no meio do caminho é uma vergonha para seu clã." — Kakashi Hatake<br><br>Deseja realmente abandonar esta missão?</p>',
    `<button class="btn-res btn-res-danger" id="confirm-exit">💔 Abandonar</button>
     <button class="btn-res btn-res-primary" onclick="closeModal()">⚡ Continuar</button>`,
    backBtn
  );
  document.getElementById('confirm-exit').onclick = () => {
    closeModal();
    renderDashboard();
    showScreen('dashboard');
  };
};

/* ═══════════════════════════════════════════════════════════════
   RESULTADO
═══════════════════════════════════════════════════════════════ */
function finishMission() {
  const m = state.currentMission;
  const score = state.score;
  saveMissionResult(m.id, score);

  const rankKey = getRankKey(score, 10);
  const rankData = RANKS[rankKey];
  const md = getMissionData(m.id);

  const missionMessages = {
    'academia': `"${state.userName}, seu chakra ainda é bruto — mas a determinação é o que separa um ninja de um civl." — Iruka-sensei`,
    'genin':    `"${state.userName}, a testa-fé agora é sua. Use-a com responsabilidade." — Terceiro Hokage`,
    'chunin':   `"Você pensa mais rápido do que eu esperava, ${state.userName}. Continue assim e não precisará da minha supervisão." — Tsunade-sama`,
    'jounin':   `"${state.userName}... você evoluiu. Kakashi diria algo inspirador agora — eu prefiro dizer: não decepcione." — Yamato`,
    'anbu':     `Seu nome não será registrado. Seu rosto não será lembrado. Apenas seus resultados importam. Bem-vindo às sombras, ${state.userName}.`,
    'hokage':   `"${state.userName} provou o que precisava ser provado. A Vila da Folha tem um guardião à altura." — Pergaminho do Conselho`,
  };

  const customMsg = missionMessages[state.currentMission.id] || rankData.phrase;
  document.getElementById('result-phrase').innerHTML = customMsg;
  document.getElementById('result-rank-badge').textContent = rankData.badge;
  document.getElementById('result-mission-name').textContent = m.title;
  document.getElementById('result-user').textContent = state.userName;
  document.getElementById('result-rank').innerHTML = `${rankData.badge} ${rankData.rank}`;
  document.getElementById('result-score').innerHTML = `${score}<span style="font-size:1.5rem;">/10</span>`;
  document.getElementById('result-score-sub').textContent = `${Math.round((score / 10) * 100)}% de maestria`;

  const hist = document.getElementById('result-history');
  if (md.history.length > 0) {
    hist.innerHTML = `<h3>Histórico desta Missão</h3>` +
      md.history.map(h => `
        <div class="history-row">
          <span class="history-date">${h.date}</span>
          <span class="history-score">${h.score}/10</span>
          <span class="history-rank">${h.rank}</span>
        </div>`).join('');
    hist.style.display = 'block';
  } else {
    hist.style.display = 'none';
  }

  showScreen('result');

  const newRankKey = getOverallRankKey();
  if (RANK_ORDER.indexOf(newRankKey) > RANK_ORDER.indexOf(state.prevOverallRankKey)) {
    setTimeout(() => showRankUnlock(newRankKey), 900);
  }
}

function showRankUnlock(rankKey) {
  const r = RANKS[rankKey];
  const lt = document.getElementById('level-transition');
  document.getElementById('lt-rank-badge').textContent = r.badge;
  document.getElementById('lt-name').textContent = r.rank;

  const epicMessages = {
    'genin':   'Seu nome foi registrado nos pergaminhos da Vila. O primeiro passo de muitos.',
    'chunin':  'O Conselho reconheceu seu julgamento em campo. Você lidera agora.',
    'jounin':  'Apenas os mais experientes chegam aqui. Seu chakra foi forjado em batalha.',
    'anbu':    'Sua máscara foi entregue. Sua identidade, apagada. Sirva a Vila nas sombras.',
    'hokage':  'O Chapéu Kage é pesado. Você provou que pode carregá-lo.'
  };

  document.getElementById('lt-sub').textContent = epicMessages[rankKey] || 'Nova patente conquistada.';
  lt.classList.add('show');

  requestAnimationFrame(() => {
    const continueBtn = document.getElementById('lt-continue');
    if (continueBtn) continueBtn.focus();
  });

  playStampSound();
}

function playStampSound() {
  try {
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    const o = ac.createOscillator();
    const g = ac.createGain();
    o.connect(g); g.connect(ac.destination);
    o.type = 'sine'; o.frequency.value = 440;
    g.gain.setValueAtTime(0.15, ac.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.3);
    o.start(); o.stop(ac.currentTime + 0.2);
  } catch {}
}

document.getElementById('lt-continue').onclick = () => {
  document.getElementById('level-transition').classList.remove('show');
};

document.getElementById('btn-retry-mission').onclick = () => {
  playClick();
  startMission(state.currentMission.id);
};

document.getElementById('btn-back-dash').onclick = () => {
  playClick();
  renderDashboard();
  showScreen('dashboard');
};

document.getElementById('profile-back-btn').onclick = () => {
  playClick();
  renderDashboard();
  showScreen('dashboard');
};

document.getElementById('btn-share').onclick = () => {
  playClick();
  openShareCard();
};

/* ═══════════════════════════════════════════════════════════════
   SHARE
═══════════════════════════════════════════════════════════════ */
function openShareCard() {
  const m = state.currentMission;
  const score = state.score;
  const rankKey = getRankKey(score, 10);
  const r = RANKS[rankKey];
  const pct = Math.round((score / 10) * 100);

  const cardHTML = `
    <div class="share-card">
      <div class="share-card-badge">${r.badge}</div>
      <div class="share-card-system">Pergaminho Ninja · Konoha</div>
      <div class="share-card-name">${state.userName}</div>
      <div class="share-card-mission">${m.title}</div>
      <div class="share-card-rank">${r.rank}</div>
      <div class="share-card-score">${score}/10</div>
      <div class="share-card-score-sub">${pct}% de maestria</div>
      <div class="share-card-divider"></div>
      <div class="share-card-tag">naruto-quiz.app</div>
    </div>`;

  document.getElementById('share-card-wrap').innerHTML = cardHTML;
  document.getElementById('share-overlay').classList.add('open');

  requestAnimationFrame(() => {
    document.getElementById('btn-copy-share').focus();
  });

  document.getElementById('btn-copy-share').onclick = () => {
    const text = `PERGAMINHO NINJA — VILA DA FOLHA\n\n` +
      `「 ${state.userName} 」\n` +
      `📜 Missão: ${m.title}\n` +
      `🏆 Patente Ninja: ${r.rank} ${r.badge}\n` +
      `🌀 Domínio: ${score}/10 técnicas (${pct}%)\n\n` +
      `"${getMissionQuote(m.id)}"\n\n` +
      `🎮 Desafie seu amigo! Será que ele consegue superar sua patente?\n\n`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    showToast('Abrindo WhatsApp...', 'info', 2000);
  };
}

document.getElementById('share-close').onclick = () => document.getElementById('share-overlay').classList.remove('open');
document.getElementById('share-cancel').onclick = () => document.getElementById('share-overlay').classList.remove('open');
document.getElementById('share-overlay').onclick = e => {
  if (e.target === document.getElementById('share-overlay'))
    document.getElementById('share-overlay').classList.remove('open');
};

/* ═══════════════════════════════════════════════════════════════
   EVENT LISTENERS — AVATAR MENU
═══════════════════════════════════════════════════════════════ */
document.getElementById('avatar-btn').onclick = (e) => {
  e.stopPropagation();
  toggleDropdown();
};

document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    const action = item.dataset.action;
    switch(action) {
      case 'profile':   showProfile();       break;
      case 'dashboard': showDashboard();     break;
      case 'ranking':   showRankingGlobal(); break;
      case 'settings':  showSettings();      break;
      case 'logout':    logoutUser();        break;
    }
  });
});

document.addEventListener('click', (e) => {
  const container = document.getElementById('avatar-menu-container');
  const dropdown = document.getElementById('dropdown-menu');
  if (container && dropdown && !container.contains(e.target)) {
    closeDropdown();
  }
});

/* ═══════════════════════════════════════════════════════════════
   KEYBOARD NAVIGATION GLOBAL
═══════════════════════════════════════════════════════════════ */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const dropdown = document.getElementById('dropdown-menu');
    if (dropdown && dropdown.classList.contains('open')) {
      closeDropdown();
      document.getElementById('avatar-btn').focus();
      return;
    }
    const modal = document.getElementById('modal-overlay');
    if (modal && modal.classList.contains('open')) { closeModal(); return; }
    const share = document.getElementById('share-overlay');
    if (share && share.classList.contains('open')) share.classList.remove('open');
    const lt = document.getElementById('level-transition');
    if (lt && lt.classList.contains('show')) lt.classList.remove('show');
  }
});