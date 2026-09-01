/**
 * Main Application Logic & Interactivity
 * 碩士在職專班｜領導與管理 (Week 1)
 */

// Global State
let appMode = 'student'; // 'student' | 'instructor'
let timerInterval = null;
let timerSecondsRemaining = 180 * 60;
let isTimerRunning = false;
let radarChartInstance = null;

// Activity 1 Traits Data
const activity1Traits = [
  { id: 'kpi', name: '達成 KPI', desc: '指標拆解與交付結果', target: null },
  { id: 'system', name: '建立制度', desc: '規範SOP與運作流程', target: null },
  { id: 'cost', name: '控制成本', desc: '預算控管與精實營運', target: null },
  { id: 'problem', name: '解決問題', desc: '障礙排除與維持穩定', target: null },
  { id: 'inspire', name: '激勵員工', desc: '點燃熱情與心理激勵', target: null },
  { id: 'vision', name: '建立願景', desc: '描繪未來與定義意義', target: null },
  { id: 'talent', name: '培養人才', desc: '賦能授權與梯隊養成', target: null },
  { id: 'change', name: '推動改變', desc: '打破現狀與心智重塑', target: null },
];

// Self-Reflection 10 Items
const reflectionItems = [
  { id: 1, text: '1. 我擅長設定明確目標。', dimension: 'mgmt', defaultScore: 3 },
  { id: 2, text: '2. 我擅長追蹤工作進度。', dimension: 'mgmt', defaultScore: 3 },
  { id: 3, text: '3. 我願意充分授權。', dimension: 'lead', defaultScore: 3 },
  { id: 4, text: '4. 我能接受部屬用不同方法完成工作。', dimension: 'mgmt', defaultScore: 3 },
  { id: 5, text: '5. 我會主動傾聽部屬。', dimension: 'lead', defaultScore: 3 },
  { id: 6, text: '6. 我能有效處理團隊衝突。', dimension: 'lead', defaultScore: 3 },
  { id: 7, text: '7. 我能清晰說明「為什麼要做」。', dimension: 'lead', defaultScore: 3 },
  { id: 8, text: '8. 我願意承認自己不知道答案。', dimension: 'lead', defaultScore: 3 },
  { id: 9, text: '9. 我願意培養可能比自己更強的人。', dimension: 'lead', defaultScore: 3 },
  { id: 10, text: '10. 面對改變時，我能帶領別人一起改變。', dimension: 'lead', defaultScore: 3 },
];

let userScores = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3];

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  initWhiteboardTags();
  initActivity1();
  initReflectionSliders();
  initRadarChart();
  restoreSavedState();
  updateTimerDisplay();
});

// Mode Switcher (Student vs Instructor)
function setAppMode(mode) {
  appMode = mode;
  const studentBtn = document.getElementById('mode-student-btn');
  const instructorBtn = document.getElementById('mode-instructor-btn');
  const banner = document.getElementById('instructor-banner');
  const notes = document.querySelectorAll('.instructor-note');

  if (mode === 'instructor') {
    studentBtn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 text-slate-300 hover:text-white hover:bg-slate-700/60 flex items-center gap-1.5';
    instructorBtn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 bg-amber-600 text-white shadow-sm flex items-center gap-1.5';
    banner.classList.remove('hidden');
    notes.forEach(note => note.classList.remove('hidden'));
  } else {
    studentBtn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 bg-brand-600 text-white shadow-sm flex items-center gap-1.5';
    instructorBtn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 text-slate-300 hover:text-white hover:bg-slate-700/60 flex items-center gap-1.5';
    banner.classList.add('hidden');
    notes.forEach(note => note.classList.add('hidden'));
  }
}

// Whiteboard Tag Interactions
function initWhiteboardTags() {
  document.querySelectorAll('.trait-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      tag.classList.toggle('active');
    });
  });
}

// ================= ACTIVITY 1: CARD SORTING =================
function initActivity1() {
  renderActivity1();
}

