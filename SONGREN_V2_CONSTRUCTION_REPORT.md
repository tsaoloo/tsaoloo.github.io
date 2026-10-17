# 松仁草廬 W01 全站改版施工報告

日期：2026-10-17（台北時間）  
施工目錄：`tsaoloo.github.io/`  
狀態：W01 本機版完成；W02 本機修復、GitHub main 同步、正式站部署及驗收皆完成。

## 已完成

- 建立可直接當作 GitHub Pages 網站根目錄的純靜態網站，共 10 個正式頁面：首頁、收藏理念、珍藏分類、佛教造像、木藝與台灣肖楠、手珠大賞、手珠賽況影像、名家淺說、草廬藝廊、地址與聯絡。
- 新增 `assets/css/site.css`、`assets/js/site.js`、兩款透明 PNG 標誌、favicon、55 張 WebP 藏品與空間圖片，以及 `robots.txt`、`sitemap.xml`、`404.html`、`.nojekyll`、`llms.txt`。
- 將最新 2026-10-16 拍攝的 16 張照片全部實際放入藝廊；招牌店面照片亦用於首頁 Hero，造像照片用於精選區，街景照片用於尋訪頁。
- 保留舊站九章肖楠文章、藝術生活文章、名家淺說原文、手珠大賞 24 張照片及賽況 8 張照片；來源與新版頁面對照見 `SONGREN_V2_CONTENT_MAPPING.md`、`SONGREN_V2_IMAGE_MAPPING.md`。
- 全站地址統一為「台北市信義區松仁路308巷1號」，電話沿用舊站核實的 `0961-096688`。新版內容沒有舊室話、舊地址、營業時間、社群帳號、未確認價格或鑑定宣稱。
- 舊資料夾 `web/` 與最新拍攝原檔均未覆蓋或刪除。

## 視覺與品牌

參考站已在瀏覽器開啟檢視。新版採大幅店面實景、錯落圖文、01 起的分類敘事、米白留白、墨色與木色、克制的古銅色點綴；沒有移植參考站內容或素材。照片保持原始比例，作品照片以 `contain` 呈現；主視覺不裁切藏品。

招牌照片可讀出字樣，但去背後會混入牆面反光且筆畫邊緣不夠可靠，因此未宣稱還原原招牌。`logo-primary.png`、`logo-white.png` 是以標楷體書法氣質排字製作的透明 PNG 替代標誌，已實際用於 Header 與 Footer；`favicon.png` 同源製作。未交付 `logo.svg`，因目前不能準確向量化原招牌字形。

## 驗收結果

- 本機 Python 靜態伺服器及瀏覽器預覽已啟動，使用網址 `http://127.0.0.1:8765/`。
- 10 個正式頁面分別在 1440、768、390 CSS px 開啟並檢查，共 30 組響應式檢查：均有單一 H1、沒有水平溢位、沒有已載入圖片破圖；小螢幕選單依預期收合。
- 390px 手機實測選單可展開，九個連結可見；選擇「尋訪」可正確導向 `/visit/`，選單關閉狀態同步復原。
- 390px 手機實測手珠照片燈箱可開啟、顯示原圖與替代文字，且可關閉。
- 靜態掃描：10 個 Title 唯一；233 個站內連結均指向已存在的靜態路徑；55/55 張最佳化圖片均被使用且檔案存在；最新照片 16/16 均在站內引用；SEO 標籤、JSON-LD、404 noindex、robots 與 sitemap XML 檢查通過。
- 舊室話與已知舊地址/錯誤聯絡資訊掃描無命中。沒有把搜尋引擎驗證或排名效果寫成已完成。

## W01 當時尚未做的外部作業（歷史狀態）

- 沒有 GitHub 遠端網址或驗證資料，因此沒有建立／連結遠端、上傳、部署、提交 Search Console 或 Bing Webmaster Tools。
- 未製作 `logo.svg`；原招牌手寫字去背不夠可靠，已採可信排字替代方案。
- 舊文章保留為舊站歷史觀點；新站沒有把文章中的材質、產地、價格、年代或收藏判斷套用到現有商品。


## W02 缺檔修復與頁尾精簡（2026-10-17）— 已完成

### GitHub 缺檔原因與修復方式

