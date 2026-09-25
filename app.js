// ==========================================
// MPI TKA BAHASA INGGRIS - TEACHER APPLICATION LOGIC
// With Projector-Optimized Side-by-Side Workspace & Interactive Keys
// ==========================================

const STORAGE_KEY = 'mpi_tka_eng_wajib_2026_v1';
const THEME_KEY = 'mpi_tka_theme';

const AppState = {
  currentView: 'landing', // 'landing', 'dashboard', 'text_workspace', 'vocab_lab', 'tka_strategy', 'final_review', 'full_test'
  selectedTextId: 1,
  currentQuestionIndex: 0,
  
  // Theme & Readability settings
  theme: 'light',
  fontSizeLevel: 0, // -1, 0, 1, 2
  fontFamily: 'serif',

  // Storage data
  progress: {
    userAnswers: {}, // { [qId]: { answer: any, isCorrect: bool, timestamp: number } }
    completedTexts: {}
  },

  // Temporary option selections for Teacher presentation
  tempSelections: {}, // { [qId]: answer }

  // Global Vocabulary Lab state
  vocabFilter: 'all', // 'all', 1..6
  vocabActivity: 'flipcard', // 'flipcard', 'matching', 'context', 'list'
  matchingState: { selectedLeft: null, selectedRight: null, matchedPairs: [] },
  contextQuizState: { currentIndex: 0, score: 0, answered: false },

  // Full test / Challenge modes
  testMode: 'normal',
  testQuestions: [],
  testAnswers: {},
  fullTestCompleted: false
};

// ==========================================
// INITIALIZATION & THEME HANDLING
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  loadTheme();
  loadProgress();
  setupGlobalEvents();
  renderApp();
}

function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
  AppState.theme = savedTheme;
  applyTheme(savedTheme);
}

function toggleTheme() {
  const newTheme = AppState.theme === 'light' ? 'dark' : 'light';
  AppState.theme = newTheme;
  localStorage.setItem(THEME_KEY, newTheme);
  applyTheme(newTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeIcon = document.getElementById('theme-icon');
  const themeLabel = document.getElementById('theme-label');
  if (themeIcon && themeLabel) {
    if (theme === 'dark') {
      themeIcon.textContent = '☀️';
      themeLabel.textContent = 'Light Mode';
    } else {
      themeIcon.textContent = '🌙';
      themeLabel.textContent = 'Dark Mode';
    }
  }
}

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      AppState.progress = Object.assign(AppState.progress, parsed);
    }
  } catch (e) {
    console.error('Failed to load progress from localStorage', e);
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(AppState.progress));
  } catch (e) {
    console.error('Failed to save progress to localStorage', e);
  }
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  let icon = 'ℹ️';
  if (type === 'success') icon = '✓';
  if (type === 'error') icon = '⚠️';
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Web Speech API for Word Pronunciation (Failsafe for Mobile & Desktop)
function speakWord(word) {
  if (!('speechSynthesis' in window)) {
    if (typeof showToast === 'function') {
      showToast('Speech synthesis is not supported in this browser.', 'error');
    } else {
      alert('Speech synthesis is not supported in this browser.');
    }
    return;
  }

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    let voices = window.speechSynthesis.getVoices();
    if (voices && voices.length > 0) {
      const enVoice = voices.find(v => v.lang.startsWith('en-US') || v.lang.startsWith('en-GB') || v.lang.startsWith('en'));
      if (enVoice) utterance.voice = enVoice;
    }

    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }

    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 60);
  } catch (e) {
    console.error('Audio TTS error:', e);
  }
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    try { window.speechSynthesis.getVoices(); } catch (e) {}
  };
}

function setupGlobalEvents() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal('reset-confirm-modal');
      closeModal('generic-modal');
    }
  });
}

