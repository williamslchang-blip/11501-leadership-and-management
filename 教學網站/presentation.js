/**
 * 24-Slide Deck Presentation Engine
 * 碩士在職專班｜領導與管理 Week 1 完整投影片
 */

const slideDeck = [
  // P1
  {
    slideNumber: 1,
    category: "P1–3 開場與核心問題",
    title: "碩士在職專班｜領導與管理",
    subtitle: "Week 1：從管理者到領導者 (Management vs. Leadership)",
    content: `
      <div class="text-center space-y-6 max-w-2xl mx-auto py-8">
        <div class="inline-block px-4 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-widest border border-gold-500/30">
          Executive Master Program ‧ 115學年度
        </div>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          從管理者到領導者<br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500">
            Management vs. Leadership
          </span>
        </h1>
        <p class="text-slate-400 text-sm">
          超越職位的法定權力，解構實質影響力的生成與實踐
        </p>
      </div>
    `,
    instructorNotes: "簡報開場，營造沈穩高階的商學院研討氛圍。"
  },
  // P2
  {
    slideNumber: 2,
    category: "P1–3 開場與核心問題",
    title: "本課程 16 週核心學習架構",
    subtitle: "拒絕死記教條，建立雙螺旋學習循環",
    content: `
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 py-6 text-center">
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div class="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto text-lg font-bold">1</div>
          <h3 class="font-bold text-white text-base">理論架構</h3>
          <p class="text-xs text-slate-400">提供系統性思維模型與學術根基</p>
        </div>
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div class="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto text-lg font-bold">2</div>
          <h3 class="font-bold text-white text-base">經典案例</h3>
          <p class="text-xs text-slate-400">解析標竿企業與真實經理人困境</p>
        </div>
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div class="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-lg font-bold">3</div>
          <h3 class="font-bold text-white text-base">職場經驗</h3>
          <p class="text-xs text-slate-400">帶入同儕真實管理現場與痛點激盪</p>
        </div>
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div class="w-10 h-10 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto text-lg font-bold">4</div>
          <h3 class="font-bold text-white text-base">個人反思</h3>
          <p class="text-xs text-slate-400">轉化為自身領導行為的微調與蛻變</p>
        </div>
      </div>
    `,
    instructorNotes: "強調 EMBA 同學豐富的實務經驗是課堂共同創造價值的源泉。"
  },
  // P3
  {
    slideNumber: 3,
    category: "P1–3 開場與核心問題",
    title: "本週破題核心提問",
    subtitle: "Core Provocative Question",
    content: `
      <div class="flex items-center justify-center py-12">
        <div class="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-brand-950 border border-brand-800 text-center max-w-3xl space-y-4 shadow-2xl">
          <i class="fa-solid fa-quote-left text-3xl text-gold-400"></i>
          <h2 class="text-2xl sm:text-4xl font-serif font-bold text-white leading-relaxed">
            「一位稱職的管理者，<br>就一定是一位好的領導者嗎？」
          </h2>
          <p class="text-xs sm:text-sm text-slate-400">
            請將這個問題放在心中，它將貫穿我們今天的 180 分鐘。
          </p>
        </div>
      </div>
    `,
    instructorNotes: "不要直接給答案，留白 10 秒讓學生沉思。"
  },
  // P4
  {
    slideNumber: 4,
    category: "P4–6 我的最好／最差主管",
    title: "課堂思考（3 分鐘）：最好主管的特徵",
    subtitle: "請回想你至今為止的職業生涯",
    content: `
      <div class="max-w-2xl mx-auto space-y-4 py-4">
        <h3 class="text-xl font-bold text-gold-300 text-center">「到目前為止，你遇過最好的主管是什麼樣的人？」</h3>
        <div class="space-y-3 pt-2">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-3 text-slate-200">
            <span class="w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">1</span>
            <span>他做了什麼讓你印象深刻的具體行為？</span>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-3 text-slate-200">
            <span class="w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">2</span>
            <span>為什麼你打從心底願意跟他一起並肩作戰？</span>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-3 text-slate-200">
            <span class="w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">3</span>
            <span>他讓你的工作表現變好，還是只是讓你在過程中感覺良好？</span>
          </div>
        </div>
      </div>
    `,
    instructorNotes: "計時 3 分鐘，邀請 3-5 位同學分享。"
  },
  // P5
  {
    slideNumber: 5,
    category: "P4–6 我的最好／最差主管",
    title: "課堂彙整：好主管的共同特徵",
    subtitle: "從學員經驗提煉出的正向領導行為",
    content: `
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 py-6 max-w-3xl mx-auto">
        <div class="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-200 font-bold text-center text-sm">願意充分授權</div>
        <div class="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-200 font-bold text-center text-sm">主動傾聽與同理</div>
        <div class="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-200 font-bold text-center text-sm">專業強但給空間</div>
        <div class="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-200 font-bold text-center text-sm">公平客觀不偏頗</div>
        <div class="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-200 font-bold text-center text-sm">關鍵時刻承擔責任</div>
        <div class="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-200 font-bold text-center text-sm">高標準且指引方向</div>
      </div>
    `,
    instructorNotes: "白板同步標註，引導大家看出這些特質多半屬於「關係與信任」。"
  },
  // P6
  {
    slideNumber: 6,
    category: "P4–6 我的最好／最差主管",
    title: "反向鏡像：差主管的典型盲點",
    subtitle: "大家剛才提到的行為，究竟是『管理』問題，還是『領導』問題？",
    content: `
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6 max-w-3xl mx-auto">
        <div class="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-200 text-xs font-bold text-center">微觀管理 (Micromanage)</div>
        <div class="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-200 text-xs font-bold text-center">情緒化決策</div>
        <div class="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-200 text-xs font-bold text-center">絕不授權防部屬</div>
        <div class="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-200 text-xs font-bold text-center">搶功勞 ‧ 出事甩鍋</div>
        <div class="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-200 text-xs font-bold text-center">只看冷冰冰的數字</div>
        <div class="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-200 text-xs font-bold text-center">缺乏透明雙向溝通</div>
        <div class="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-200 text-xs font-bold text-center">不做決定 ‧ 延宕逃避</div>
        <div class="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-200 text-xs font-bold text-center">扼殺團隊創新</div>
      </div>
    `,
    instructorNotes: "拋出關鍵句：「這些到底是管理問題，還是領導問題？」"
  },
  // P7
  {
    slideNumber: 7,
    category: "P7–8 Activity 1 特質分類",
    title: "Activity 1：好主管是 Manager 還是 Leader？",
    subtitle: "請小組將下列 8 項特質歸入：Manager / Leader / Both",
    content: `
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6 max-w-3xl mx-auto">
        <div class="p-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 font-bold text-center text-sm">達成 KPI</div>
        <div class="p-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 font-bold text-center text-sm">建立制度</div>
        <div class="p-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 font-bold text-center text-sm">控制成本</div>
        <div class="p-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 font-bold text-center text-sm">解決問題</div>
        <div class="p-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 font-bold text-center text-sm">激勵員工</div>
        <div class="p-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 font-bold text-center text-sm">建立願景</div>
        <div class="p-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 font-bold text-center text-sm">培養人才</div>
        <div class="p-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 font-bold text-center text-sm">推動改變</div>
      </div>
    `,
    instructorNotes: "給予小組 8-10 分鐘討論並進行卡片分類。"
  },
  // P8
  {
    slideNumber: 8,
    category: "P7–8 Activity 1 特質分類",
    title: "Activity 1 教師思辨收束",
    subtitle: "沒有唯一標準答案，探究表象背後的本質",
    content: `
      <div class="space-y-4 max-w-3xl mx-auto py-4">
        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
          <h4 class="font-bold text-gold-300 text-sm">❓ 達成 KPI 真的只是 Manager 的事嗎？</h4>
          <p class="text-xs text-slate-300">常態目標靠管理拆解；突破性目標則需要領導者喚起團隊的內在熱情與使命感。</p>
        </div>
        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
          <h4 class="font-bold text-gold-300 text-sm">❓ 建立制度只是冰冷的 Management 嗎？</h4>
          <p class="text-xs text-slate-300">沒有領導力所凝聚的「信任與對齊」，再嚴密的制度只會變成同仁鑽漏洞與應付的官僚遊戲。</p>
        </div>
      </div>
    `,
    instructorNotes: "破除單純的二分標籤，進入嚴謹的理論體系。"
  },
  // P9
  {
    slideNumber: 9,
    category: "P9–14 Management vs Leadership 核心理論",
    title: "5.1 Management（管理）的核心功能",
    subtitle: "經典四大管理循環：秩序、穩定與可預測性",
    content: `
      <div class="flex items-center justify-center py-6">
        <div class="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-bold text-slate-100">
          <div class="p-4 rounded-2xl bg-blue-950 border border-blue-800 text-center w-36">
            <i class="fa-solid fa-map text-blue-400 text-lg block mb-1"></i> Planning<br><span class="text-xs text-slate-400">計畫設定</span>
          </div>
          <i class="fa-solid fa-arrow-right text-slate-600"></i>
          <div class="p-4 rounded-2xl bg-blue-950 border border-blue-800 text-center w-36">
            <i class="fa-solid fa-network-wired text-blue-400 text-lg block mb-1"></i> Organizing<br><span class="text-xs text-slate-400">組織分工</span>
          </div>
          <i class="fa-solid fa-arrow-right text-slate-600"></i>
          <div class="p-4 rounded-2xl bg-blue-950 border border-blue-800 text-center w-36">
            <i class="fa-solid fa-users text-blue-400 text-lg block mb-1"></i> Leading<br><span class="text-xs text-slate-400">督導執行</span>
          </div>
          <i class="fa-solid fa-arrow-right text-slate-600"></i>
          <div class="p-4 rounded-2xl bg-blue-950 border border-blue-800 text-center w-36">
            <i class="fa-solid fa-sliders text-blue-400 text-lg block mb-1"></i> Controlling<br><span class="text-xs text-slate-400">考核修正</span>
          </div>
        </div>
      </div>
      <p class="text-center text-xs text-slate-400">管理的核心目的：降低複雜度、減少誤差、確保組織按部就班運轉。</p>
    `,
    instructorNotes: "強調 Management 的不可或缺性，沒有管理組織會分崩離析。"
  },
  // P10
  {
    slideNumber: 10,
    category: "P9–14 Management vs Leadership 核心理論",
    title: "管理情境：公司要求明年營收成長 10%",
    subtitle: "此時考驗的是精準的管理落實能力",
    content: `
      <div class="max-w-2xl mx-auto p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 py-6">
        <h4 class="text-sm font-bold text-blue-400">🎯 管理者的標準工具箱：</h4>
        <ul class="list-disc list-inside text-xs sm:text-sm text-slate-300 space-y-2">
          <li><strong>目標分解：</strong>將 +10% 拆解到各季度、各事業部與產品線</li>
          <li><strong>預算規劃：</strong>核算行銷與研發支出，控制營運成本</li>
          <li><strong>人力配置：</strong>招募業務新血，重新劃分責任轄區</li>
          <li><strong>監控修正：</strong>每週業務漏斗會報，落後時即刻介入修正</li>
        </ul>
      </div>
    `,
    instructorNotes: "這是在職經理人每天最熟悉的作戰流程。"
  },
  // P11
  {
    slideNumber: 11,
    category: "P9–14 Management vs Leadership 核心理論",
    title: "5.2 Leadership（領導）的實質範疇",
    subtitle: "激發動機、凝聚心智、推動變革",
    content: `
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 max-w-3xl mx-auto">
        <div class="p-5 rounded-2xl bg-purple-950/60 border border-purple-800/80 text-center space-y-2">
          <i class="fa-solid fa-eye text-purple-400 text-xl"></i>
          <h4 class="text-sm font-bold text-white">Vision (願景)</h4>
          <p class="text-xs text-slate-300">描繪未來吸引人的可能性，給予工作意義</p>
        </div>
        <div class="p-5 rounded-2xl bg-purple-950/60 border border-purple-800/80 text-center space-y-2">
          <i class="fa-solid fa-handshake text-purple-400 text-xl"></i>
          <h4 class="text-sm font-bold text-white">Alignment (對齊)</h4>
          <p class="text-xs text-slate-300">凝聚不同利益關係人，朝共同方向前進</p>
        </div>
        <div class="p-5 rounded-2xl bg-purple-950/60 border border-purple-800/80 text-center space-y-2">
          <i class="fa-solid fa-fire text-purple-400 text-xl"></i>
          <h4 class="text-sm font-bold text-white">Motivation (激勵)</h4>
          <p class="text-xs text-slate-300">滿足人類基本心理需求，激發自驅力</p>
        </div>
      </div>
    `,
    instructorNotes: "領導關乎人心的變革與信任建立。"
  },
  // P12
  {
    slideNumber: 12,
    category: "P9–14 Management vs Leadership 核心理論",
    title: "領導情境：公司導入 AI，部門一半的人抗拒",
    subtitle: "此時職權命令與考核監控徹底失靈",
    content: `
      <div class="max-w-2xl mx-auto p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 py-6">
        <div class="text-xs font-bold text-purple-400">⚡ 為什麼管理工具無效？</div>
        <p class="text-xs text-slate-300 leading-relaxed">
          你有職權要求部屬在日常工作使用 AI 工具，但他們內心充滿恐懼（害怕被取代、害怕能力不足出醜），於是採取「消極抵抗、形式主義」。
        </p>
        <div class="pt-2 text-xs sm:text-sm text-gold-300 font-bold border-t border-slate-800">
          👉 領導解法：建立心理安全感、同理擔憂、將「焦慮」轉化為「自我賦能升級」的共同願景。
        </div>
      </div>
    `,
    instructorNotes: "引導學生共鳴：在組織變革中，人心才是最難跨越的鴻溝。"
  },
  // P13
  {
    slideNumber: 13,
    category: "P9–14 Management vs Leadership 核心理論",
    title: "5.3 核心比較矩陣",
    subtitle: "Management vs. Leadership 8 大向度深度對照",
    content: `
      <div class="overflow-x-auto max-w-3xl mx-auto py-2">
        <table class="w-full text-xs text-left border-collapse">
          <thead>
            <tr class="bg-slate-800 text-slate-300 font-bold">
              <th class="p-2.5">面向</th>
              <th class="p-2.5 text-blue-400">Management</th>
              <th class="p-2.5 text-purple-400">Leadership</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800 text-slate-300">
            <tr><td class="p-2 font-bold">藍圖</td><td class="p-2">Planning (計畫排程)</td><td class="p-2">Vision (願景方向)</td></tr>
            <tr><td class="p-2 font-bold">團隊</td><td class="p-2">Organizing (組織分工)</td><td class="p-2">Alignment (心智對齊)</td></tr>
            <tr><td class="p-2 font-bold">資源</td><td class="p-2">Budgeting (預算控管)</td><td class="p-2">Direction (策略指引)</td></tr>
            <tr><td class="p-2 font-bold">人才</td><td class="p-2">Staffing (人員配置)</td><td class="p-2">Empowerment (賦能授權)</td></tr>
            <tr><td class="p-2 font-bold">驅動</td><td class="p-2">Controlling (考核控制)</td><td class="p-2">Influence (激勵影響)</td></tr>
            <tr><td class="p-2 font-bold">挑戰</td><td class="p-2">Problem solving (排除障礙)</td><td class="p-2">Change (推動變革)</td></tr>
            <tr class="bg-slate-900/80 font-bold text-white"><td class="p-2">哲學</td><td class="p-2 text-blue-300">事情做對 (Do things right)</td><td class="p-2 text-purple-300">做對的事 (Do the right things)</td></tr>
          </tbody>
        </table>
      </div>
    `,
    instructorNotes: "這頁是本週最具學術代表性的對比架構。"
  },
  // P14
  {
    slideNumber: 14,
    category: "P9–14 Management vs Leadership 核心理論",
    title: "第一週核心金句",
    subtitle: "打破非此即彼的錯誤思維",
    content: `
      <div class="flex items-center justify-center py-10">
        <div class="p-8 rounded-3xl bg-gradient-to-r from-blue-950 to-purple-950 border border-slate-700 text-center max-w-2xl space-y-4">
          <div class="text-xs uppercase tracking-widest text-gold-400 font-bold">The Golden Rule</div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white">
            不是 Manager <span class="text-rose-400 underline">OR</span> Leader<br>
            而是 Manager <span class="text-emerald-400 underline">AND</span> Leader！
          </h2>
          <p class="text-xs text-slate-300">
            只有管理，組織窒息僵化；只有領導，組織熱血混亂。
          </p>
        </div>
      </div>
    `,
    instructorNotes: "提醒同學：成熟的經理人必須雙軌並行。"
  },
  // P15
  {
    slideNumber: 15,
    category: "P15–16 王經理個案",
    title: "Mini Case 1：王經理升官了",
    subtitle: "超級業務員升任主管後的困境",
    content: `
      <div class="max-w-2xl mx-auto p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 py-4 text-xs sm:text-sm text-slate-300">
        <p><strong>背景：</strong>王先生曾是業績第一的王牌業務員，升任 12 人團隊主管。</p>
        <p><strong>行為：</strong>嫌部屬慢 ➔ 每天微觀檢查 ➔ 親自改簡報 ➔ 重要客戶自己接 ➔ 所有決策親自點頭 ➔ 給予標準答案。</p>
        <p><strong>結果：</strong>半年後業績雖達標，但<strong>2位優秀同仁離職</strong>，其餘成員不再主動思考，全等他下令。</p>
        <div class="p-3 rounded-xl bg-slate-950 text-gold-300 font-serif italic text-center">
          「我每天比以前更拼命，為什麼團隊反而變差？」
        </div>
      </div>
    `,
    instructorNotes: "請同學小組討論 3 個問題。"
  },
  // P16
  {
    slideNumber: 16,
    category: "P15–16 王經理個案",
    title: "個案核心結論",
    subtitle: "從超級單兵到卓越教練的身份轉變",
    content: `
      <div class="flex items-center justify-center py-10">
        <div class="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center max-w-2xl space-y-4">
          <div class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-amber-500">
            Best Employee ≠ Best Manager
          </div>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
            優秀的個人執行力，絕不等於具備<strong>「透過他人完成目標 (Get things done through others)」</strong>的能力。主管的核心職責不再是自己把球踢進，而是打造一支能打勝仗的球隊！
          </p>
        </div>
      </div>
    `,
    instructorNotes: "強調授權與容錯的重要性。"
  },
  // P17
  {
    slideNumber: 17,
    category: "P17–19 Microsoft / Satya Nadella",
    title: "企業案例：微軟霸權時代的陰影",
    subtitle: "當大型成功企業陷入官僚化與內部內耗",
    content: `
      <div class="max-w-2xl mx-auto p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 py-4 text-xs sm:text-sm text-slate-300">
        <h4 class="font-bold text-rose-400">⚠️ 微軟轉型前的組織病態：</h4>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>部門壁壘 (Silos)：</strong>Windows、Office 各自為政，內部敵意大於外部競爭</li>
          <li><strong>殘酷排名 (Stack Ranking)：</strong>迫使員工踩著同儕往上爬，扼殺團隊協作</li>
          <li><strong>成功依賴：</strong>死守 PC 與授權金舊獲利模式，錯失行動與雲端浪潮</li>
        </ul>
      </div>
    `,
    instructorNotes: "帶入大型企業普遍面臨的組織僵化挑戰。"
  },
  // P18
  {
    slideNumber: 18,
    category: "P17–19 Microsoft / Satya Nadella",
    title: "Nadella 的文化重塑核心",
    subtitle: "由「自認全知」轉向「終身學習」",
    content: `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 max-w-3xl mx-auto">
        <div class="p-6 rounded-2xl bg-rose-950/40 border border-rose-800 text-center space-y-2">
          <div class="text-xs font-bold text-rose-400">過去的微軟文化</div>
          <h3 class="text-xl font-bold text-white">Know-It-All</h3>
          <p class="text-xs text-slate-400">自認最聰明、證明自己、害怕示弱掩蓋錯誤</p>
        </div>
        <div class="p-6 rounded-2xl bg-indigo-950/60 border border-indigo-800 text-center space-y-2">
          <div class="text-xs font-bold text-indigo-400">重塑後的微軟文化</div>
          <h3 class="text-xl font-bold text-white">Learn-It-All</h3>
          <p class="text-xs text-slate-400">以同理心傾聽、勇於承認無知、在實驗中敏捷學習</p>
        </div>
      </div>
    `,
    instructorNotes: "文化不是寫在牆上的標語，而是主管日常的示範。"
  },
  // P19
  {
    slideNumber: 19,
    category: "P17–19 Microsoft / Satya Nadella",
    title: "高階經理人決策兩難",
    subtitle: "如果組織中最強的業務員同時也是文化破壞者...",
    content: `
      <div class="max-w-2xl mx-auto p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 py-6">
        <div class="text-sm font-bold text-gold-400">🔥 課堂思辨題目：</div>
        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed font-serif italic">
          「如果公司裡業績最好、最會賺錢的主管，同時也是最會製造內部對立、辱罵部屬的有毒員工，你會留下他嗎？」
        </p>
        <p class="text-xs text-slate-400">
          留下來：短期業績保證，但長期文化與頂尖人才被摧毀。<br>
          請他走：彰顯組織真正的核心價值觀，但承受短期營收陣痛。
        </p>
      </div>
    `,
    instructorNotes: "讓同學舉手表態，進行即時觀點交鋒。"
  },
  // P20
  {
    slideNumber: 20,
    category: "P20–21 新任主管決策活動",
    title: "Activity 2：你剛升主管（實戰模擬）",
    subtitle: "10 人問題部門，6 個月內績效需提升 15%",
    content: `
      <div class="max-w-2xl mx-auto p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 py-4 text-xs sm:text-sm text-slate-300">
        <h4 class="font-bold text-gold-300">團隊現況盤點：</h4>
        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="p-2.5 rounded bg-slate-950">2位資深老將能力比你強</div>
          <div class="p-2.5 rounded bg-slate-950">1位低績效員工拖累進度</div>
          <div class="p-2.5 rounded bg-slate-950">1位年輕明日之星準備離職</div>
          <div class="p-2.5 rounded bg-slate-950">前任主管極端高壓微觀控制</div>
        </div>
        <div class="pt-2 text-xs font-bold text-white">
          🎯 核心任務：上任第一個月，你只能挑選 3 件事做，你的策略是什麼？
        </div>
      </div>
    `,
    instructorNotes: "啟動小組討論 10 分鐘，各組挑出 3 大優先事項。"
  },
  // P21
  {
    slideNumber: 21,
    category: "P20–21 新任主管決策活動",
    title: "新任主管決策雙欄歸納",
    subtitle: "將學員提案分類至 Management vs. Leadership",
    content: `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 max-w-3xl mx-auto text-xs">
        <div class="p-5 rounded-2xl bg-blue-950/50 border border-blue-800 space-y-2">
          <h4 class="font-bold text-blue-400 text-sm">Management 策略</h4>
          <ul class="list-disc list-inside space-y-1 text-slate-300">
            <li>拆解 KPI 與工作排程追蹤</li>
            <li>改革會議機制，減少虛耗</li>
            <li>啟動低績效員工的 PIP 改善計畫</li>
            <li>盤點資源與中止低投報專案</li>
          </ul>
        </div>
        <div class="p-5 rounded-2xl bg-purple-950/50 border border-purple-800 space-y-2">
          <h4 class="font-bold text-purple-400 text-sm">Leadership 策略</h4>
          <ul class="list-disc list-inside space-y-1 text-slate-300">
            <li>展開深度 1-on-1 面談建立信任</li>
            <li>親自約談挽留關鍵年輕戰將</li>
            <li>向資深前輩請益賦予導師舞台</li>
            <li>召開全體願景共創會議</li>
          </ul>
        </div>
      </div>
    `,
    instructorNotes: "強調第一個月若完全忽略人心與信任，後續管理機制無法落地。"
  },
  // P22
  {
    slideNumber: 22,
    category: "P22 自我評估",
    title: "Leadership Self-Reflection",
    subtitle: "10 項領導行為自評 ‧ 繪製個人領導雷達圖",
    content: `
      <div class="max-w-2xl mx-auto p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-4 py-6">
        <i class="fa-solid fa-chart-pie text-3xl text-teal-400"></i>
        <h3 class="text-xl font-bold text-white">誠實面對自己的領導長短板</h3>
        <p class="text-xs text-slate-300 leading-relaxed">
          請在網頁端完成 10 題 1-5 分自評量表。系統將自動計算管理與領導指數，並儲存本機檔案。<br>
          <strong class="text-gold-300">此檔案將留存至第 16 週最後一堂課再次檢視比對！</strong>
        </p>
      </div>
    `,
    instructorNotes: "給予學員 10 分鐘安靜線上填寫量表。"
  },
  // P23
  {
    slideNumber: 23,
    category: "P23 本週核心收束",
    title: "Three Takeaways：本週三大收束",
    subtitle: "將 180 分鐘的精華濃縮為三個核心心法",
    content: `
      <div class="space-y-3 max-w-3xl mx-auto py-4 text-xs sm:text-sm">
        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start space-x-3">
          <span class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
          <div>
            <strong class="text-white">Management 與 Leadership 互為表裡：</strong>
            <span class="text-slate-400">卓越主管必須同時做到 Deliver Results + Lead People。</span>
          </div>
        </div>
        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start space-x-3">
          <span class="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
          <div>
            <strong class="text-white">職位絕對不等於領導力：</strong>
            <span class="text-slate-400">公司可以任命你為 Manager，但不能命令別人 Trust you。</span>
          </div>
        </div>
        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start space-x-3">
          <span class="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
          <div>
            <strong class="text-white">領導不是只有主管才需要：</strong>
            <span class="text-slate-400">人人皆可實踐「無職權的影響力 (Influence without Authority)」。</span>
          </div>
        </div>
      </div>
    `,
    instructorNotes: "課堂收尾金句，語氣要堅定且充滿啟發感。"
  },
  // P24
  {
    slideNumber: 24,
    category: "P24 課末反思",
    title: "One-Minute Paper 課堂反思",
    subtitle: "在網頁端填寫 3 題精簡反思，為下週研討奠基",
    content: `
      <div class="max-w-2xl mx-auto p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 py-6 text-xs sm:text-sm">
        <h4 class="font-bold text-gold-400">今日反思 3 題：</h4>
        <ol class="list-decimal list-inside space-y-2 text-slate-300">
          <li>今天哪一個觀念最劇烈改變了你原本對「主管」的想法？</li>
          <li>身邊的一位主管比較像 Manager 還是 Leader？為什麼？</li>
          <li>如果明天只能改變自己的一個領導行為，你會改什麼？</li>
        </ol>
        <div class="pt-2 text-center text-xs text-slate-400">
          感謝大家的熱烈參與，我們下週見！
        </div>
      </div>
    `,
    instructorNotes: "放映結束，請學員在教學網站填寫並提交反思卡。"
  }
];