- 修復前公開 `main` tree SHA 為 `26ab1b7fb5473838f0ba5bca49f76b9212762a58`，根目錄有 13 個檔案；完整本機網站的 `assets/` 與九個內頁資料夾沒有同步進 `main`。這是正式站首頁樣式、Logo、圖片失效與內頁 404 的直接原因。
- GitHub Pages 發布來源已確認為 `Deploy from a branch / main / /(root)`；問題在遠端缺檔，不是 Pages 指向錯誤目錄。
- 透過正常 GitHub commit 與 PR #1 合併，沒有 force push，保留既有 Git 歷史與 `README.md`。PR 共 70 個檔案變更，合併 commit：`d1f6250bbd40424412ad29e8e7c56f6f6439d307`。
- 已同步至 repository 正確根目錄：`assets/css/site.css`、`assets/js/site.js`、`assets/brand/logo-primary.png`、`assets/brand/logo-white.png`、`assets/images/` 55 張 WebP、九個內頁目錄（`about/`、`collections/`、`sculpture/`、`wood-art/`、`bead-awards/`、`bead-contest/`、`artists/`、`gallery/`、`visit/`），以及修正版根目錄 `index.html`、`404.html`。沒有多包一層網站目錄。
- 原有 `robots.txt`、`sitemap.xml`、`.nojekyll`、`favicon.png`、`llms.txt` 與其他既有根檔均保留；正式站 `robots.txt` 可讀，`sitemap.xml` 含 10 個正式網址。

### 頁尾修改範圍

- 首頁、九個正式內頁及 `404.html` 均移除重複的深色 `.dark-callout` 區塊；首頁正文「尋訪松仁草廬」圖文內容保留。
- 共用 Footer 僅留一組 Logo、品牌名稱、地址、手機及四個精簡站內連結（收藏理念、珍藏分類、藝廊、尋訪）。刪除重複 Footer 宣告。
- `assets/css/site.css` 調整桌機、平板及手機 Footer 欄位對齊、Logo 尺寸、連結間距和垂直留白，維持深墨綠與暖米白風格。

### 本機驗收

- 以 HTTP 預覽 `http://127.0.0.1:8765/` 驗收，不依賴 `file://`。
- 10 個正式頁面 × 1440、768、390 CSS px 共 30 組檢查：每頁單一 H1、CSS/JS 正常載入、沒有水平溢位、Footer 單一 Logo/四個連結且沒有重複深色區塊。
- 10 頁、55 張 WebP、兩款 Logo、CSS/JS 和所有 HTML 根路徑引用均存在；首頁 Hero 正常。手機選單可展開並在導覽後收合；手珠作品燈箱可開啟、載圖並關閉。
- 首頁正文尋訪區仍在。Footer 高度約為桌機/平板 152px、390px 手機 203px。

### 正式站驗收

- GitHub Actions Pages 部署 run `#3`（`38990357652`）完成 Success，耗時 24 秒，部署 SHA 與網站修復合併 commit 相同：`d1f6250bbd40424412ad29e8e7c56f6f6439d307`。
- 實際開啟 `https://tsaoloo.github.io/`，10 個正式頁面在 1440、768、390 CSS px 逐頁檢查，共 30 組。全部顯示正確頁名與單一 H1；CSS 樣式表存在且已載入、JavaScript 功能可用、沒有水平溢位、404 內容或破圖。
- 55/55 張正式網站 WebP 圖片均在實際正式頁面載入，`naturalWidth` 大於 0；首頁店面 Hero 寬度 1280px，Header/Footer Logo 均正常載入。
- 手機 390px 選單可展開九項並在選擇導覽後收合；手珠大賞作品燈箱可開啟並載入原圖（800px），亦可正常關閉。
- 十個正式頁面 Footer 均為一個 Logo、一份地址、一份手機、四個導覽連結，沒有 `.dark-callout`；首頁正文尋訪區保留。
- `https://tsaoloo.github.io/robots.txt` 與 `https://tsaoloo.github.io/sitemap.xml` 均可讀，sitemap 列出首頁及九個正式內頁。

### 尚待事項

- W02 缺檔修復、頁尾精簡、同步與正式站驗收均完成，沒有尚未解決的 W02 發布問題。
- Google Search Console／Bing Webmaster Tools 所有權驗證及索引結果未做；未取得站主驗證資料，也不在本次發布範圍。
- 原招牌手寫字尚未準確向量化，現用透明 PNG 字體排字替代標誌，與 W01 記錄一致。

## W03 視覺升級與追加修正（2026-10-17）

### 本次修改範圍

