// Firebase 連線小工具：前台、後台共用
import { firebaseConfig, FIREBASE_VERSION } from "./firebase-config.js";

const base = `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}`;
let cache = null;

/** 回傳 null 代表尚未設定 Firebase */
export async function loadFirebase() {
  if (!firebaseConfig) return null;
  if (cache) return cache;
  const [appMod, fsMod, authMod] = await Promise.all([
    import(`${base}/firebase-app.js`),
    import(`${base}/firebase-firestore.js`),
    import(`${base}/firebase-auth.js`)
  ]);
  const app = appMod.initializeApp(firebaseConfig);
  cache = {
    db: fsMod.getFirestore(app),
    auth: authMod.getAuth(app),
    fs: fsMod,
    au: authMod
  };
  return cache;
}

/** 週次文件的 id：w11、w12… */
export const weekId = no => `w${no}`;

/** 2026-11-09 → { m:11, d:9 } */
function parts(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}
export function addDays(iso, n) {
  const dt = parts(iso);
  dt.setUTCDate(dt.getUTCDate() + n);
  return dt.toISOString().slice(0, 10);
}
/** 由週一日期算出「11月9日～11月13日」 */
export function rangeText(iso) {
  if (!iso) return "";
  const a = parts(iso), b = parts(addDays(iso, 4));
  return `${a.getUTCMonth() + 1}月${a.getUTCDate()}日～${b.getUTCMonth() + 1}月${b.getUTCDate()}日`;
}
