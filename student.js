// ==========================================
// STUDENT WORKSPACE ENGINE (100% ENGLISH)
// With Student Identity, Reasoning Justification, Mobile Tab Switching,
// Font Controls, and Class-Discussion Performance View
// ==========================================

const STUDENT_STORAGE_KEY = 'mpi_tka_student_worksheet_2026_v1';

const StudentState = {
  currentView: 'dashboard', // 'dashboard', 'text_workspace', 'vocab_hub', 'tka_strategy', 'my_report'
  selectedTextId: 1,
  currentQuestionIndex: 0,
  mobileTab: 'read', // 'read' or 'quest'
  
  fontSizeLevel: 0,
  fontFamily: 'serif',

  identity: {
    name: '',
    class: '',
    date: ''
  },
  
  answers: {}, // { [qId]: answer }
  reasoning: {}, // { [qId]: string }
  isSubmitted: false
};

document.addEventListener('DOMContentLoaded', () => {
  initStudentApp();
});

function initStudentApp() {
  loadStudentTheme();
  loadStudentData();
  renderStudentApp();
}

function loadStudentTheme() {
  const savedTheme = localStorage.getItem('mpi_tka_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  const themeIcon = document.getElementById('theme-icon');
  const themeLabel = document.getElementById('theme-label');
  if (themeIcon && themeLabel) {
    if (savedTheme === 'dark') {
      themeIcon.textContent = '☀️';
      themeLabel.textContent = 'Light Mode';
    } else {
      themeIcon.textContent = '🌙';
      themeLabel.textContent = 'Dark Mode';
    }
  }
}

function toggleStudentTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = current === 'light' ? 'dark' : 'light';
  localStorage.setItem('mpi_tka_theme', newTheme);
  loadStudentTheme();
}

function loadStudentData() {
  try {
    const saved = localStorage.getItem(STUDENT_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      Object.assign(StudentState, parsed);
    }
  } catch (e) {
    console.error('Failed loading student worksheet data', e);
  }

  const nameEl = document.getElementById('student-name');
  const classEl = document.getElementById('student-class');
  const dateEl = document.getElementById('student-date');

  if (nameEl) nameEl.value = StudentState.identity.name || '';
  if (classEl) classEl.value = StudentState.identity.class || '';
  if (dateEl) dateEl.value = StudentState.identity.date || '';
}

function saveStudentData() {
  try {
    localStorage.setItem(STUDENT_STORAGE_KEY, JSON.stringify({
      identity: StudentState.identity,
      answers: StudentState.answers,
      reasoning: StudentState.reasoning,
      isSubmitted: StudentState.isSubmitted
    }));
  } catch (e) {
    console.error('Failed saving student worksheet data', e);
  }
}

function saveStudentIdentity() {
  const nameEl = document.getElementById('student-name');
  const classEl = document.getElementById('student-class');
  const dateEl = document.getElementById('student-date');

  StudentState.identity.name = nameEl ? nameEl.value : '';
  StudentState.identity.class = classEl ? classEl.value : '';
  StudentState.identity.date = dateEl ? dateEl.value : '';
  saveStudentData();
}

