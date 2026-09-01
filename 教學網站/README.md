# 碩士在職專班（EMBA）｜領導與管理 互動教學平台

> **Week 1 主題：從管理者到領導者：Management vs. Leadership**  
> **破題核心提問：「一位稱職的管理者，就一定是一位好的領導者嗎？」**

---

## 🌟 平台設計宗旨與教學模型

本教學網站專為**碩士在職專班（EMBA / Master's In-Service Program）**設計，以《碩士在職專班_領導與管理_第一週完整授課版本.docx》為核心藍本，徹底融合：

$$\text{理論架構} \longrightarrow \text{標竿案例} \longrightarrow \text{職場經驗} \longrightarrow \text{個人反思}$$

雙軌兼備「學員互動沉浸」與「教師備課/授課指引」，滿足課堂 180 分鐘完整研討需求。

---

## 🚀 快速啟動方式

1. **直接開啟**：直接雙擊資料夾內的 [`index.html`](file:///C:/Users/User/Desktop/115學年度/11501%20領導與管理/教學網站/index.html) 或 [`start_server.bat`](file:///C:/Users/User/Desktop/115學年度/11501%20領導與管理/教學網站/start_server.bat)，立即在 Chrome / Edge / Firefox 運作。
2. **零依賴輕量架構**：採用現代前端 CDN（Tailwind CSS, FontAwesome, Chart.js, Canvas-Confetti），無需安裝 Node.js 或龐大套件庫。

---

## 🎯 核心功能亮點

### 1. 🎓 學員互動 ⇄ 👨‍🏫 教師授課 雙模式即時切換
- **學員模式 (Student View)**：隱藏後台備課提示，專注於小組決策模擬、雷達圖自評與反思卡填寫。
- **教師授課導引模式 (Instructor View)**：一鍵開啟各單元專屬的「教學心法、提問引導策略、學員盲點解析與板書建議」。

### 2. ⏱️ 180 分鐘動態倒數儀表板 (Live Class Timer)
- 內建 3 分鐘個人思考、10 分鐘休息、15 分鐘小組、25 分鐘個案研討、45 分鐘核心講授等快速切換按鈕。

### 3. 🧩 Activity 1：8 大特質卡片分類小遊戲
- 將「達成KPI、建立制度、控制成本、解決問題、激勵員工、建立願景、培養人才、推動改變」即時指派至 `Manager` / `Leader` / `Both`，並揭示深層思辨意涵。

### 4. 📊 核心理論雙軸對比矩陣 (Management vs. Leadership)
- 8 大向度對照（Planning vs Vision, Organizing vs Alignment, Budgeting vs Direction, Staffing vs Empowerment 等）。
- 雙商業情境深度解析：「明年營收成長 10%」vs.「導入 AI 全員消極抵抗」。

### 5. 🏢 兩大經典個案研討工作坊
- **Mini Case 1：王經理升官了**（Top Performer 陷阱、微觀管理病態、Best employee ≠ Best manager）。
- **Case 2：微軟文化與領導轉型**（Satya Nadella、Know-it-all 轉向 Learn-it-all、3 大經理人兩難抉擇）。

### 6. 🎮 Activity 2：你剛升主管（首月 3 大決策模擬）
- 面對 10 人問題部門（資深老將、績效低落者、欲離職員工），挑選 3 項行動，系統即時診斷管理與領導的平衡指數。

### 7. 🕸️ Leadership Profile：10 項自評量表與即時動態雷達圖
- 10 題 1–5 分滑桿評估，即時渲染 Chart.js 雷達圖與管理/領導指數。
- 支援 LocalStorage 本機自動保存，留存至**第 16 週學期末重新施測前後呼應**。

### 8. 📝 One-Minute Paper 課堂即時反思卡
- 3 題結構化反思題，支援一鍵儲存、複製到剪貼簿與匯出／列印 PDF。

### 9. 📽️ 內建 24 頁全螢幕 PPT 簡報模式
- 支援鍵盤快速鍵（`←` / `→` / `Space` / `ESC`），完美對應文件第十三節建議的 24 頁簡報大綱與講者提詞。

---

## 📁 檔案結構清單

```
教學網站/
├── index.html          # 主頁面 (包含全部12大模組、雙模式切換、計時器、投影片容器)
├── styles.css          # 自訂高階商學主題樣式、列印樣式與動畫
├── presentation.js     # 24 頁簡報資料集與放映控制引擎
├── app.js              # 核心互動邏輯 (卡片分類、雷達圖、狀態儲存、計時器)
├── start_server.bat    # Windows 快速啟動腳本
└── README.md           # 平台說明與教學設計手冊
```