function renderActivity1() {
  const deckContainer = document.getElementById('deck-container');
  const managerBucket = document.getElementById('bucket-manager');
  const leaderBucket = document.getElementById('bucket-leader');
  const bothBucket = document.getElementById('bucket-both');

  deckContainer.innerHTML = '';
  managerBucket.innerHTML = '';
  leaderBucket.innerHTML = '';
  bothBucket.innerHTML = '';

  let unassignedCount = 0;
  let managerCount = 0;
  let leaderCount = 0;
  let bothCount = 0;

  activity1Traits.forEach(trait => {
    const cardEl = createTraitCardElement(trait);

    if (!trait.target) {
      unassignedCount++;
      deckContainer.appendChild(cardEl);
    } else if (trait.target === 'manager') {
      managerCount++;
      managerBucket.appendChild(cardEl);
    } else if (trait.target === 'leader') {
      leaderCount++;
      leaderBucket.appendChild(cardEl);
    } else if (trait.target === 'both') {
      bothCount++;
      bothBucket.appendChild(cardEl);
    }
  });

  document.getElementById('unassigned-count').innerText = `剩餘 ${unassignedCount} 張卡片`;
  document.getElementById('count-manager').innerText = managerCount;
  document.getElementById('count-leader').innerText = leaderCount;
  document.getElementById('count-both').innerText = bothCount;

  const insight = document.getElementById('activity1-insight');
  if (unassignedCount === 0) {
    insight.classList.remove('hidden');
  } else {
    insight.classList.add('hidden');
  }
}

function createTraitCardElement(trait) {
  const div = document.createElement('div');
  div.className = 'activity-card p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2';
  div.innerHTML = `
    <div class="flex items-center justify-between">
      <h5 class="text-xs font-bold text-slate-900">${trait.name}</h5>
      <span class="text-[10px] text-slate-400 font-mono">${trait.target ? trait.target.toUpperCase() : '未指派'}</span>
    </div>
    <p class="text-[11px] text-slate-500">${trait.desc}</p>
    <div class="flex items-center gap-1 pt-1 border-t border-slate-100 text-[10px]">
      <button onclick="setTraitCategory('${trait.id}', 'manager')" class="px-1.5 py-0.5 rounded ${trait.target === 'manager' ? 'bg-blue-600 text-white font-bold' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}">M</button>
      <button onclick="setTraitCategory('${trait.id}', 'leader')" class="px-1.5 py-0.5 rounded ${trait.target === 'leader' ? 'bg-purple-600 text-white font-bold' : 'bg-purple-50 text-purple-700 hover:bg-purple-100'}">L</button>
      <button onclick="setTraitCategory('${trait.id}', 'both')" class="px-1.5 py-0.5 rounded ${trait.target === 'both' ? 'bg-emerald-600 text-white font-bold' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'}">Both</button>
      ${trait.target ? `<button onclick="setTraitCategory('${trait.id}', null)" class="px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 hover:bg-slate-200 ml-auto" title="撤回"><i class="fa-solid fa-rotate-left"></i></button>` : ''}
    </div>
  `;
  return div;
}

function setTraitCategory(traitId, category) {
  const trait = activity1Traits.find(t => t.id === traitId);
  if (trait) {
    trait.target = category;
    renderActivity1();
    saveToLocalStorage();
  }
}

function resetActivity1() {
  activity1Traits.forEach(t => t.target = null);
  renderActivity1();
  saveToLocalStorage();
}