// Web Speech API for Word Pronunciation in Student Mode
function speakWord(word) {
  if (!('speechSynthesis' in window)) {
    alert('Speech synthesis is not supported in this browser.');
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

function setStudentView(viewName, textId = null) {
  StudentState.currentView = viewName;
  if (textId) StudentState.selectedTextId = textId;

  document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

  const activeViewEl = document.getElementById(`view-${viewName}`);
  if (activeViewEl) activeViewEl.classList.add('active');

  const activeNavEl = document.querySelector(`.nav-item[data-view="${viewName}"]`);
  if (activeNavEl) activeNavEl.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderStudentApp();
  updateFloatingPeekVisibility();
}

function openStudentTextWorkspace(textId, qIdx = 0) {
  StudentState.selectedTextId = textId;
  StudentState.currentQuestionIndex = qIdx;
  setStudentView('text_workspace');
}

function switchMobileTab(tab) {
  StudentState.mobileTab = tab;
  const btnRead = document.getElementById('btn-mobile-read');
  const btnQuest = document.getElementById('btn-mobile-quest');
  const leftPanel = document.getElementById('student-left-reading-panel');
  const rightPanel = document.getElementById('student-right-practice-panel');

  if (tab === 'read') {
    if (btnRead) btnRead.classList.add('active');
    if (btnQuest) btnQuest.classList.remove('active');
    if (leftPanel) leftPanel.classList.remove('mobile-hidden');
    if (rightPanel) rightPanel.classList.add('mobile-hidden');
  } else {
    if (btnQuest) btnQuest.classList.add('active');
    if (btnRead) btnRead.classList.remove('active');
    if (rightPanel) rightPanel.classList.remove('mobile-hidden');
    if (leftPanel) leftPanel.classList.add('mobile-hidden');
  }
  updateFloatingPeekVisibility();
}

// Floating Bottom-Right (Kanan Bawah) Peek Passage Popup Handler
function togglePeekPassagePopup(forceState) {
  const popupCard = document.getElementById('peek-popup-card');
  if (!popupCard) return;

  const isCurrentlyActive = popupCard.classList.contains('active');
  const shouldOpen = typeof forceState === 'boolean' ? forceState : !isCurrentlyActive;

  if (shouldOpen) {
    const textData = TKA_DATA.texts.find(t => t.id === StudentState.selectedTextId);
    if (textData) {
      const modalTitle = document.getElementById('peek-popup-title');
      const modalContent = document.getElementById('peek-popup-content');
      if (modalTitle) modalTitle.textContent = `${textData.number}: ${textData.title}`;
      if (modalContent) {
        modalContent.innerHTML = '';
        const readingFontSize = getStudentFontSizeStyle(StudentState.fontSizeLevel, 'reading');
        modalContent.style.setProperty('--reading-font-size', readingFontSize);
        modalContent.style.fontFamily = StudentState.fontFamily === 'sans' ? 'var(--font-sans)' : 'var(--font-serif)';

        textData.paragraphs.forEach((pText, idx) => {
          const pEl = document.createElement('div');
          pEl.className = 'reading-paragraph';
          pEl.style.marginBottom = '12px';
          pEl.innerHTML = `<span class="p-number">P${idx + 1}</span>${pText.replace(/\n/g, '<br>')}`;
          modalContent.appendChild(pEl);
        });
      }
    }
    popupCard.classList.add('active');
  } else {
    popupCard.classList.remove('active');
  }
}

function updateFloatingPeekVisibility() {
  const container = document.getElementById('peek-floating-container');
  if (!container) return;
  if (StudentState.currentView === 'text_workspace') {
    container.style.display = 'flex';
  } else {
    container.style.display = 'none';
    togglePeekPassagePopup(false);
  }
}

function openPeekPassageModal() {
  togglePeekPassagePopup(true);
}

function closePeekPassageModal(event) {
  togglePeekPassagePopup(false);
}

function renderStudentApp() {
  if (StudentState.currentView === 'dashboard') {
    renderStudentDashboard();
  } else if (StudentState.currentView === 'text_workspace') {
    renderStudentWorkspace();
  } else if (StudentState.currentView === 'vocab_hub') {
    renderStudentVocabHub();
  } else if (StudentState.currentView === 'tka_strategy') {
    renderStudentTKAStrategy();
  } else if (StudentState.currentView === 'my_report') {
    renderStudentReport();
  }
}

function getStudentFontSizeStyle(level, type = 'reading') {
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

function changeStudentFontSize(dir) {
  if (dir === 0) StudentState.fontSizeLevel = 0;
  else StudentState.fontSizeLevel = Math.max(-1, Math.min(2, StudentState.fontSizeLevel + dir));
  renderStudentWorkspace();
}

function toggleStudentFontFamily() {
  StudentState.fontFamily = StudentState.fontFamily === 'sans' ? 'serif' : 'sans';
  const label = document.getElementById('student-font-family-label');
  if (label) label.textContent = StudentState.fontFamily === 'sans' ? 'Sans-Serif' : 'Serif';
  renderStudentWorkspace();
}

// Student Dashboard Render
function renderStudentDashboard() {
  const cardsContainer = document.getElementById('student-text-cards');
  if (!cardsContainer) return;
  cardsContainer.innerHTML = '';

  TKA_DATA.texts.forEach(text => {
    const textQuestions = TKA_DATA.questions.filter(q => q.textId === text.id);
    let answered = 0;
    textQuestions.forEach(q => {
      if (StudentState.answers[q.id]) answered++;
    });

    const percent = Math.round((answered / textQuestions.length) * 100);

    const cardHtml = `
      <div class="text-module-card">
        <div class="card-theme-bar theme-bar-1"></div>
        <div>
          <div class="card-top">
            <span class="badge badge-blue">${text.number}</span>
            <span class="badge ${percent === 100 ? 'badge-green' : 'badge-gray'}">${answered}/${textQuestions.length} Answered</span>
          </div>
          <h3 class="text-module-title">${text.title}</h3>
          <div class="text-module-genre">${text.type}</div>
          <p class="text-module-excerpt">"${text.paragraphs[0]}"</p>
          
          <div class="card-meta-chips">
            <span class="meta-chip">📖 ${text.paragraphs.length} Paragraphs</span>
            <span class="meta-chip">📝 ${text.questionRange}</span>
          </div>
        </div>

        <div>
          <div class="card-progress-bar">
            <div class="card-progress-fill" style="width: ${percent}%;"></div>
          </div>
          <div class="card-footer">
            <span style="font-size:0.82rem; font-weight:700; color:var(--text-muted);">${percent}% Completed</span>
            <button class="btn btn-primary btn-sm" onclick="openStudentTextWorkspace(${text.id}, 0)">
              Open Worksheet →
            </button>
          </div>
        </div>
      </div>
    `;
    cardsContainer.insertAdjacentHTML('beforeend', cardHtml);
  });
}

// Student Workspace Render
function renderStudentWorkspace() {
  const textData = TKA_DATA.texts.find(t => t.id === StudentState.selectedTextId);
  if (!textData) return;

  const questions = TKA_DATA.questions.filter(q => q.textId === textData.id);
  if (StudentState.currentQuestionIndex >= questions.length) {
    StudentState.currentQuestionIndex = 0;
  }
  const currentQ = questions[StudentState.currentQuestionIndex];

  const titleEl = document.getElementById('student-ws-title');
  if (titleEl) titleEl.textContent = `${textData.number}: ${textData.title}`;

  // 1. Render Left Panel (Reading Passage)
  const rTitle = document.getElementById('student-reading-title');
  const rCitation = document.getElementById('student-reading-citation');
  const rContent = document.getElementById('student-reading-content');

  if (rTitle) rTitle.textContent = `${textData.number}: ${textData.title}`;
  if (rCitation) rCitation.textContent = `${textData.sourceCitation} | ${textData.questionRange}`;

  if (rContent) {
    rContent.innerHTML = '';
    const readingFontSize = getStudentFontSizeStyle(StudentState.fontSizeLevel, 'reading');
    rContent.style.setProperty('--reading-font-size', readingFontSize);
    rContent.style.fontFamily = StudentState.fontFamily === 'sans' ? 'var(--font-sans)' : 'var(--font-serif)';

    textData.paragraphs.forEach((pText, idx) => {
      const pEl = document.createElement('div');
      pEl.className = 'reading-paragraph';
      pEl.innerHTML = `<span class="p-number">P${idx + 1}</span>${pText.replace(/\n/g, '<br>')}`;
      rContent.appendChild(pEl);
    });
  }

  // 2. Render Right Panel (Questions & Reasoning Textarea)
  renderStudentRightPanel(questions, currentQ);
}

function renderStudentRightPanel(questions, currentQ) {
  const pillsContainer = document.getElementById('student-q-nav-pills');
  const canvas = document.getElementById('student-question-canvas');

  if (canvas) {
    canvas.style.fontSize = getStudentFontSizeStyle(StudentState.fontSizeLevel, 'canvas');
    canvas.style.fontFamily = StudentState.fontFamily === 'sans' ? 'var(--font-sans)' : 'var(--font-serif)';
  }

  // Pills Nav
  if (pillsContainer) {
    pillsContainer.innerHTML = '';
    questions.forEach((q, idx) => {
      const pill = document.createElement('button');
      pill.className = `q-nav-pill ${idx === StudentState.currentQuestionIndex ? 'active' : ''}`;
      if (StudentState.answers[q.id]) pill.classList.add('answered-correct');
      pill.textContent = idx + 1;
      pill.onclick = () => {
        StudentState.currentQuestionIndex = idx;
        renderStudentWorkspace();
      };
      pillsContainer.appendChild(pill);
    });
  }

  if (!canvas || !currentQ) return;

  const strategy = TKA_DATA.strategies.find(s => s.id === currentQ.strategyId);
  const studentAns = StudentState.answers[currentQ.id];
  const studentNote = StudentState.reasoning[currentQ.id] || '';

  let qHtml = `
    <div class="q-badge-row" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
      <div style="display: flex; gap: 6px; flex-wrap: wrap; align-items: center;">
        <span class="badge badge-blue">${currentQ.number} (${currentQ.genre})</span>
        <span class="badge badge-cyan">🎯 ${strategy ? strategy.name : currentQ.strategyId}</span>
      </div>
      <button class="btn btn-amber btn-sm" onclick="openPeekPassageModal()">👁️ Peek Passage</button>
    </div>
    
    <div class="q-title-text">${currentQ.question}</div>
  `;

  // Render Options
  if (currentQ.type === 'multiple_choice') {
    qHtml += `<div class="options-list">`;
    const letters = ['A', 'B', 'C', 'D', 'E'];
    currentQ.options.forEach((optStr, idx) => {
      const letter = letters[idx];
      const isSelected = studentAns === letter;
      qHtml += `
        <div class="option-card ${isSelected ? 'selected' : ''}" onclick="studentSelectMultipleChoice('${currentQ.id}', '${letter}')">
          <div class="opt-radio-circle"></div>
          <div class="opt-text">${optStr}</div>
        </div>
      `;
    });
    qHtml += `</div>`;
  } else if (currentQ.type === 'multiple_select') {
    qHtml += `<div class="options-list">`;
    const selectedIndices = Array.isArray(studentAns) ? studentAns : [];
    currentQ.options.forEach((optStr, idx) => {
      const isSelected = selectedIndices.includes(idx);
      qHtml += `
        <div class="checkbox-option-card ${isSelected ? 'selected' : ''}" onclick="studentToggleMultiSelect('${currentQ.id}', ${idx})">
          <div class="custom-checkbox-box">${isSelected ? '✓' : ''}</div>
          <div class="opt-text">${optStr}</div>
        </div>
      `;
    });
    qHtml += `</div>`;
  } else if (currentQ.type === 'true_false') {
    const tfState = (typeof studentAns === 'object' && studentAns !== null) ? studentAns : {};
    qHtml += `
      <div class="interactive-table-wrapper">
        <table class="interactive-table">
          <thead>
            <tr>
              <th>Statement</th>
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
          <td class="center-align choice-radio-cell" onclick="studentSelectTrueFalse('${currentQ.id}', ${idx}, 'T')">
            <input type="radio" name="st-tf-${currentQ.id}-${idx}" ${val === 'T' ? 'checked' : ''}> True
          </td>
          <td class="center-align choice-radio-cell" onclick="studentSelectTrueFalse('${currentQ.id}', ${idx}, 'F')">
            <input type="radio" name="st-tf-${currentQ.id}-${idx}" ${val === 'F' ? 'checked' : ''}> False
          </td>
        </tr>
      `;
    });
    qHtml += `</tbody></table></div>`;
  } else if (currentQ.type === 'categorization') {
    const cats = currentQ.options.categories;
    const catState = (typeof studentAns === 'object' && studentAns !== null) ? studentAns : {};
    qHtml += `
      <div class="interactive-table-wrapper">
        <table class="interactive-table">
          <thead>
            <tr>
              <th>Condition Description</th>
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
          <td class="center-align choice-radio-cell" onclick="studentSelectCategorization('${currentQ.id}', ${idx}, '${cats[0]}')">
            <input type="radio" name="st-cat-${currentQ.id}-${idx}" ${val === cats[0] ? 'checked' : ''}>
          </td>
          <td class="center-align choice-radio-cell" onclick="studentSelectCategorization('${currentQ.id}', ${idx}, '${cats[1]}')">
            <input type="radio" name="st-cat-${currentQ.id}-${idx}" ${val === cats[1] ? 'checked' : ''}>
          </td>
        </tr>
      `;
    });
    qHtml += `</tbody></table></div>`;
  }

  // Student Reasoning Textarea
  qHtml += `
    <div class="reasoning-box-wrapper">
      <div class="reasoning-header">
        <span>🧠 Student Reasoning & Textual Evidence Justification</span>
      </div>
      <div class="reasoning-subtext">Write down your explanation, quote text evidence, or state why you chose your answer for this question.</div>
      <textarea class="student-reason-textarea" placeholder="Type your reasoning and evidence here..." onkeyup="saveStudentReasoning('${currentQ.id}', this.value)">${studentNote}</textarea>
    </div>

    <div class="q-action-footer">
      <div style="display: flex; gap: 8px;">
        <button class="btn btn-secondary btn-sm" onclick="studentNavigateQuestion(-1)" ${StudentState.currentQuestionIndex === 0 ? 'disabled' : ''}>← Prev</button>
        <button class="btn btn-secondary btn-sm" onclick="studentNavigateQuestion(1)" ${StudentState.currentQuestionIndex === questions.length - 1 ? 'disabled' : ''}>Next →</button>
      </div>

      <button class="btn btn-primary" onclick="submitStudentWorksheet()">
        🚀 Save & Open My Performance Summary
      </button>
    </div>
  `;

  canvas.innerHTML = qHtml;
}