// ==========================================
// ROUTING & VIEW SWITCHING
// ==========================================
function setView(viewName, textId = null) {
  AppState.currentView = viewName;
  if (textId) AppState.selectedTextId = textId;

  document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

  const activeViewEl = document.getElementById(`view-${viewName}`);
  if (activeViewEl) activeViewEl.classList.add('active');

  const activeNavEl = document.querySelector(`.nav-item[data-view="${viewName}"]`);
  if (activeNavEl) activeNavEl.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

function openTextWorkspace(textId, questionIdx = 0) {
  AppState.selectedTextId = textId;
  AppState.currentQuestionIndex = questionIdx;
  setView('text_workspace');
}

// ==========================================
// RENDER DISPATCHER
// ==========================================
function renderApp() {
  if (AppState.currentView === 'dashboard') {
    renderDashboard();
  } else if (AppState.currentView === 'text_workspace') {
    renderTextWorkspace();
  } else if (AppState.currentView === 'vocab_lab') {
    renderGlobalVocabLab();
  } else if (AppState.currentView === 'tka_strategy') {
    renderGlobalTKAStrategy();
  } else if (AppState.currentView === 'final_review') {
    renderFinalReview();
  } else if (AppState.currentView === 'full_test') {
    renderFullTestMode();
  }
}

// ==========================================
// DASHBOARD RENDERING
// ==========================================
function renderDashboard() {
  const totalQuestions = TKA_DATA.questions.length;
  let answeredCount = 0;
  let correctCount = 0;

  TKA_DATA.questions.forEach(q => {
    const rec = AppState.progress.userAnswers[q.id];
    if (rec) {
      answeredCount++;
      if (rec.isCorrect) correctCount++;
    }
  });

  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  const totalQEl = document.getElementById('stat-total-questions');
  if (totalQEl) totalQEl.textContent = `${answeredCount}/${totalQuestions}`;
  const totalAccEl = document.getElementById('stat-total-accuracy');
  if (totalAccEl) totalAccEl.textContent = `${accuracy}%`;

  const cardsContainer = document.getElementById('dashboard-text-cards');
  if (!cardsContainer) return;
  cardsContainer.innerHTML = '';

  const genreMeta = [
    { genre: "Descriptive Text — Volcanic Island", barClass: "theme-bar-1", excerpt: "Tristan da Cunha is a remote volcanic archipelago situated in the vast, turbulent waters of the South Atlantic Ocean..." },
    { genre: "Descriptive Text — Actor Profile", barClass: "theme-bar-2", excerpt: "Cillian Murphy is an Irish actor widely recognized for his striking physical features and his intense, transformative performances..." },
    { genre: "Descriptive Text — Arctic Facility", barClass: "theme-bar-3", excerpt: "The Global Seed Vault, located on the remote Norwegian island of Spitsbergen in the Svalbard archipelago, is a sophisticated facility..." },
    { genre: "Recount Text — Climate Activism", barClass: "theme-bar-4", excerpt: "Vanessa Nakate's journey as a climate activist began in January 2019, after she became deeply concerned about the high temperatures..." },
    { genre: "Recount Text — Human Rights & Climate", barClass: "theme-bar-5", excerpt: "Archbishop Desmond Tutu was a towering figure in South African history, known globally for his role in ending apartheid..." },
    { genre: "Procedure Text — Appliance Installation", barClass: "theme-bar-6", excerpt: "An Intelligent Robotic Vacuum Cleaner, EcoClin Vacuum, is equipped with both Wet and Dry Cleaning Feature allowing Mopping..." }
  ];

  TKA_DATA.texts.forEach((text, idx) => {
    const textQuestions = TKA_DATA.questions.filter(q => q.textId === text.id);
    let tAnswered = 0;
    let tCorrect = 0;

    textQuestions.forEach(q => {
      const rec = AppState.progress.userAnswers[q.id];
      if (rec) {
        tAnswered++;
        if (rec.isCorrect) tCorrect++;
      }
    });

    const percent = Math.round((tAnswered / textQuestions.length) * 100);
    const meta = genreMeta[idx] || { genre: text.type, barClass: "theme-bar-1", excerpt: text.paragraphs[0] };

    const cardHtml = `
      <div class="text-module-card">
        <div class="card-theme-bar ${meta.barClass}"></div>
        <div>
          <div class="card-top">
            <span class="badge badge-blue">${text.number}</span>
            <span class="badge ${percent === 100 ? 'badge-green' : 'badge-gray'}">${tAnswered}/${textQuestions.length} Qs</span>
          </div>
          <h3 class="text-module-title">${text.title}</h3>
          <div class="text-module-genre">${meta.genre}</div>
          <p class="text-module-excerpt">"${meta.excerpt}"</p>
          
          <div class="card-meta-chips">
            <span class="meta-chip">📖 ${text.paragraphs.length} Paragraphs</span>
            <span class="meta-chip">📚 ${text.vocabulary.length} Vocab Words</span>
            <span class="meta-chip">📝 ${text.questionRange}</span>
          </div>
        </div>

        <div>
          <div class="card-progress-bar">
            <div class="card-progress-fill" style="width: ${percent}%;"></div>
          </div>
          <div class="card-footer">
            <span style="font-size:0.82rem; font-weight:700; color:var(--text-muted);">${percent}% Completed</span>
            <button class="btn btn-primary btn-sm" onclick="openTextWorkspace(${text.id}, 0)">
              ${tAnswered > 0 ? 'Continue Practice →' : 'Start Text →'}
            </button>
          </div>
        </div>
      </div>
    `;
    cardsContainer.insertAdjacentHTML('beforeend', cardHtml);
  });
}

// ==========================================
// SIDE-BY-SIDE WORKSPACE RENDERING
// ==========================================
function renderTextWorkspace() {
  const textData = TKA_DATA.texts.find(t => t.id === AppState.selectedTextId);
  if (!textData) return;

  const questions = TKA_DATA.questions.filter(q => q.textId === textData.id);
  if (AppState.currentQuestionIndex >= questions.length) {
    AppState.currentQuestionIndex = 0;
  }
  const currentQ = questions[AppState.currentQuestionIndex];

  // Render Top Bar Title
  const titleEl = document.getElementById('workspace-text-title');
  if (titleEl) titleEl.textContent = `${textData.number}: ${textData.title}`;

  // 1. Render Left Panel (Reading Passage)
  renderLeftReadingPanel(textData, currentQ);

  // 2. Render Right Panel (Questions Nav & Canvas)
  renderRightPracticePanel(questions, currentQ);
}

function renderLeftReadingPanel(textData, currentQ) {
  const titleEl = document.getElementById('ws-reading-title');
  const citationEl = document.getElementById('ws-reading-citation');
  const contentEl = document.getElementById('ws-reading-content');

  if (titleEl) titleEl.textContent = `${textData.number}: ${textData.title}`;
  if (citationEl) citationEl.textContent = `${textData.sourceCitation} | ${textData.questionRange}`;

  if (!contentEl) return;
  contentEl.innerHTML = '';

  const readingFontSize = getFontSizeStyle(AppState.fontSizeLevel, 'reading');
  contentEl.style.setProperty('--reading-font-size', readingFontSize);
  contentEl.style.fontFamily = AppState.fontFamily === 'sans' ? 'var(--font-sans)' : 'var(--font-serif)';

  textData.paragraphs.forEach((pText, idx) => {
    const pNum = idx + 1;
    const pEl = document.createElement('div');
    pEl.className = 'reading-paragraph';
    pEl.id = `p-${pNum}`;

    let renderedText = pText.replace(/\n/g, '<br>');

    const showEvidence = AppState.showEvidenceForQ === currentQ.id;
    if (showEvidence && currentQ && currentQ.textualEvidence) {
      renderedText = highlightIntegratedEvidence(renderedText, pNum, currentQ.textualEvidence);
    }

    pEl.innerHTML = `<span class="p-number">P${pNum}</span>${renderedText}`;
    contentEl.appendChild(pEl);
  });
}

function highlightIntegratedEvidence(renderedText, pNum, textualEvidence) {
  if (!textualEvidence) return renderedText;

  const regex = /"([^"]+)"/g;
  let match;
  const phrases = [];

  while ((match = regex.exec(textualEvidence)) !== null) {
    const quote = match[1].trim();
    if (quote.length > 3) phrases.push(quote);
  }

  if (phrases.length === 0) {
    const raw = textualEvidence.replace(/^Paragraf\s+\d+:\s*/i, '').trim();
    if (raw.length > 3) phrases.push(raw);
  }

  phrases.forEach(phrase => {
    if (renderedText.includes(phrase)) {
      const replacement = `<span class="evidence-highlight-target"><span class="evidence-badge-tag">P${pNum} Evidence</span>${phrase}</span>`;
      renderedText = renderedText.split(phrase).join(replacement);
    }
  });

  return renderedText;
}