- 以 `tsaoloo.github.io/` 既有完成版本為基準，未重做網站、未改動旁側原始 `web/` 目錄，也未變更其他 Repository。
- 全站 10 個正式頁面與 `404.html` 已清理訪客可見的「舊站／舊文／舊藏／舊照／舊頁／舊資料」及歷史來源措辭；文章/分類描述改成目前網站可對外使用的中性文字。首頁、分類頁和木藝頁不再把歷史來源當成前台訊息。內部交接文件仍保留必要的來源與歷史紀錄。
- 頁面圖片引用由 W02 的 71 處增至 108 處（+37 處）；現有影像庫共 63 個檔案，全部至少被一個正式頁面引用。
- 新增 8 個 WebP：`archive-gallery-wide.webp`、`archive-interior-wide.webp`、`archive-root-sculpture.webp`、`archive-art-screen.webp`、`archive-figure-display.webp`、`archive-painted-work.webp`、`archive-wood-pendants.webp`、`archive-wood-tablets.webp`。來源是專案拍攝全景/空間照片及 `web/images` 中與木藝、畫作相符的作品照片；素材均先檢視再挑選，`web/` 原檔不變。
- 新增 SVG 枝葉剪影 `assets/brand/branch-silhouette.svg`；CSS 納入淡雅窗櫺格紋、枝葉與分頁專屬米白/木色/古銅層次。全站 sticky header、手機斷點、捲軸樣式沿用並補強；`favicon.ico` 是含 16、32、48 像素尺寸的真實 ICO。

### 逐頁圖片與視覺改動

「頁面圖片數」是引用 `assets/images` 的內容圖，不含 Header/Footer Logo 和燈箱空白容器；「新增引用」與「新增不同檔案」分開計算，重複用圖不混算成新檔。

| 頁面 | 本版內容圖 | 相較 W02 新增引用／不同檔案 | 主要改善 |
|---|---:|---:|---|
| 首頁 | 7 | +4／3 | 保留店面主視覺，增加造像、珍珠手珠等分類實景入口 |
| 收藏理念 `/about/` | 10 | +10／9 | 左文右圖式首屏、作品/空間大圖、交錯細節圖與收藏生活段落 |
| 名家淺說 `/artists/` | 2 | +2／2 | 首屏作品照片與畫作細節，原文段落內嵌圖文板 |
| 手珠大賞 `/bead-awards/` | 25 | +1／1 | 首屏增加手珠代表照，保留 24 張作品序列 |
| 手珠賽況 `/bead-contest/` | 9 | +1／0 | 首屏補入賽況實拍；使用本頁已有照片，未重複複製檔案 |
| 珍藏分類 `/collections/` | 7 | +7／7 | 首屏藝術照片加六個真實作品圖像式分類入口 |
| 藝廊 `/gallery/` | 25 | +2／2 | 空間照片首屏與展示造像照，原有藝廊影像保留 |
| 佛教造像 `/sculpture/` | 11 | +5／5 | 全身、面部/材質細節、窗前展示與其他姿態分組，保留燈箱放大 |
| 尋訪 `/visit/` | 4 | +1／1 | 首屏加入街景照片，地址資訊仍清楚可讀 |
| 木藝手珠 `/wood-art/` | 8 | +4／4 | 根木、木牌、木珠細節和作品照片與原有九章交錯排版 |

- 佛教造像頁新增引入照片：`gold-figure-context.webp`、`paired-figures-close.webp`、`paired-figures-window.webp`、`paired-figures-window-portrait.webp`、`blue-green-figure.webp`。頁面將同組造像的全身、神情、窗景與材質視角編排在分段展示中；搭配原有照片後，本頁共有 11 張內容圖。
- 本次新增 8 個影像檔的素材對照與使用位置見 `SONGREN_V2_IMAGE_MAPPING.md`；逐頁視覺檢查狀態見 `SONGREN_W03_VISUAL_AUDIT.md`。

### 本機檢查

- 正式頁數 10/10；每頁 1 個 H1、1 個正式 Footer，沒有 `.dark-callout`。每頁根路徑資源引用存在。
- 內容圖 108 處；影像庫 63/63 檔案均有頁面引用；HTML 與 CSS 圖片/字型路徑沒有缺檔。
- 本機 HTTP `http://127.0.0.1:8765/` 逐一請求 75 個頁面與資源路徑：75/75 回應 200。`site.js` Node 語法檢查通過，CSS 括號成對、sticky header 存在；sitemap 有 10 個正式網址，ICO 標頭/多尺寸有效。
- 全站訪客前台 HTML、`llms.txt`、`robots.txt`、`sitemap.xml` 掃描未找到禁用歷史來源措辭。
- 本輪沒有執行瀏覽器截圖/實際點擊操作，因此 1440、768、390px 的視覺像素檢查、手機選單操作與燈箱實際開關不列為本輪已完成；不以靜態檢查代稱畫面驗收。

### 發布狀態