// Student Selection Functions
function studentSelectMultipleChoice(qId, letter) {
  StudentState.answers[qId] = letter;
  saveStudentData();
  renderStudentWorkspace();
}

function studentToggleMultiSelect(qId, idx) {
  let list = StudentState.answers[qId] || [];
  if (!Array.isArray(list)) list = [];

  if (list.includes(idx)) {
    list = list.filter(i => i !== idx);
  } else {
    list.push(idx);
  }

  StudentState.answers[qId] = list;
  saveStudentData();
  renderStudentWorkspace();
}

function studentSelectTrueFalse(qId, idx, val) {
  if (!StudentState.answers[qId] || typeof StudentState.answers[qId] !== 'object') {
    StudentState.answers[qId] = {};
  }
  StudentState.answers[qId][idx] = val;
  saveStudentData();
  renderStudentWorkspace();
}

function studentSelectCategorization(qId, idx, val) {
  if (!StudentState.answers[qId] || typeof StudentState.answers[qId] !== 'object') {
    StudentState.answers[qId] = {};
  }
  StudentState.answers[qId][idx] = val;
  saveStudentData();
  renderStudentWorkspace();
}

function saveStudentReasoning(qId, val) {
  StudentState.reasoning[qId] = val;
  saveStudentData();
}

function studentNavigateQuestion(dir) {
  const textQuestions = TKA_DATA.questions.filter(q => q.textId === StudentState.selectedTextId);
  const newIdx = StudentState.currentQuestionIndex + dir;
  if (newIdx >= 0 && newIdx < textQuestions.length) {
    StudentState.currentQuestionIndex = newIdx;
    renderStudentWorkspace();
  }
}