function getFontSizeStyle(level, type = 'reading') {
  if (type === 'reading') {
    if (level === -1) return '0.98rem';
    if (level === 1) return '1.38rem';
    if (level === 2) return '1.58rem';
    return '1.18rem';
  } else {
    if (level === -1) return '0.90rem';
    if (level === 1) return '1.15rem';
    if (level === 2) return '1.28rem';
    return '1.02rem';
  }
}

function changeFontSize(dir) {
  if (dir === 0) AppState.fontSizeLevel = 0;
  else AppState.fontSizeLevel = Math.max(-1, Math.min(2, AppState.fontSizeLevel + dir));
  renderTextWorkspace();
}

function toggleFontFamily() {
  AppState.fontFamily = AppState.fontFamily === 'sans' ? 'serif' : 'sans';
  const label = document.getElementById('font-family-label');
  if (label) label.textContent = AppState.fontFamily === 'sans' ? 'Sans-Serif' : 'Serif';
  renderTextWorkspace();
}

function scrollToEvidenceInReadingPanel(isStudent = false) {
  setTimeout(() => {
    const container = document.getElementById(isStudent ? 'student-left-reading-panel' : 'workspace-left-reading-panel');
    const target = container ? container.querySelector('.evidence-highlight-target') : null;
    if (container && target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 120);
}

function renderRightPracticePanel(questions, currentQ) {
  const navContainer = document.getElementById('ws-practice-q-nav');
  const canvas = document.getElementById('ws-practice-canvas');

  // Render Q-Nav Pills
  if (navContainer) {
    navContainer.innerHTML = '';
    questions.forEach((q, idx) => {
      const pill = document.createElement('button');
      pill.className = `q-nav-pill ${idx === AppState.currentQuestionIndex ? 'active' : ''}`;
      const rec = AppState.progress.userAnswers[q.id];
      if (rec) {
        if (rec.isCorrect) pill.classList.add('answered-correct');
        else pill.classList.add('answered-incorrect');
      }
      pill.textContent = idx + 1;
      pill.onclick = () => {
        AppState.currentQuestionIndex = idx;
        AppState.showEvidenceForQ = null;
        renderTextWorkspace();
      };
      navContainer.appendChild(pill);
    });
  }

  if (!canvas || !currentQ) return;
  canvas.innerHTML = '';

  const strategy = TKA_DATA.strategies.find(s => s.id === currentQ.strategyId);

  let qHtml = `
    <div class="q-badge-row">
      <span class="badge badge-blue">${currentQ.number} (${currentQ.genre})</span>
      <span class="badge badge-cyan" onclick="showStrategyModal('${currentQ.strategyId}')" style="cursor:pointer;" title="Click to view Strategy Guide">🎯 ${strategy ? strategy.name : currentQ.strategyId}</span>
    </div>
    
    <div class="q-title-text">${currentQ.question}</div>
  `;

  const userRec = AppState.progress.userAnswers[currentQ.id];
  const tempChoice = AppState.tempSelections[currentQ.id];

  // Render Options & Input Controls
  if (currentQ.type === 'multiple_choice') {
    qHtml += `<div class="options-list">`;
    const letters = ['A', 'B', 'C', 'D', 'E'];
    currentQ.options.forEach((optStr, idx) => {
      const letter = letters[idx];
      const isSelected = (userRec && userRec.answer === letter) || (tempChoice === letter);
      qHtml += `
        <div class="option-card ${isSelected ? 'selected' : ''}" onclick="selectTeacherMultipleChoice(${currentQ.id}, '${letter}')">
          <div class="opt-radio-circle"></div>
          <div class="opt-text">${optStr}</div>
        </div>
      `;
    });
    qHtml += `</div>`;
  } else if (currentQ.type === 'multiple_select') {
    qHtml += `<div class="options-list">`;
    const selectedIndices = (userRec && Array.isArray(userRec.answer)) ? userRec.answer : (Array.isArray(tempChoice) ? tempChoice : []);
    currentQ.options.forEach((optStr, idx) => {
      const isSelected = selectedIndices.includes(idx);
      qHtml += `
        <div class="checkbox-option-card ${isSelected ? 'selected' : ''}" onclick="toggleTeacherMultiSelect(${currentQ.id}, ${idx})">
          <div class="custom-checkbox-box">${isSelected ? '✓' : ''}</div>
          <div class="opt-text">${optStr}</div>
        </div>
      `;
    });
    qHtml += `</div>`;
  } else if (currentQ.type === 'true_false') {
    const tfState = (userRec && typeof userRec.answer === 'object') ? userRec.answer : (typeof tempChoice === 'object' && tempChoice !== null ? tempChoice : {});
    qHtml += `
      <div class="interactive-table-wrapper">
        <table class="interactive-table">
          <thead>
            <tr>
              <th>Pernyataan (*Statement*)</th>
              <th style="width: 100px; text-align: center;">True (T)</th>
              <th style="width: 100px; text-align: center;">False (F)</th>
            </tr>
          </thead>
          <tbody>
    `;
    currentQ.options.forEach((item, idx) => {
      const val = tfState[idx];
      qHtml += `
        <tr>
          <td>${item.statement}</td>
          <td class="center-align choice-radio-cell" onclick="setTeacherTrueFalse(${currentQ.id}, ${idx}, 'T')">
            <input type="radio" name="t-tf-${currentQ.id}-${idx}" ${val === 'T' ? 'checked' : ''}> True
          </td>
          <td class="center-align choice-radio-cell" onclick="setTeacherTrueFalse(${currentQ.id}, ${idx}, 'F')">
            <input type="radio" name="t-tf-${currentQ.id}-${idx}" ${val === 'F' ? 'checked' : ''}> False
          </td>
        </tr>
      `;
    });
    qHtml += `</tbody></table></div>`;
  } else if (currentQ.type === 'categorization') {
    const cats = currentQ.options.categories;
    const catState = (userRec && typeof userRec.answer === 'object') ? userRec.answer : (typeof tempChoice === 'object' && tempChoice !== null ? tempChoice : {});
    qHtml += `
      <div class="interactive-table-wrapper">
        <table class="interactive-table">
          <thead>
            <tr>
              <th>Deskripsi / Kondisi</th>
              <th style="text-align: center;">${cats[0]}</th>
              <th style="text-align: center;">${cats[1]}</th>
            </tr>
          </thead>
          <tbody>
    `;
    currentQ.options.items.forEach((item, idx) => {
      const val = catState[idx];
      qHtml += `
        <tr>
          <td>${item.statement}</td>
          <td class="center-align choice-radio-cell" onclick="setTeacherCategorization(${currentQ.id}, ${idx}, '${cats[0]}')">
            <input type="radio" name="t-cat-${currentQ.id}-${idx}" ${val === cats[0] ? 'checked' : ''}>
          </td>
          <td class="center-align choice-radio-cell" onclick="setTeacherCategorization(${currentQ.id}, ${idx}, '${cats[1]}')">
            <input type="radio" name="t-cat-${currentQ.id}-${idx}" ${val === cats[1] ? 'checked' : ''}>
          </td>
        </tr>
      `;
    });
    qHtml += `</tbody></table></div>`;
  }

  // Footer Action Buttons
  const isEvidenceSpotlighted = AppState.showEvidenceForQ === currentQ.id;

  qHtml += `
    <div class="q-action-footer">
      <div style="display: flex; gap: 8px;">
        <button class="btn btn-secondary btn-sm" onclick="navigateQuestion(-1)" ${AppState.currentQuestionIndex === 0 ? 'disabled' : ''}>← Prev</button>
        <button class="btn btn-secondary btn-sm" onclick="navigateQuestion(1)" ${AppState.currentQuestionIndex === questions.length - 1 ? 'disabled' : ''}>Next →</button>
      </div>

      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <button class="btn ${isEvidenceSpotlighted ? 'btn-amber' : 'btn-outline'} btn-sm" onclick="spotlightEvidenceTeacher(${currentQ.id})">
          🔦 ${isEvidenceSpotlighted ? 'Hide Evidence Spotlight' : 'Spotlight Evidence in Text'}
        </button>
        <button class="btn btn-primary" onclick="revealOfficialKeyAndDiscussion(${currentQ.id})">
          💡 Show Official Key & Discussion
        </button>
      </div>
    </div>
  `;

  // Discussion section if revealed
  if (userRec || AppState.showDiscussionForQ === currentQ.id) {
    qHtml += renderDiscussionSection(currentQ, userRec);
  }

  canvas.innerHTML = qHtml;
}

// Option Handlers for Teacher Mode
function selectTeacherMultipleChoice(qId, letter) {
  AppState.tempSelections[qId] = letter;
  renderTextWorkspace();
}

function toggleTeacherMultiSelect(qId, idx) {
  let list = AppState.tempSelections[qId];
  if (!Array.isArray(list)) list = [];
  if (list.includes(idx)) list = list.filter(i => i !== idx);
  else list.push(idx);

  AppState.tempSelections[qId] = list;
  renderTextWorkspace();
}

function setTeacherTrueFalse(qId, idx, val) {
  if (!AppState.tempSelections[qId] || typeof AppState.tempSelections[qId] !== 'object') {
    AppState.tempSelections[qId] = {};
  }
  AppState.tempSelections[qId][idx] = val;
  renderTextWorkspace();
}

function setTeacherCategorization(qId, idx, val) {
  if (!AppState.tempSelections[qId] || typeof AppState.tempSelections[qId] !== 'object') {
    AppState.tempSelections[qId] = {};
  }
  AppState.tempSelections[qId][idx] = val;
  renderTextWorkspace();
}

function spotlightEvidenceTeacher(qId) {
  if (AppState.showEvidenceForQ === qId) {
    AppState.showEvidenceForQ = null;
  } else {
    AppState.showEvidenceForQ = qId;
  }
  renderTextWorkspace();
  if (AppState.showEvidenceForQ === qId) {
    scrollToEvidenceInReadingPanel(false);
  }
}

function revealOfficialKeyAndDiscussion(qId) {
  const currentQ = TKA_DATA.questions.find(q => q.id === qId);
  if (!currentQ) return;

  let chosenAns = AppState.tempSelections[qId];
  if (!chosenAns) {
    if (currentQ.type === 'multiple_choice') chosenAns = currentQ.correctAnswer;
    else if (currentQ.type === 'multiple_select') chosenAns = currentQ.correctAnswer;
    else if (currentQ.type === 'true_false') chosenAns = currentQ.options.map(o => o.correct);
    else if (currentQ.type === 'categorization') chosenAns = currentQ.options.items.map(i => i.category);
  }

  evaluateAnswer(qId, chosenAns);
  AppState.showDiscussionForQ = qId;
  AppState.showEvidenceForQ = qId;
  renderTextWorkspace();
  scrollToEvidenceInReadingPanel(false);
}

function evaluateAnswer(qId, chosenAns) {
  const q = TKA_DATA.questions.find(item => item.id === qId);
  if (!q) return;

  let isCorrect = false;
  if (q.type === 'multiple_choice') {
    isCorrect = chosenAns === q.correctAnswer;
  } else if (q.type === 'multiple_select') {
    if (Array.isArray(chosenAns) && chosenAns.length === q.correctAnswer.length) {
      const sortedChoice = [...chosenAns].sort();
      const sortedKey = [...q.correctAnswer].sort();
      isCorrect = JSON.stringify(sortedChoice) === JSON.stringify(sortedKey);
    }
  } else if (q.type === 'true_false') {
    if (typeof chosenAns === 'object' && chosenAns !== null) {
      let matched = true;
      q.options.forEach((opt, idx) => {
        if (chosenAns[idx] !== opt.correct) matched = false;
      });
      isCorrect = matched;
    }
  } else if (q.type === 'categorization') {
    if (typeof chosenAns === 'object' && chosenAns !== null) {
      let matched = true;
      q.options.items.forEach((item, idx) => {
        if (chosenAns[idx] !== item.category) matched = false;
      });
      isCorrect = matched;
    }
  }

  AppState.progress.userAnswers[qId] = {
    answer: chosenAns,
    isCorrect: isCorrect,
    timestamp: Date.now()
  };
  saveProgress();
}

function toggleEvidenceHighlight(qId) {
  spotlightEvidenceTeacher(qId);
}

function navigateQuestion(dir) {
  const textQuestions = TKA_DATA.questions.filter(q => q.textId === AppState.selectedTextId);
  const newIdx = AppState.currentQuestionIndex + dir;
  if (newIdx >= 0 && newIdx < textQuestions.length) {
    AppState.currentQuestionIndex = newIdx;
    AppState.showEvidenceForQ = null;
    renderTextWorkspace();
  }
}

function formatCorrectAnswerText(q) {
  if (q.type === 'multiple_choice') {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const idx = letters.indexOf(q.correctAnswer);
    const text = idx >= 0 ? q.options[idx] : q.correctAnswer;
    return `<div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-top:4px;">
              <span class="badge badge-green" style="font-size: 1rem; padding: 4px 10px;">(${q.correctAnswer})</span>
              <span style="font-weight: 700; color: var(--text-main);">${text}</span>
            </div>`;
  } else if (q.type === 'multiple_select') {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const formatted = q.correctAnswer.map(i => `<div style="margin-bottom:4px;"><span class="badge badge-green">(${letters[i]})</span> ${q.options[i]}</div>`).join('');
    return `<div style="margin-top: 6px; line-height: 1.6;">${formatted}</div>`;
  } else if (q.type === 'true_false') {
    const formatted = q.options.map((opt, i) => `<div style="margin-bottom:4px;"><strong>Pernyataan ${i+1}:</strong> ${opt.statement} → <span class="badge ${opt.correct === 'T' ? 'badge-green' : 'badge-red'}">${opt.correct === 'T' ? 'TRUE (T)' : 'FALSE (F)'}</span></div>`).join('');
    return `<div style="margin-top: 6px; line-height: 1.6;">${formatted}</div>`;
  } else if (q.type === 'categorization') {
    const formatted = q.options.items.map((item, i) => `<div style="margin-bottom:4px;"><strong>Item ${i+1}:</strong> ${item.statement} → <span class="badge badge-blue">${item.category}</span></div>`).join('');
    return `<div style="margin-top: 6px; line-height: 1.6;">${formatted}</div>`;
  }
  return q.correctAnswer || '';
}

function formatExplanationHtml(text) {
  if (!text) return '';
  let lines = text.split('\n');
  let html = '';
  lines.forEach(line => {
    let trimmed = line.trim();
    if (trimmed.startsWith(';')) {
      html += `<div style="padding-left: 14px; margin-bottom: 6px; color: var(--text-main); font-weight: 500; line-height: 1.6;">${trimmed.replace(/^;/, '<span style="color:var(--academic-blue); font-weight:900; margin-right:6px;">;</span>')}</div>`;
    } else if (trimmed.startsWith('•')) {
      html += `<div style="padding-left: 14px; margin-bottom: 6px; color: var(--text-main); font-weight: 600; line-height: 1.6;">${trimmed.replace(/^•/, '<span style="color:var(--accent-amber); font-weight:900; margin-right:6px;">•</span>')}</div>`;
    } else if (trimmed.startsWith('💡') || trimmed.startsWith('1.') || trimmed.startsWith('2.') || trimmed.startsWith('3.') || trimmed.startsWith('4.')) {
      html += `<div style="font-weight: 800; color: var(--text-main); margin-top: 12px; margin-bottom: 6px; font-size: 0.98rem;">${trimmed}</div>`;
    } else if (trimmed) {
      html += `<div style="margin-bottom: 6px; line-height: 1.6;">${trimmed}</div>`;
    } else {
      html += `<div style="height: 6px;"></div>`;
    }
  });
  return html;
}

function renderDiscussionSection(currentQ, userRec) {
  const isCorrect = userRec ? userRec.isCorrect : true;

  let html = `
    <div class="feedback-container" style="margin-top: 24px;">
      <div class="feedback-banner ${isCorrect ? 'banner-correct' : 'banner-incorrect'}">
        <div class="feedback-banner-title" style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 1.2rem; font-weight: 900; letter-spacing: 0.02em;">
            ${isCorrect ? '✓ CORRECT' : '❌ INCORRECT'}
          </span>
          <span style="font-size: 0.85rem; font-weight: 700; opacity: 0.9;">
            ${isCorrect ? 'Jawaban Sesuai Kunci Resmi' : 'Perlu Evaluasi Alasan'}
          </span>
        </div>

        ${!isCorrect ? `
          <div class="correct-answer-callout" style="background: var(--bg-card); border: 1.5px solid #ef4444; padding: 14px 18px; border-radius: 8px; margin-top: 12px; box-shadow: 0 4px 12px rgba(239, 68, 68, 0.15);">
            <div style="font-weight: 900; color: #dc2626; font-size: 0.92rem; text-transform: uppercase; letter-spacing: 0.04em;">
              📌 JAWABAN YANG BENAR HARUSNYA:
            </div>
            ${formatCorrectAnswerText(currentQ)}
          </div>
        ` : ''}
      </div>

      <div class="discussion-details-box">
        <div class="step-card">
          <div class="step-header" style="display: flex; justify-content: space-between; align-items: center;">
            <span>📌 Bukti Tekstual (Textual Evidence):</span>
            <button class="btn btn-outline btn-sm" onclick="spotlightEvidenceTeacher(${currentQ.id})" style="font-size: 0.78rem; padding: 3px 10px;">
              🔦 ${AppState.showEvidenceForQ === currentQ.id ? 'Hide Spotlight' : 'Spotlight on Text'}
            </button>
          </div>
          <div class="evidence-box">"${currentQ.textualEvidence}"</div>
        </div>

        <div class="step-card">
          <div class="step-header">💡 Pembahasan & Alasan Guru:</div>
          <div class="step-content">${formatExplanationHtml(currentQ.explanation)}</div>
        </div>
  `;

  if (currentQ.distractorAnalysis && Object.keys(currentQ.distractorAnalysis).length > 0) {
    html += `
      <div class="step-card" style="border-left-color: var(--accent-amber);">
        <div class="step-header" style="color: var(--accent-amber);">🔍 Analisis Pengecoh (Distractor Analysis):</div>
        <ul style="padding-left: 1.2rem; color: var(--text-secondary); font-size: 0.9rem;">
    `;
    for (const [key, val] of Object.entries(currentQ.distractorAnalysis)) {
      html += `<li style="margin-bottom: 4px;"><strong>Opsi ${key}:</strong> ${val}</li>`;
    }
    html += `</ul></div>`;
  }

  html += `</div></div>`;
  return html;
}

// ==========================================
// VOCABULARY LAB GATOR & GAMES (90 WORDS)
// ==========================================
function renderGlobalVocabLab() {
  const contentArea = document.getElementById('global-vocab-content-area');
  if (!contentArea) return;

  let vocabList = [];
  TKA_DATA.texts.forEach(text => {
    if (AppState.vocabFilter === 'all' || AppState.vocabFilter === text.id) {
      vocabList = vocabList.concat(text.vocabulary);
    }
  });

  if (AppState.vocabActivity === 'flipcard') {
    renderVocabFlipCards(contentArea, vocabList);
  } else if (AppState.vocabActivity === 'matching') {
    renderVocabMatchingGame(contentArea, vocabList);
  } else if (AppState.vocabActivity === 'context') {
    renderVocabContextChallenge(contentArea, vocabList);
  } else if (AppState.vocabActivity === 'list') {
    renderVocabMasterTable(contentArea, vocabList);
  }
}

function filterVocabByText(textId) {
  AppState.vocabFilter = textId;
  document.querySelectorAll('.vocab-filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-textfilter') == textId);
  });
  renderGlobalVocabLab();
}

