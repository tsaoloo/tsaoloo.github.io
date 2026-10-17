# 松仁草廬 W03 視覺稽核

日期：2026-10-17（台北時間）  
目標：本機 `tsaoloo.github.io/`；正式站 `https://tsaoloo.github.io/`  
本機施工版本：使用者完成版本上直接修改；GitHub W02 main 基準 `523212c029c468bd30a66b70d22468f6e2477cec`。

## 範圍與結論

- 延續 W03，不重做 W01/W02。修改 10 個正式頁面、共用 CSS、品牌 SVG、ICO、8 個影像檔、SEO 文案及交接文件；未修改 `web/` 原始資料夾或其他 Repository。
- 訪客前台 HTML 與 SEO 根目錄文字已清除「舊站／舊文／舊藏／舊照／舊頁／舊資料／歷史資料／專案檔案」等來源措辭。保留必要的內部歷史紀錄於本文件及施工報告。
- 全站內容圖片引用 108 處；本機 `assets/images/` 有 63 個影像檔，63/63 均有實際頁面引用，無未使用影像檔。
- 共用首屏以淡枝葉剪影、窗櫺幾何和頁面專屬色階建立層次；about、collections 使用各自圖文首屏；其他頁面採作品/空間實景照和個別段落樣式，不套同一張大圖模板。

## 各頁檢查記錄

| 頁面 | 本版內容圖數 | W02 後新增引用 | W03 調整記錄 |
|---|---:|---:|---|
| `/` | 7 | 4 | 店面主視覺保留，精選區加作品分類照片 |
| `/about/` | 10 | 10 | 左文右圖首屏、收藏理念與細節照片交錯、空間照 |
| `/artists/` | 2 | 2 | 首屏藝術作品照、文章內畫作細節板 |
| `/bead-awards/` | 25 | 1 | 首屏手珠實照，保留完整作品組 |
| `/bead-contest/` | 9 | 1 | 賽況實照加入首屏，既有圖片檔重用 |
| `/collections/` | 7 | 7 | 一張首屏圖＋六個各自有作品照的分類入口 |
| `/gallery/` | 25 | 2 | 增加藝廊首屏與造像展示環境照 |
| `/sculpture/` | 11 | 5 | 造像全身、近照、窗前展示與其他姿態分組；5 個新不同圖片引用，燈箱保留 |
| `/visit/` | 4 | 1 | 首屏加入街景實照，地址/聯絡層級明確 |
| `/wood-art/` | 8 | 4 | 木牌、木珠、根木和手珠配圖交錯原有文章章節 |

計數只包含 `<img src="/assets/images/...">` 內容圖片；不計 Header/Footer Logo、空白燈箱影像和 CSS 裝飾。

## 佛教造像頁重點

新增引用 5 個不同造像照片：

- `gold-figure-context.webp`：金色造像全身及展示脈絡。
- `paired-figures-close.webp`：成對造像的近距離細節。
- `paired-figures-window.webp`：窗前展示光線。
- `paired-figures-window-portrait.webp`：直幅姿態/比例細節。
- `blue-green-figure.webp`：另一組姿態與色澤的造像。

搭配既有正面、細節與展示照片後，本頁共 11 張內容圖；維持 lightbox 點擊放大。未把品質不足或同角度重複照為了湊數加入。

## 素材與檔案

8 個新增 WebP：

- `archive-gallery-wide.webp` ← `觀古今2016升級\osmo1050121攝\PANORAMA\100_0308\PANO0002.JPG`
- `archive-interior-wide.webp` ← `觀古今2016升級\osmo1050121攝\PANORAMA\100_0309\PANO0006.JPG`
- `archive-root-sculpture.webp` ← `觀古今2016升級\osmo1050121攝\DJI_0358.JPG`
- `archive-art-screen.webp` ← `觀古今2016升級\osmo1050121攝\DJI_0333.JPG`
- `archive-figure-display.webp` ← `觀古今2016升級\osmo1050121攝\DJI_0265.JPG`
- `archive-painted-work.webp` ← `web\images\j8.jpg`
- `archive-wood-pendants.webp` ← `web\images\j11.jpg`
- `archive-wood-tablets.webp` ← `web\images\j9.jpg`

新品牌裝飾 `assets/brand/branch-silhouette.svg` 配合既有 `lattice-pattern.svg`、`cloud-rule.svg`，均為淡雅輔助層。頁尾維持單一正式 Footer。`favicon.ico` 已確認為含 16/32/48px 的 ICO 格式。

## 本機可重複檢查結果

- 10/10 正式 HTML 頁面存在；每頁一個 H1 和一個 Footer，無 `.dark-callout`。
- 正式頁及 CSS 中所有本機圖片、CSS、JS、Logo、SVG、favicon 和 SEO 路徑存在；75 個 HTTP 路徑逐一回應 200。
- 63/63 圖片檔有頁面引用；sitemap 列 10 個正式網址；`robots.txt`、`sitemap.xml`、`.nojekyll` 存在。
- `site.js` 通過 Node `--check`；CSS 大括號成對，sticky header 與手機斷點規則存在。
- 公開頁及 SEO 文字禁用措辭掃描無命中。
- 未執行瀏覽器截圖或滑鼠/觸控操作。本文件不宣稱 1440/768/390px 視覺截圖、手機選單點擊、燈箱實際互動已通過；若需要此項，需在可用的瀏覽器驗收環境完成。

## GitHub 與正式站狀態

- W02 main 基準：`523212c029c468bd30a66b70d22468f6e2477cec`。W02 設定頁紀錄 Pages 來源 `main / /(root)`。
- W03 PR #2 已合併；merge commit `8a894cc3f56d6b570e189767e4d08b7ed8814bf3`。GitHub Pages workflow #5 / run `38995047965` 對應相同 SHA 並完成 `success`。
- 以正式網域實際 GET 首頁及九個內頁：10/10 回應 200。十頁各只有一個 H1、一個正式 Footer，沒有 `.dark-callout` 或禁用歷史來源文字。
- 正式 CSS、JS、robots.txt、sitemap.xml 均回應 200；sitemap 列出 10 個正式網址。63/63 正式圖片 URL HEAD 200 並回應 image Content-Type；兩個 Logo、favicon.ico/png、三個 CSS 飾紋 SVG 均 HEAD 200。
- 線上頁面內容包含 W03 cache version；CSS/JS 功能資源成功取得。沒有宣稱以 HTTP HEAD 證明瀏覽器已解碼每張圖片。
- 本次未執行瀏覽器截圖或實際點擊操作，因此 1440/768/390px 像素畫面、手機選單、燈箱互動仍需瀏覽器驗收。這些狀態維持未驗收，沒有用靜態或 HTTP 結果替代。
## W04 延續稽核（2026-10-17）

W04 的分類入口、造像補圖、上線 commit 與正式網域 HTTP 驗收已記錄於 SONGREN_W04_CATEGORY_PLAN.md 及 SONGREN_V2_CONSTRUCTION_REPORT.md。本節不覆寫上方 W03 當時的頁數和照片數，避免混淆版本：W04 後全站共有 11 個正式頁面、76 張 WebP；sculpture/ 為 18 張內容照片，collections/figures/ 為 6 張照片。敏感畫作排除來源、各新增圖片對照及未完成的瀏覽器視覺互動驗收，亦見上述文件。
