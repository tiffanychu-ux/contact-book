# 義興國小 三年級資優班 線上聯絡簿

| 頁面 | 給誰 | 網址（開好 GitHub Pages 後） |
|---|---|---|
| 前台 | 家長 | `https://tiffanychu-ux.github.io/contact-book/` |
| 後台 | 老師 | `https://tiffanychu-ux.github.io/contact-book/admin.html` |

- 前台：家長不用登入，只看得到「已發布」的週次，最新一週在最上面。
- 後台：用老師的 Google 帳號登入，分 6 區填寫每週內容，存成「草稿」或「發布」。

## 第一次設定（只要做一次）

### 1. Firebase 主控台（console.firebase.google.com → 專案 tester-f3262）
1. **Firestore Database** → 建立資料庫 → 位置選 `asia-east1`（台灣）→ 正式版模式。
2. **Firestore Database → 規則**：貼上本資料夾的 `firestore.rules` → 發布。
   - ⚠ 如果這個專案的資料庫原本就有其他程式在用，不要整個覆蓋，要把原本的規則保留下來一起放。
3. **Authentication → 登入方式** → 啟用 **Google**。
4. **Authentication → 設定 → 授權網域** → 新增 `tiffanychu-ux.github.io`。

### 2. GitHub
- 儲存庫 Settings → Pages → Source 選 `Deploy from a branch`，Branch 選 `main`、資料夾 `/ (root)` → Save。

### 3. 匯入第 11 週
- 打開後台 → 登入 → 按「⤓ 匯入第 11 週」。

## 每週更新
1. 打開後台 → 按「＋ 新增下一週」（會複製上一週當底稿，日期自動往後一週）。
2. 改掉要換的內容。
3. 第 6 區選「✅ 發布」→ 按「💾 儲存」。

## 換老師帳號
同時修改兩個地方的 email：`js/firebase-config.js` 的 `ADMIN_EMAILS`，以及 `firestore.rules`（改完要重新發布規則）。

## 檔案
- `index.html` 前台、`admin.html` 後台
- `js/firebase-config.js` Firebase 設定與老師帳號
- `js/seed.js` 第 11 週內容（尚未有資料時的備用顯示）
- `firestore.rules` 資料庫規則