// ================= ACTIVITY 2: SELECTION & FEEDBACK =================
function updateActivity2Selection() {
  const checkboxes = document.querySelectorAll('input[name="act2-choice"]:checked');
  const countBadge = document.getElementById('activity2-selected-count');
  const count = checkboxes.length;

  countBadge.innerText = `已選擇 ${count} / 3 項`;

  // Limit max 3
  if (count > 3) {
    alert('上任首月資源極其有限，至多只能專注挑選 3 項最關鍵的行動！');
    event.target.checked = false;
    updateActivity2Selection();
    return;
  }

  let mgmtCount = 0;
  let leadCount = 0;
  checkboxes.forEach(cb => {
    if (cb.dataset.type === 'management') mgmtCount++;
    if (cb.dataset.type === 'leadership') leadCount++;
  });

  const feedback = document.getElementById('ratio-feedback');
  const ratioTag = document.getElementById('ratio-tag');

  if (count === 3) {
    ratioTag.innerText = `配置：${mgmtCount} 項 Management + ${leadCount} 項 Leadership`;
    ratioTag.className = 'text-xs font-bold px-2 py-0.5 rounded bg-gold-500/20 text-gold-300 border border-gold-500/30';

    if (mgmtCount === 3) {
      feedback.innerHTML = `<span class="text-blue-300 font-bold">【極端管理偏向】</span> 您全數選擇了流程、KPI與審計機制。這能迅速建立業務秩序，但面對士氣低落、年輕戰將想離職、資深老將觀望的現況，過於冰冷的管理手段極易引發集體反彈或人才加速出走！`;
    } else if (leadCount === 3) {
      feedback.innerHTML = `<span class="text-purple-300 font-bold">【極端領導偏向】</span> 您全數聚焦在 1-on-1、願景與關係修復。這能極佳地暖化人心與留住關鍵人才，但請務必注意公司給予的 6 個月 +15% 績效硬指標，缺少流程與追蹤可能導致進度失控。`;
    } else {
      feedback.innerHTML = `<span class="text-emerald-300 font-bold">【互補兼備的雙軌策略】</span> 恭喜！您兼顧了人心的修復（${leadCount} 項 Leadership）與目標秩序的落實（${mgmtCount} 項 Management）。這正是 Deliver Results + Lead People 的經典實踐！`;
    }
  } else {
    ratioTag.innerText = `已選 ${count} / 3 項`;
    ratioTag.className = 'text-xs font-semibold px-2 py-0.5 bg-slate-800 rounded text-slate-300';
    feedback.innerText = '請在上方挑選 3 項您認為第一個月最關鍵的行動。';
  }

  saveToLocalStorage();
}

// ================= LEADERSHIP SELF-REFLECTION & RADAR CHART =================
function initReflectionSliders() {
  const container = document.getElementById('rating-sliders-container');
  container.innerHTML = '';

  reflectionItems.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5';
    row.innerHTML = `
      <div class="flex items-center justify-between text-xs">
        <span class="font-semibold text-slate-800">${item.text}</span>
        <span id="score-val-${index}" class="font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">${userScores[index]} 分</span>
      </div>
      <div class="flex items-center space-x-3">
        <span class="text-[10px] text-slate-400">1分</span>
        <input type="range" min="1" max="5" step="1" value="${userScores[index]}" oninput="handleScoreChange(${index}, this.value)" class="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer">
        <span class="text-[10px] text-slate-400">5分</span>
      </div>
    `;
    container.appendChild(row);
  });
}

function handleScoreChange(index, value) {
  userScores[index] = parseInt(value, 10);
  document.getElementById(`score-val-${index}`).innerText = `${value} 分`;
  updateRadarChart();
  calculateIndices();
  saveToLocalStorage();
}

function calculateIndices() {
  // Mgmt: Q1, Q2, Q4 (indices 0, 1, 3)
  const mgmtAvg = ((userScores[0] + userScores[1] + userScores[3]) / 3).toFixed(1);
  // Lead: Q3, Q5, Q6, Q7, Q8, Q9, Q10 (indices 2, 4, 5, 6, 7, 8, 9)
  const leadAvg = ((userScores[2] + userScores[4] + userScores[5] + userScores[6] + userScores[7] + userScores[8] + userScores[9]) / 7).toFixed(1);
  const totalAvg = (userScores.reduce((a, b) => a + b, 0) / 10).toFixed(1);

  document.getElementById('average-score-badge').innerText = `均分: ${totalAvg}`;
  document.getElementById('mgmt-score').innerText = `${mgmtAvg} / 5.0`;
  document.getElementById('lead-score').innerText = `${leadAvg} / 5.0`;

  document.getElementById('mgmt-bar').style.width = `${(mgmtAvg / 5) * 100}%`;
  document.getElementById('lead-bar').style.width = `${(leadAvg / 5) * 100}%`;

  const tendencyEl = document.getElementById('profile-tendency');
  if (mgmtAvg > leadAvg + 0.5) {
    tendencyEl.innerText = '偏向執行型管理者 (Execution Focused)';
    tendencyEl.className = 'text-blue-700 font-bold';
  } else if (leadAvg > mgmtAvg + 0.5) {
    tendencyEl.innerText = '偏向影響型領導者 (Influence Focused)';
    tendencyEl.className = 'text-purple-700 font-bold';
  } else {
    tendencyEl.innerText = '均衡型經理人 (Balanced Leader)';
    tendencyEl.className = 'text-teal-700 font-bold';
  }
}