function submitStudentWorksheet() {
  StudentState.isSubmitted = true;
  saveStudentData();
  setStudentView('my_report');
}

// Vocab & Strategy for Student Mode
function renderStudentVocabHub() {
  const container = document.getElementById('student-vocab-content-area');
  const filtersEl = document.getElementById('student-vocab-filters');
  if (!container) return;

  if (filtersEl && filtersEl.children.length === 0) {
    let fHtml = `<button class="vocab-filter-pill active" onclick="setStudentVocabFilter('all', this)">All Texts (90 Words)</button>`;
    TKA_DATA.texts.forEach(t => {
      fHtml += `<button class="vocab-filter-pill" onclick="setStudentVocabFilter(${t.id}, this)">${t.number}: ${t.title}</button>`;
    });
    filtersEl.innerHTML = fHtml;
  }

  let list = [];
  TKA_DATA.texts.forEach(t => {
    if (!StudentState.vocabFilter || StudentState.vocabFilter === 'all' || StudentState.vocabFilter === t.id) {
      list = list.concat(t.vocabulary);
    }
  });

  let html = `<div class="flip-cards-grid">`;
  list.forEach((v, idx) => {
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

function setStudentVocabFilter(textId, btn) {
  StudentState.vocabFilter = textId;
  if (btn) {
    btn.parentElement.querySelectorAll('.vocab-filter-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  renderStudentVocabHub();
}

function renderStudentTKAStrategy() {
  const container = document.getElementById('student-strategy-container');
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

// Student Performance Report Render (NO RIGHT/WRONG STATUS BADGES)
function renderStudentReport() {
  const container = document.getElementById('student-report-container');
  if (!container) return;

  const total = TKA_DATA.questions.length;
  const answeredCount = Object.keys(StudentState.answers).length;

  let html = `
    <div style="background:var(--bg-card); padding:24px 30px; border-radius:var(--radius-lg); border:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; margin-bottom:24px;">
      <div>
        <h2 style="font-size:1.6rem; font-weight:900; color:var(--text-main); margin-bottom:4px;">🎓 Student Worksheet Summary & Response Log</h2>
        <p style="font-size:0.95rem; color:var(--text-muted);">
          Student: <strong>${StudentState.identity.name || 'Anonymous Student'}</strong> | Class/NIS: <strong>${StudentState.identity.class || '-'}</strong> | Date: <strong>${StudentState.identity.date || '-'}</strong>
        </p>
      </div>
      <button class="btn btn-primary" onclick="window.print()">🖨️ Print / Download Worksheet Sheet</button>
    </div>

    <div class="overview-stats-grid">
      <div class="stat-card">
        <div class="stat-icon">📝</div>
        <div>
          <div class="stat-val">${answeredCount} / ${total}</div>
          <div class="stat-label">Questions Completed</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🤝</div>
        <div>
          <div class="stat-val">Class Review</div>
          <div class="stat-label">Evaluation Mode (Teacher Projector)</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📖</div>
        <div>
          <div class="stat-val">6 Texts</div>
          <div class="stat-label">Worksheet Reading Modules</div>
        </div>
      </div>
    </div>

    <div class="table-responsive" style="margin-top:24px; background:var(--bg-card); border-radius:var(--radius-md); border:1px solid var(--border-color); padding:20px;">
      <h3 style="font-size:1.2rem; font-weight:800; margin-bottom:14px;">Detailed Response & Reasoning Log</h3>
      <table class="interactive-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Genre</th>
            <th>Question</th>
            <th>Selected Answer</th>
            <th>Student Reasoning & Evidence</th>
            <th>Worksheet Status</th>
          </tr>
        </thead>
        <tbody>
  `;

  TKA_DATA.questions.forEach(q => {
    const ans = StudentState.answers[q.id];
    const note = StudentState.reasoning[q.id] || '-';
    let userAnsDisplay = '-';
    let statusBadge = '<span style="color:var(--text-muted);">Unanswered</span>';

    if (q.type === 'multiple_choice') {
      userAnsDisplay = ans ? `Option (${ans})` : '-';
      if (ans) statusBadge = '<span style="color:var(--academic-blue); font-weight:700;">✓ Saved</span>';
    } else if (q.type === 'multiple_select') {
      userAnsDisplay = Array.isArray(ans) && ans.length > 0 ? `Option(s): ${ans.map(i => i + 1).join(', ')}` : '-';
      if (Array.isArray(ans) && ans.length > 0) statusBadge = '<span style="color:var(--academic-blue); font-weight:700;">✓ Saved</span>';
    } else {
      userAnsDisplay = ans ? 'Matrix Completed' : '-';
      if (ans) statusBadge = '<span style="color:var(--academic-blue); font-weight:700;">✓ Saved</span>';
    }

    html += `
      <tr>
        <td style="font-weight:800;">${q.id}</td>
        <td>${q.genre}</td>
        <td style="font-size:0.88rem; max-width:260px;">${q.question}</td>
        <td style="font-weight:700; color:var(--text-main);">${userAnsDisplay}</td>
        <td style="font-size:0.88rem; font-style:italic; max-width:320px; color:var(--text-secondary);">"${note}"</td>
        <td>${statusBadge}</td>
      </tr>
    `;
  });

  html += `</tbody></table></div>`;
  container.innerHTML = html;
}
