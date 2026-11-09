// =========================================================
// Firebase 設定
// 1. 到 Firebase 主控台 → 專案設定 → 一般 → 你的應用程式 → 複製 firebaseConfig
// 2. 把下面的 null 換成那一整段 { ... }
// 還沒填之前：前台會顯示內建的第 11 週內容，後台無法登入儲存。
// =========================================================
export const firebaseConfig = {
  apiKey: "AIzaSyA77USLfqcMduEq0AvzfpCTUWorer9uS2E",
  authDomain: "tester-f3262.firebaseapp.com",
  projectId: "tester-f3262",
  storageBucket: "tester-f3262.firebasestorage.app",
  messagingSenderId: "666448952931",
  appId: "1:666448952931:web:7c434dd41f7dfef465c256",
  measurementId: "G-7100GKRX4P"
};

// 可以登入後台、修改內容的 Google 帳號（要和 firestore.rules 裡的名單一致）
export const ADMIN_EMAILS = ["tiffanychu@phy.ncu.edu.tw"];

// Firebase SDK 版本（不用改）
export const FIREBASE_VERSION = "10.12.2";