function initRadarChart() {
  const ctx = document.getElementById('leadershipRadarChart').getContext('2d');
  
  const labels = [
    '1.設定目標',
    '2.追蹤進度',
    '3.充分授權',
    '4.接受不同方法',
    '5.主動傾聽',
    '6.處理衝突',
    '7.說明為什麼',
    '8.承認不知答案',
    '9.培養強者',
    '10.帶領改變'
  ];

  radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        label: '個人自評得分',
        data: userScores,
        backgroundColor: 'rgba(13, 148, 136, 0.25)',
        borderColor: '#0d9488',
        borderWidth: 2,
        pointBackgroundColor: '#0f766e',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#0f766e',
        pointRadius: 4,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          min: 0,
          max: 5,
          ticks: {
            stepSize: 1,
            display: false
          },
          grid: {
            color: 'rgba(148, 163, 184, 0.3)'
          },
          angleLines: {
            color: 'rgba(148, 163, 184, 0.3)'
          },
          pointLabels: {
            font: {
              size: 10,
              family: "'Plus Jakarta Sans', 'Noto Sans TC', sans-serif",
              weight: 'bold'
            },
            color: '#334155'
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });

  calculateIndices();
}

function updateRadarChart() {
  if (radarChartInstance) {
    radarChartInstance.data.datasets[0].data = userScores;
    radarChartInstance.update();
  }
}

function updatePriorityImprovement() {
  saveToLocalStorage();
}

function saveAndExportProfile() {
  saveToLocalStorage();
  if (typeof confetti === 'function') {
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.8 } });
  }
  alert('您的個人 Leadership Profile 已成功保存在本機瀏覽器中！\n請保留這份檔案，我們將在第 16 週學期末重新施測比對。');
}

// ================= ONE-MINUTE PAPER =================
function handleOneMinuteSubmit(e) {
  e.preventDefault();
  saveToLocalStorage();

  const status = document.getElementById('paper-saved-status');
  status.classList.remove('opacity-0');
  setTimeout(() => {
    status.classList.add('opacity-0');
  }, 4000);

  if (typeof confetti === 'function') {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.7 } });
  }
  alert('One-Minute Paper 反思卡提交成功！已為您儲存至本機。');
}

function copyOneMinutePaperText() {
  const q1 = document.getElementById('paper-q1').value;
  const q2 = document.getElementById('paper-q2').value;
  const q3 = document.getElementById('paper-q3').value;

  const content = `【碩士在職專班 領導與管理 Week 1 反思卡 (One-Minute Paper)】\n\n` +
    `Q1. 改變對主管角色的想法：\n${q1 || '(未填寫)'}\n\n` +
    `Q2. 身邊主管的 Manager/Leader 觀察：\n${q2 || '(未填寫)'}\n\n` +
    `Q3. 明天最想微調的一個領導行為：\n${q3 || '(未填寫)'}\n`;

  navigator.clipboard.writeText(content).then(() => {
    alert('已將 One-Minute Paper 反思內容複製到剪貼簿！');
  }).catch(() => {
    alert('複製失敗，請手動選取文字。');
  });
}

function printOrExportPaper() {
  window.print();
}