- PR #2（29 個變更檔）已正常合併至 `main`；W03 網站版本合併 commit：`8a894cc3f56d6b570e189767e4d08b7ed8814bf3`。以 merge commit 保留 Git 歷史，沒有 force push。
- GitHub Pages workflow #5（run `38995047965`）對應上述 merge SHA，完成 `success`。
- 正式網址 `https://tsaoloo.github.io/`：首頁與九個正式內頁 GET 10/10 回應 200；線上頁面均有 W03 CSS cache version、單一 H1/正式 Footer，無 `.dark-callout` 及禁用歷史來源文案。
- 正式站 CSS、JS、robots、sitemap 均 GET 200；sitemap 有 10 個正式網址。63/63 圖片 URL 的 HTTP HEAD 均為 200 且回應 image 類 Content-Type；兩個品牌 Logo、ICO、PNG favicon、三個 SVG 飾紋亦均 200。這是 HTTP 資源驗收，非瀏覽器像素解碼測試。
- 正式 Pages 發布來源在 W02 由 Settings 確認為 `main / /(root)`；本次 workflow 由 `main` 成功部署。
- 本次未能執行瀏覽器視覺截圖與點擊操作，故 1440/768/390px 的實際畫面、手機選單展開/收合及作品燈箱點擊互動仍待瀏覽器環境驗收。未以 HTTP 200 代替互動驗收。
- W02 遠端缺檔原因、既有部署與頁尾驗收細節保留於本報告前文；W02 合併 commit 為 `d1f6250bbd40424412ad29e8e7c56f6f6439d307`。

## W04 佛教造像與珍藏分類擴充（2026-10-17）

### 施工範圍

- 延續 W03 版本，未重做全站；僅更新既有頁面導覽、分類入口、佛教造像頁及共用選單樣式，並新增人物造像照片頁。
- 變更檔案：10 個正式頁面、404.html、assets/css/site.css、assets/js/site.js、sitemap.xml、新頁 collections/figures/index.html，以及 13 張新增 WebP。沒有修改 web/ 原始資料夾或其他 Repository。
- 主選單「珍藏分類」現在連到總覽，並含 7 個子連結：佛教造像、木藝與肖楠、手珠大賞、手珠賽況、人物造像、名家淺說、藝廊與空間。桌機可 hover/focus 或點擊展開；手機以展開按鈕收合。
- collections/ 改為 7 張實景照片分類卡片；新增 /collections/figures/ 作為人物造像照片欣賞頁。其餘子類別連至既有照片或文章頁，未另造缺乏素材支持的類別。

### 佛教造像與人物造像影像

佛教造像頁本輪增加 7 張不同照片，原頁 W03 的 11 張內容照片保留，現共 18 張。照片分為騎乘姿態與石色造像、坐姿造像與不同光影等組別，並保留燈箱放大。新增檔案與來源：

- sculpture-stone-mounted-full.webp ← 數位攝影/980815/IMG_0916.JPG（騎乘姿態全貌）
- sculpture-stone-beast-detail.webp ← 數位攝影/980815/IMG_0924.JPG（獸首與表面細節）
- sculpture-lotus-seat.webp ← 數位攝影/980815/IMG_1014.JPG（蓮座坐像）
- sculpture-reclining-face.webp ← 數位攝影/980815/IMG_0953.JPG（臥姿造像面容）
- sculpture-reclining-portrait.webp ← 數位攝影/980815/IMG_0957.JPG（臥姿造像上身與衣紋）
- sculpture-gold-buddha.webp ← 數位攝影/IMG_3375.JPG（金色坐像）
- sculpture-white-guanyin.webp ← 數位攝影/IMG_3363.JPG（白色坐像）

另新增 /collections/figures/，展示 6 張人物造像照片：figure-sage-frontal.webp、figure-thinker-full.webp、figure-thinker-detail.webp、figure-red-robed-front.webp、figure-red-robed-profile.webp、figure-green-robed.webp。來源均為數位攝影/提供照1/，分別對應 IMAGE_080.jpg、IMAGE_096.jpg、IMAGE_101.jpg、IMAGE_103.jpg、IMAGE_107.jpg、IMAGE_110.jpg。人物造像頁以坐姿沉思、衣褶側影分組，首屏亦使用一張代表照，並有燈箱放大。

### 敏感照片排除

依使用者指示，未使用含明顯女性胸部裸露的畫作。檢視並排除數位攝影/980815/IMG_0931.JPG–IMG_0943.JPG 同組畫作與裁切，以及數位攝影/990306收檔/官網用16張/DSCN0770.JPG；均未複製至網站、分類縮圖或燈箱。其他無法判定的裸露畫面亦不作候選。全站既有畫作縮圖另作目視確認，archive-painted-work.webp 顯示的是店面櫥窗／陳列環境，未見該敏感畫面。