let currentSlideIndex = 0;

function openPresentationMode(slideNum = 1) {
  currentSlideIndex = Math.max(0, Math.min(slideDeck.length - 1, slideNum - 1));
  renderCurrentSlide();
  const overlay = document.getElementById("presentation-overlay");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closePresentationMode() {
  const overlay = document.getElementById("presentation-overlay");
  overlay.classList.add("hidden");
  document.body.style.overflow = "auto";
}

function nextSlide() {
  if (currentSlideIndex < slideDeck.length - 1) {
    currentSlideIndex++;
    renderCurrentSlide();
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    renderCurrentSlide();
  }
}

function renderCurrentSlide() {
  const slide = slideDeck[currentSlideIndex];
  const stage = document.getElementById("slide-content-stage");
  const indicator = document.getElementById("slide-number-indicator");

  indicator.innerText = `Slide ${slide.slideNumber} / ${slideDeck.length}`;

  stage.innerHTML = `
    <div class="slide-card p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl flex flex-col justify-between space-y-6">
      <div>
        <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <span class="text-xs font-mono font-bold text-gold-400 uppercase tracking-wider">${slide.category}</span>
          <span class="text-xs font-mono text-slate-500">P.${slide.slideNumber}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">${slide.title}</h2>
        <p class="text-xs sm:text-sm text-slate-400 mt-1">${slide.subtitle}</p>
      </div>

      <div class="flex-grow flex items-center justify-center">
        <div class="w-full">${slide.content}</div>
      </div>

      <div class="pt-3 border-t border-slate-800 text-[11px] text-amber-300/80 flex items-center gap-1.5">
        <i class="fa-solid fa-chalkboard-user"></i>
        <span><strong>教師提場提示：</strong>${slide.instructorNotes}</span>
      </div>
    </div>
  `;
}

// Keyboard shortcuts for presentation mode
window.addEventListener("keydown", (e) => {
  const overlay = document.getElementById("presentation-overlay");
  if (!overlay || overlay.classList.contains("hidden")) return;

  if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
    e.preventDefault();
    nextSlide();
  } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
    e.preventDefault();
    prevSlide();
  } else if (e.key === "Escape") {
    closePresentationMode();
  }
});