// ================= LIVE CLASS TIMER =================
function toggleTimerModal() {
  const modal = document.getElementById('timer-modal');
  modal.classList.toggle('hidden');
}

function setTimerDuration(minutes, title = '') {
  pauseTimer();
  timerSecondsRemaining = minutes * 60;
  if (title) {
    document.getElementById('timer-stage-title').innerText = title;
  }
  updateTimerDisplay();
}

function toggleTimerRunning() {
  if (isTimerRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  isTimerRunning = true;

  document.getElementById('timer-btn-label').innerText = '暫停計時';
  document.getElementById('timer-btn-icon').className = 'fa-solid fa-pause';
  document.getElementById('timer-toggle-btn').className = 'flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition flex items-center justify-center gap-2';

  timerInterval = setInterval(() => {
    if (timerSecondsRemaining > 0) {
      timerSecondsRemaining--;
      updateTimerDisplay();
    } else {
      pauseTimer();
      alert('⏰ 課堂時段時間已到！');
    }
  }, 1000);
}

function pauseTimer() {
  isTimerRunning = false;
  if (timerInterval) clearInterval(timerInterval);
  document.getElementById('timer-btn-label').innerText = '開始計時';
  document.getElementById('timer-btn-icon').className = 'fa-solid fa-play';
  document.getElementById('timer-toggle-btn').className = 'flex-1 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold text-sm shadow-md transition flex items-center justify-center gap-2';
}

function resetTimer() {
  pauseTimer();
  timerSecondsRemaining = 180 * 60;
  document.getElementById('timer-stage-title').innerText = '全課程 180 分鐘總時程';
  updateTimerDisplay();
}

function startBreakTimer() {
  toggleTimerModal();
  setTimerDuration(10, '10分鐘中場休息倒數');
  startTimer();
}

function updateTimerDisplay() {
  const mins = Math.floor(timerSecondsRemaining / 60);
  const secs = timerSecondsRemaining % 60;
  const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  const big = document.getElementById('timer-display-big');
  const mini = document.getElementById('timer-display-mini');
  if (big) big.innerText = timeStr;
  if (mini) mini.innerText = timeStr;
}

// ================= LOCALSTORAGE PERSISTENCE =================
function saveToLocalStorage() {
  const state = {
    scores: userScores,
    priority: document.getElementById('priority-improvement-select') ? document.getElementById('priority-improvement-select').value : '',
    paperQ1: document.getElementById('paper-q1') ? document.getElementById('paper-q1').value : '',
    paperQ2: document.getElementById('paper-q2') ? document.getElementById('paper-q2').value : '',
    paperQ3: document.getElementById('paper-q3') ? document.getElementById('paper-q3').value : '',
    traits: activity1Traits.map(t => ({ id: t.id, target: t.target }))
  };
  localStorage.setItem('LM_Week1_State', JSON.stringify(state));
}

function restoreSavedState() {
  try {
    const raw = localStorage.getItem('LM_Week1_State');
    if (!raw) return;
    const state = JSON.parse(raw);

    if (state.scores && Array.isArray(state.scores)) {
      userScores = state.scores;
      initReflectionSliders();
      calculateIndices();
    }

    if (state.priority && document.getElementById('priority-improvement-select')) {
      document.getElementById('priority-improvement-select').value = state.priority;
    }

    if (state.paperQ1 && document.getElementById('paper-q1')) {
      document.getElementById('paper-q1').value = state.paperQ1;
    }
    if (state.paperQ2 && document.getElementById('paper-q2')) {
      document.getElementById('paper-q2').value = state.paperQ2;
    }
    if (state.paperQ3 && document.getElementById('paper-q3')) {
      document.getElementById('paper-q3').value = state.paperQ3;
    }

    if (state.traits && Array.isArray(state.traits)) {
      state.traits.forEach(savedT => {
        const found = activity1Traits.find(t => t.id === savedT.id);
        if (found) found.target = savedT.target;
      });
      renderActivity1();
    }
  } catch (e) {
    console.error('Failed to restore state:', e);
  }
}
