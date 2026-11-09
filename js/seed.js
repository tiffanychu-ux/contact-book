// 第 11 週內容（與目前線上聯絡簿相同）。
// 前台在 Firebase 尚未設定或還沒有資料時顯示這份；後台可一鍵「匯入第 11 週」。
export const SEED_WEEKS = [
  {
    no: 11,
    start: "2026-11-09",
    range: "11月9日～11月13日",
    published: true,
    courses: [
      { kind: "A", name: "探索研究",
        items: ["六何法，為誰發明設計師！", "平興國中發明展參訪說明"],
        dates: ["A 組 11/10（二）、11/11（三）", "B 組 11/10（二）、11/13（五）", "C 組 11/9（一）、11/11（三）"],
        empty: "" },
      { kind: "M", name: "多元智慧",
        items: ["平興國中發明展參訪說明"],
        dates: ["D 組 11/9（一）", "E 組 11/11（三）"],
        empty: "" },
      { kind: "T", name: "主題課程",
        items: [],
        dates: [],
        empty: "本週無（11/13（五）下午為平興國中發明展參訪）" }
    ],
    notices: [
      "11/13 (五）平興國中發明展參訪　3:40 義興國小門口放學",
      "讀報學習單 11/12(四）中午12點前繳交"
    ],
    reading: {
      show: true,
      title: "朋友的力量",
      author: "文／臺中市龍津國小四年丙班 陳芃妍",
      source: "《國語週刊》第 2346 期（115 年 10 月 4 日～10 月 10 日）第 3 版〈我也是作家〉",
      summary: "作者在考試寫錯、運動會接力賽、下課摔傷時，都得到朋友的安慰、加油與照顧；也因此決定在朋友遇到困難時，盡力幫助他們。",
      sheet: "資優3 圖解閱讀學習單：把「朋友的力量」比喻成充電器，用電池電量表示心情。",
      tasks: [
        { t: "任務一｜朋友充電站", d: "找出文章中的三件事（期中考寫錯了、運動會接力賽、下課時摔傷了），畫表情、塗電池電量，再寫出朋友做了什麼。" },
        { t: "任務二｜我也是充電器", d: "朋友沒電了，畫出自己怎麼幫他充電，再從「我會說」或「我會做」選一個寫。" }
      ],
      due: "11/12(四）中午12點前繳交"
    },
    diary: {
      think: "平興國中發明展參訪學習單。",
      self: "參觀發明展後的心得"
    }
  }
];

// 空白週的欄位結構（後台新增、補齊缺漏欄位用）
export function blankWeek(no) {
  return {
    no, start: "", range: "", published: false,
    courses: [
      { kind: "A", name: "探索研究", items: [], dates: [], empty: "" },
      { kind: "M", name: "多元智慧", items: [], dates: [], empty: "" },
      { kind: "T", name: "主題課程", items: [], dates: [], empty: "" }
    ],
    notices: [],
    reading: { show: false, title: "", author: "", source: "", summary: "", sheet: "", tasks: [], due: "" },
    diary: { think: "", self: "" }
  };
}