function setGlobalVocabActivity(mode) {
  AppState.vocabActivity = mode;
  document.querySelectorAll('.vocab-mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
  });
  renderGlobalVocabLab();
}

function renderVocabFlipCards(container, vocabList) {
  let html = `<div class="flip-cards-grid">`;
  vocabList.forEach((v, idx) => {
    html += `
      <div class="flip-card-wrapper">
        <div class="flip-card-inner" onclick="this.classList.toggle('flipped')">
          <div class="flip-card-front">
            <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted);">WORD #${idx + 1} • CLICK TO FLIP 🔄</div>
            <div>
              <div class="word-title">${v.word}</div>
              <div class="pos-tag">${v.pos}</div>
            </div>
            <div class="hint-text">Pronunciation: ${v.pronunciation}</div>
          </div>
          
          <div class="flip-card-back">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <div class="back-meaning">${v.meaning}</div>
              <button class="btn-listen" onclick="event.stopPropagation(); speakWord('${v.word}')">🔊 Listen</button>
            </div>
            <div class="back-ipa">${v.pronunciation}</div>
            <div class="back-example">
              <strong>Context Sentence:</strong><br>
              "${v.context || v.example}"
            </div>
          </div>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

function renderVocabMatchingGame(container, vocabList) {
  const sampleList = vocabList.slice(0, 10);
  let html = `
    <div style="background:var(--bg-card); padding:20px; border-radius:var(--radius-md); border:1px solid var(--border-color); margin-bottom:16px;">
      <h4 style="font-weight:800; margin-bottom:4px;">🧩 Match the English Word with its Indonesian Meaning</h4>
      <p style="font-size:0.88rem; color:var(--text-muted);">Click a word on the left, then click its matching meaning on the right.</p>
    </div>
    <div class="matching-game-grid">
      <div class="match-column">
  `;

  sampleList.forEach(v => {
    html += `<div class="match-item" onclick="speakWord('${v.word}')">📌 ${v.word} (${v.pos})</div>`;
  });
  html += `</div><div class="match-column">`;
  sampleList.forEach(v => {
    html += `<div class="match-item">💡 ${v.meaning}</div>`;
  });
  html += `</div></div>`;
  container.innerHTML = html;
}

function renderVocabContextChallenge(container, vocabList) {
  let html = `
    <div style="background:var(--bg-card); padding:24px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
      <h3 style="font-weight:800; color:var(--academic-blue); margin-bottom:8px;">💡 Vocabulary Context Challenge</h3>
      <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:20px;">Daftar contoh kalimat kontekstual untuk memperdalam pemahaman 90 kosakata TKA English 2026.</p>
      <div style="display:flex; flex-direction:column; gap:12px;">
  `;

  vocabList.forEach(v => {
    html += `
      <div style="background:var(--bg-card-alt); padding:14px 18px; border-radius:var(--radius-sm); border-left:4px solid var(--academic-blue);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
          <strong style="color:var(--text-main); font-size:1.05rem;">${v.word}</strong>
          <button class="btn-listen" onclick="speakWord('${v.word}')">🔊 ${v.pronunciation}</button>
        </div>
        <div style="color:var(--accent-green); font-weight:700; font-size:0.9rem; margin-bottom:6px;">${v.meaning}</div>
        <div style="font-style:italic; font-family:var(--font-serif); font-size:0.92rem; color:var(--text-secondary);">"${v.context}"</div>
      </div>
    `;
  });

  html += `</div></div>`;
  container.innerHTML = html;
}

function renderVocabMasterTable(container, vocabList) {
  let html = `
    <div class="table-responsive">
      <table class="vocab-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Word</th>
            <th>Part of Speech</th>
            <th>Pronunciation</th>
            <th>Indonesian Meaning</th>
            <th>Context Sentence</th>
            <th>Audio</th>
          </tr>
        </thead>
        <tbody>
  `;

  vocabList.forEach((v, idx) => {
    html += `
      <tr>
        <td style="font-weight:700;">${idx + 1}</td>
        <td style="font-weight:800; color:var(--academic-blue);">${v.word}</td>
        <td><span class="badge badge-gray">${v.pos}</span></td>
        <td>${v.pronunciation}</td>
        <td style="font-weight:700; color:var(--accent-green);">${v.meaning}</td>
        <td style="font-style:italic; font-size:0.88rem;">"${v.context}"</td>
        <td><button class="btn-listen" onclick="speakWord('${v.word}')">🔊</button></td>
      </tr>
    `;
  });

  html += `</tbody></table></div>`;
  container.innerHTML = html;
}

// ==========================================
// TKA STRATEGY RENDERING
// ==========================================
function renderGlobalTKAStrategy() {
  const container = document.getElementById('global-strategy-cards-container');
  if (!container) return;

  let html = '';
  TKA_DATA.strategies.forEach(s => {
    html += `
      <div class="strategy-card">
        <div>
          <div class="strategy-card-title">${s.name}</div>
          ${s.quickQuestion ? `<div class="strategy-quick-q">❓ ${s.quickQuestion}</div>` : ''}
          <ul class="strategy-steps-list">
    `;

    s.steps.forEach(st => {
      html += `<li>${st}</li>`;
    });

    html += `
          </ul>
        </div>
        ${s.formula ? `<div class="strategy-formula-badge">🧮 Formula: ${s.formula}</div>` : ''}
      </div>
    `;
  });

  container.innerHTML = html;
}

function showStrategyModal(strategyId) {
  const strategy = TKA_DATA.strategies.find(s => s.id === strategyId);
  if (!strategy) return;

  const titleEl = document.getElementById('generic-modal-title');
  const bodyEl = document.getElementById('generic-modal-body');

  if (titleEl) titleEl.textContent = strategy.name;
  if (bodyEl) {
    let stepsHtml = `<ol style="padding-left:1.2rem; margin-bottom:16px; font-size:0.95rem; line-height:1.6;">`;
    strategy.steps.forEach(st => { stepsHtml += `<li>${st}</li>`; });
    stepsHtml += `</ol>`;

    bodyEl.innerHTML = `
      <p style="font-style:italic; color:var(--text-muted); margin-bottom:12px;">"${strategy.quickQuestion || ''}"</p>
      <h5 style="color:var(--academic-blue); font-weight:800; margin-bottom:6px;">Execution Steps:</h5>
      ${stepsHtml}
      ${strategy.formula ? `<div class="strategy-formula-badge">🧮 Formula: ${strategy.formula}</div>` : ''}
    `;
  }

  const modal = document.getElementById('generic-modal');
  if (modal) modal.classList.add('active');
}

// ==========================================
// FINAL REVIEW & REPORT GENERATOR
// ==========================================
function renderFinalReview() {
  const container = document.getElementById('final-review-container');
  if (!container) return;

  const totalQuestions = TKA_DATA.questions.length;
  let answeredCount = 0;
  let correctCount = 0;

  TKA_DATA.questions.forEach(q => {
    const rec = AppState.progress.userAnswers[q.id];
    if (rec) {
      answeredCount++;
      if (rec.isCorrect) correctCount++;
    }
  });

  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  let html = `
    <div style="background:var(--bg-card); padding:24px 30px; border-radius:var(--radius-lg); border:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; margin-bottom:24px;">
      <div>
        <h2 style="font-size:1.6rem; font-weight:900; color:var(--text-main); margin-bottom:4px;">🎓 Final TKA Performance Report (32 Questions)</h2>
        <p style="font-size:0.95rem; color:var(--text-muted);">Ringkasan hasil belajar 32 soal TKA English 2026 (6 Teks) Siap Cetak.</p>
      </div>
      <button class="btn btn-primary" onclick="window.print()">🖨️ Cetak / Simpan PDF Laporan</button>
    </div>

    <div class="overview-stats-grid">
      <div class="stat-card">
        <div class="stat-icon">📊</div>
        <div>
          <div class="stat-val">${accuracy}%</div>
          <div class="stat-label">Overall Accuracy Rate</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">✓</div>
        <div>
          <div class="stat-val">${correctCount}/${totalQuestions}</div>
          <div class="stat-label">Correct Answers</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📝</div>
        <div>
          <div class="stat-val">${answeredCount}/${totalQuestions}</div>
          <div class="stat-label">Completed Questions</div>
        </div>
      </div>
    </div>

    <div class="table-responsive" style="margin-top:24px; background:var(--bg-card); border-radius:var(--radius-md); border:1px solid var(--border-color); padding:20px;">
      <h3 style="font-size:1.2rem; font-weight:800; margin-bottom:14px;">Matriks Kunci Jawaban Resmi 1–32</h3>
      <table class="interactive-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Genre Teks</th>
            <th>Judul Teks</th>
            <th>Tipe Soal</th>
            <th>Status Guru / User</th>
            <th>Kunci Jawaban Resmi</th>
          </tr>
        </thead>
        <tbody>
  `;

  TKA_DATA.questions.forEach(q => {
    const textObj = TKA_DATA.texts.find(t => t.id === q.textId);
    const rec = AppState.progress.userAnswers[q.id];
    let statusText = '<span style="color:var(--text-muted);">Not Attempted</span>';
    if (rec) {
      statusText = rec.isCorrect ? '<span style="color:var(--accent-green); font-weight:800;">✓ Correct</span>' : '<span style="color:var(--accent-red); font-weight:800;">✖ Incorrect</span>';
    }

    let keyText = '';
    if (q.type === 'multiple_choice') keyText = `<strong>(${q.correctAnswer})</strong>`;
    else if (q.type === 'multiple_select') keyText = `Centang: <strong>${q.correctAnswer.map(i => i + 1).join(', ')}</strong>`;
    else keyText = `Terlampir di Matriks`;

    html += `
      <tr>
        <td style="font-weight:800;">${q.id}</td>
        <td>${q.genre}</td>
        <td>${textObj ? textObj.title : ''}</td>
        <td><span class="badge badge-gray">${q.type}</span></td>
        <td>${statusText}</td>
        <td>${keyText}</td>
      </tr>
    `;
  });

  html += `</tbody></table></div>`;
  container.innerHTML = html;
}

// ==========================================
// RESET MODAL LOGIC
// ==========================================
function openResetModal() {
  const modal = document.getElementById('reset-confirm-modal');
  if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

function confirmResetProgress() {
  AppState.progress = { userAnswers: {}, completedTexts: {} };
  AppState.tempSelections = {};
  saveProgress();
  closeModal('reset-confirm-modal');
  showToast('All progress has been reset successfully.', 'success');
  renderApp();
}

function startTestMode(mode) {
  showToast(`Starting Mode: ${mode}...`, 'info');
  openTextWorkspace(1, 0);
}