### 本機驗收

- 11 個正式路由（10 個既有頁＋人物造像頁）以本機 HTTP 預覽可取回；12 份 HTML（含 404）均有共用子選單、Footer，站內圖片引用均能對應存在的檔案。
- 76 個網站 WebP 圖片檔均有頁面引用；本輪新增 13 張 WebP。collections/ 有 7 張代表照片；sculpture/ 有 18 張內容照片；人物造像頁有 6 張照片。
- Node.js 的 site.js 語法檢查通過；sitemap.xml 有 11 個正式網址。
- 本輪未透過瀏覽器截圖／實際操作驗收 viewport、手機選單互動或燈箱點擊；不將這些項目宣稱為視覺操作通過。

### GitHub 與正式站驗收

- GitHub Repository：tsaoloo/tsaoloo.github.io；PR #4 以正常 merge 合入 main，沒有 force push；網站內容 merge commit：d880facd6f6a2369e868932449e023f06ad9d6e0。變更已在 repository 正確發布根目錄，沒有多包一層網站資料夾。
- 正式站 https://tsaoloo.github.io/ HTTP 驗收：11/11 頁面回應 200（含 /collections/figures/）；從頁面擷取到的 82 個不同靜態資源全數回應 200，沒有發現資源 404。首頁、Logo、CSS、JS、favicon、robots.txt、sitemap.xml、雕像與人物造像新照片皆可從正式網域取回；sitemap 含 11 個網址。
- 正式站回應的標題、W04 CSS/JS 版本字串、新子頁和新增圖片均與 W04 版本相符，因此已確認 GitHub Pages 公開內容更新。GitHub Actions Pages workflow run 未由目前可用的 workflow 查詢回傳；部署判斷依正式網域實際內容，而非僅以 PR 合併作結論。
- 正式站 HTTP 資源檢查不等同瀏覽器畫面或手機操作測試；視覺尺寸、手機子選單點擊、作品燈箱互動仍未作本輪人工瀏覽器驗收。

詳細分類配置見 SONGREN_W04_CATEGORY_PLAN.md；圖片來源表見 SONGREN_V2_IMAGE_MAPPING.md；視覺變更及驗收記錄見 SONGREN_W03_VISUAL_AUDIT.md 的 W04 延續節。

## W05 中斷恢復與本機驗收（2026-10-17）

接軌代號：`SONGREN-W05-RECOVERY-20261017`。以下為 W05 對 W04 的增量修正，未重建網站。

- 改動 12 份 HTML：首頁、404、about、artists、bead-awards、bead-contest、collections、collections/figures、gallery、sculpture、visit、wood-art。統一三項藝術品分類導覽，保留原有獨立頁內容與替代入口。
- 修改 assets/css/site.css：下拉直向及父層下定位；修正 .hero-side-note 原 right:-34px 外凸，桌機/手機調整至 10px/8px；移除 main{overflow:clip}。人物全貌自然比例/contain，細節分組展示，分類 Hero 高度調整。
- 修改 assets/js/site.js：修正 pointer enter/click 展開狀態競爭及 Escape 焦點重開；操作確認 click、hover、鍵盤焦點、Escape、外部點擊、手機選單和燈箱。
- 六候選中五張使用：IMG_3336 戰士局部（去左側 44px 標籤）、IMG_3344 紅袍全貌、IMG_3345 紅袍側面、官網用16張/DSCN1556 風化人物全貌、官網用16張/DSCN0874 騎馬人物全貌。IMG_3334 醒目粉紅標籤淘汰。全部來自數位攝影但不在提供照1；原始 web/ 和攝影檔未修改。
- /collections/ 只留佛教造像、木藝與肖楠、古典人物造像三張對應照片卡。/collections/figures/ 使用五張獨立 W05 圖，頁首及分類代表圖同步為 weathered 全貌。
- 本機首頁及 10 個內頁共 11 路徑 HTTP 200；81 個 HTML 引用 CSS/JS/圖片/favicon 資源均 200；node --check assets/js/site.js 通過。CUA 實際檢視首頁選單、三分類入口、人物全貌與燈箱。
- 約 1200px 未見水平捲軸；但目前瀏覽器不能切換或讀取 1440/1640/768/390px，也不能取 DOM scrollWidth。該四尺寸及數值溢位檢查未驗，且未保存前後截圖；不能宣稱已通過。
- 初次寫本節時 GitHub W05 尚未發布；遠端 main 已知基準 362a48649626c2d8ddd00f92111b65ab808fb14f。PR/merge/正式站結果須發布後據實補寫。
