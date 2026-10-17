

# SONGREN W05 導覽與人物造像修復交接

日期：2026-10-17（台北時間）
接軌代號：`SONGREN-W05-RECOVERY-20261017
專案：F:\架站客\客戶\松仁草廬\tsaoloo.github.io
正式站：https://tsaoloo.github.io/
本次恢復 W05 已有成果，未重做 W01–W04。

## 恢復實況與保全

網站目錄已有 W05 的 12 份 HTML 修改、assets/css/site.css、assets/js/site.js 和六張候選 WebP。舊四份交接文件仍停留在上午 11:15，原先未見 W05 修復交接，故依實際程式和驗收結果建立本文件並在四份既有文件末尾補入 W05 狀態。

恢復前 24 份 W05 檔案已複製至 F:\架站客\客戶\松仁草廬\W05-recovery-backup-20261017，含 SHA-256 manifest。發布使用獨立 checkout F:\架站客\客戶\松仁草廬\W05-publish-checkout-20261017，基準為遠端 main。原網站目錄不是 Git checkout。不得對原站使用 reset/clean，不得覆蓋 web/ 或攝影素材。

## 導覽架構

珍藏分類僅三項：
1. 佛教造像：/sculpture/
2. 木藝與肖楠：/wood-art/
3. 古典人物造像：/collections/figures/

/collections/ 總覽有三張相符代表圖。手珠大賞 /bead-awards/、手珠賽況 /bead-contest/ 由木藝頁相關入口進入；名家淺說 /artists/ 由收藏理念頁進入；草廬藝廊 /gallery/ 由首頁及頁尾進入。以上內容頁均保留。

主選單修復於 12 份 HTML、assets/css/site.css 和 assets/js/site.js。桌機下拉直向、每項一行、父層下方；預設收合。修正滑鼠進入與 click 的狀態競爭，以及 Escape 後焦點重開。已操作確認 click、hover、鍵盤焦點、Escape、外部點擊可用；手機子選單按鈕保留。

橫向延伸根因為 .hero-side-note 原 right:-34px；現改桌機 10px、手機 8px，移除 main{overflow:clip}，未新增 overflow-x:hidden。約 1200px 未見水平捲軸；1440/1640/768/390px 和 scrollWidth 未實測。

## 人物照片換圖

六張候選逐一查看。下表五張實際入頁，來源不在禁止的 數位攝影\提供照1：

| 來源 | 網站圖檔 | 用途 |
|---|---|---|
| 數位攝影\IMG_3336.JPG | w05-figure-warrior-detail-clean.webp | 左側裁除 44px 標籤，戰士局部細節；原檔未改 |
| 數位攝影\IMG_3344.JPG | w05-figure-red-robed-full.webp | 紅袍人物全貌 |
| 數位攝影\IMG_3345.JPG | w05-figure-red-robed-profile.webp | 紅袍人物側面 |
| 數位攝影\官網用16張\DSCN1556.JPG | w05-figure-weathered-full.webp | 人物含底座，人物 Hero/分類代表 |
| 數位攝影\官網用16張\DSCN0874.JPG | w05-figure-mounted-rider-full.webp | 騎乘造像全貌 |
| 數位攝影\IMG_3334.JPG | 未上站 | 醒目粉紅標籤干擾，淘汰 |

W04 人物頁六個舊圖來源 figure-sage-frontal、figure-thinker-full、figure-thinker-detail、figure-red-robed-front、figure-red-robed-profile、figure-green-robed 均已由新圖替換。需比對完整檔案路徑以免將 w05-figure 子字串誤認為舊引用。全貌照用自然比例/contain，細節標示為局部。本輪選圖無裸露女性胸部畫作。原始攝影及 web/ 未修改。

## 本機驗收

- 首頁加 10 個既有內頁，11 路徑全 HTTP 200。
- HTML 引用的 81 個唯一 CSS/JS/圖片/favicon 資源全 200；node --check assets/js/site.js 通過。
- 瀏覽器操作檢查首頁初始收合、展開三項直向、click/Escape/外部點擊收合、鍵盤焦點；檢查 /collections/ 三卡及 /collections/figures/ 首圖和燈箱。
- 約 1200px 畫面未見水平捲軸。現有瀏覽器工具沒有尺寸設定/讀取或 DOM scrollWidth 能力，無法實測 1440、1640、768、390px；未保存前後截圖檔。這些項目明確未驗。

## GitHub 與正式站

W05 已由 PR #6 正常合併。分支內容 commit 9576b94593529f9e23223d29e0a15a5f790db286；main merge commit 336a2d2f7eb93a6773f76138acaab3656d30fac8。Pages run #9（39006853937）成功，部署 SHA 為 336a2d2f7eb93a6773f76138acaab3656d30fac8。

## W05 修改檔案清單

- HTML：index.html、404.html、about/index.html、artists/index.html、bead-awards/index.html、bead-contest/index.html、collections/index.html、collections/figures/index.html、gallery/index.html、sculpture/index.html、visit/index.html、wood-art/index.html
- CSS/JS：assets/css/site.css、assets/js/site.js
- 五張實際引用新圖：assets/images/w05-figure-mounted-rider-full.webp、w05-figure-red-robed-full.webp、w05-figure-red-robed-profile.webp、w05-figure-warrior-detail-clean.webp、w05-figure-weathered-full.webp
- 交接：本檔及 SONGREN_V2_HANDOFF_CURRENT.md、SONGREN_V2_CONSTRUCTION_REPORT.md、SONGREN_V2_IMAGE_MAPPING.md、SONGREN_W04_CATEGORY_PLAN.md

### W05 正式發布與正式站驗收結果（2026-10-17）

- GitHub PR #6 正常合入 main；網站內容 commit 9576b94593529f9e23223d29e0a15a5f790db286，main merge commit 336a2d2f7eb93a6773f76138acaab3656d30fac8。未 force push。
- GitHub Pages workflow run #9（39006853937）以 merge commit 336a2d2f7eb93a6773f76138acaab3656d30fac8 部署成功。
- 實際開啟正式首頁：子選單預設收合；鍵盤展開後只見佛教造像、木藝與肖楠、古典人物造像三項直向子項。未見首頁水平捲軸。頁尾只見一組品牌、地址、電話和精簡站內導覽。
- 正式 /collections/ 顯示三張對應作品分類卡及正確連結；正式 /collections/figures/ 顯示五張新 W05 圖，Hero 全貌含頭部與底座，人物燈箱已實際打開及關閉。
- 正式 HTTP 檢查：/、/collections/、/collections/figures/、W05 CSS、W05 JS、五張新 WebP、robots.txt、sitemap.xml 共 12 個 URL 全部 200；五張人物圖回應 image/webp。正式三頁 HTML 同時確認 W05 CSS/JS cache version、三個子選單連結、三分類卡，人物頁含五張新圖且無 W04 舊人物圖路徑。
- 本機檢查仍為 11 個路徑 200、81 個本機引用資源 200、Node JavaScript 語法檢查通過。
- 目前瀏覽器控制介面沒有設定/讀取 1440、1640、768、390px viewport 或 DOM scrollWidth 的能力。約 1200px 畫面未見水平捲軸；指定尺寸、數值溢位與手機特定寬度未驗收。正式內容已部署，但不能把以上未驗項目宣稱通過。前後截圖檔未保存。

### W05 最新追加更正：八項第一層主選單（2026-10-17）

本節為目前有效的導覽架構，取代本文件較早 W05 段落中「四個既有內容頁只由其他頁面進入」或「主選單只有四項」的描述。四個頁面內容與文章／照片均保留，且恢復為第一層主選單：

1. 首頁 → `/`
2. 收藏理念 → `/about/`
3. 珍藏分類 → `/collections/`
4. 手珠大賞 → `/bead-awards/`
5. 手珠賽況 → `/bead-contest/`
6. 名家淺說 → `/artists/`
7. 藝術與空間 → `/gallery/`
8. 尋訪 → `/visit/`

珍藏分類的垂直子選單仍只有佛教造像 `/sculpture/`、木藝與肖楠 `/wood-art/`、古典人物造像 `/collections/figures/`。沒有把活動、文章或空間紀錄頁放回子分類。

本輪改動全部 12 份 HTML 共用導覽、`assets/css/site.css` 與 `assets/js/site.js`（14 個程式檔）；CSS/JS cache 版本分別更新至 `w05-r2`、`w05-r3`。桌機寬度不足時縮小間距與字級，1000px 以下切換漢堡；手機保留 0961-096688，Sticky Header 延續。子選單初始收合，鍵盤 Enter 可展開三個垂直項目。

本機檢查：11 個內容路徑 HTTP 200、79 個唯一 HTML 資源引用 HTTP 200；12 份 HTML 的主選單次序與三個子項逐頁核對；`node --check assets/js/site.js` 及 Git whitespace 檢查通過。可用約 1200px 桌面畫面確認八項主選單單行、初始收合、Enter 展開後直向排列，未見水平捲軸。瀏覽器控制介面不能設定 1440、1640、768、390px viewport 或讀取 DOM `scrollWidth`；這些指定尺寸與數值溢位未驗，手機視覺未宣稱通過。

網站修正以正常 PR #8 合併：分支程式 commit `50deb91a8b8dfb6e0484db13b1974d8ac4b0a38d`，main merge commit `1afd79659887c156fa6a27db01b4161d4bb95a45`。Pages run #10（`39007647908`）以該 merge commit 部署成功。正式首頁實際顯示八個第一層入口，初始子選單收合，鍵盤展開為三個垂直藝術分類；約 1200px 桌面未見水平捲軸。正式 `/collections/` 有三張正確入口卡；`/collections/figures/` 的人物 Hero 全貌含頭部與底座，五張新圖可載入，燈箱已開啟及關閉。八個第一層及三個子頁路由、W05 CSS/JS（cache `w05-r2`/`w05-r3`）、五張人物 WebP、robots.txt、sitemap.xml 共 20 個正式 URL 全部 HTTP 200；四個既有頁 `/bead-awards/`、`/bead-contest/`、`/artists/`、`/gallery/` 均可直接 GET 200。未 force push；未動其他 Repository、`web/` 或原始攝影檔。指定 1440/1640/768/390px 與 DOM scrollWidth 仍未能量測，手機尺寸驗收不列通過；可用約 1200px 畫面未見水平捲軸，且未保存截圖檔。


## W05 最後追加：共用圖片連續瀏覽（2026-10-17；中斷交接）

本節是目前本機 W05 的最新增量，沿用既有原生 `dialog` 與共用 `assets/js/site.js`，沒有新增第三方套件或攝影素材。主選單架構仍以八個第一層項目、珍藏分類下三個藝術品子項為準（PR #8 已上線）。

### 本機程式狀態

- 修改 `assets/js/site.js`：按目前作品分組擷取圖片；左右按鈕、左右鍵、循環切換、作品名稱和 `目前 / 總數`、單圖隱藏箭頭、相鄰兩張預載、失效圖錯誤文字、ESC/背景關閉、頁面捲動鎖定及關閉後焦點還原；加入水平滑動處理。
- 修改 `assets/css/site.css`：箭頭常駐且有中文無障礙標籤樣式，燈箱圖片使用 `object-fit:contain`，按 viewport 限制最大尺寸、手機觸控按鈕大小、減少動態效果偏好。
- 更新 12 份 HTML（含 404）的共用資源快取版本：CSS `w05-r3`、JS `w05-r4`。
- 新增圖片：0；既有圖片檔案未修改。

### 已實際本機操作

- 手珠大賞：由 `1 / 24` 連續以右鍵盤方向走到 `24 / 24`；右鍵回到 `1 / 24`，左鍵由第一張循環回 `24 / 24`；點擊「下一張作品」按鈕切換成功。
- 手珠賽況：`1 / 8` 點下一張到 `2 / 8`。
- 佛教造像：正面/細節組 `1 / 2` 到 `2 / 2`；另一組由 `1 / 6` 開始；不同組的造像由 `1 / 2` 另起，不混組。
- 古典人物造像：騎乘全貌組 `1 / 2` 到 `2 / 2`；畫面可見人物與底座完整，未被燈箱裁切。
- 草廬藝廊：第一組 `1 / 6` 到 `2 / 6`；金色造像組重新從 `1 / 3` 開始。
- 首頁單張照片顯示 `1 / 1` 且無左右箭頭。點背景與 ESC 均能關閉；ESC 後焦點回原照片按鈕。燈箱開啟後在背景區嘗試捲動，畫面位置未改變。
- `node --check assets/js/site.js` 已通過；上述是本機預覽操作，不代表正式站已更新。

### 未完成／不得宣稱通過

- 曾要求瀏覽器 viewport 設為 390×844，但現有瀏覽器控制沒有套用尺寸（畫面仍是桌面大小）。因此 390px 燈箱排版、觸控箭頭與手指滑動尚未實測；程式內 swipe handler 有實作但未驗收。
- 尚未完成 1440/1640/768/390 精確尺寸與 DOM `scrollWidth` 檢查；不能宣稱全尺寸無水平溢位。
- 本追加尚未複製進發布 checkout、尚無 commit/PR，未發布至 GitHub；正式站仍是 PR #8 的程式版本，main merge `1afd79659887c156fa6a27db01b4161d4bb95a45`、Pages run #10（`39007647908`）成功。該部署不含本節燈箱追加。
- 停工快照已建立並逐檔 SHA-256 核對：F:\架站客\客戶\松仁草廬\W05-recovery-backup-20261017-r4，含 24 個來源檔及 manifest.tsv；目前 24/24 雜湊吻合。

### 下一棒最小接續

1. 先核對本機以上程式與 r4 快照。
2. 用能真正提供 390px mobile viewport 的瀏覽器完成手機版、箭頭觸控及左右滑動驗收；再檢查燈箱內全貌、失效圖片處理與頁面溢位。
3. 驗收通過後才把 14 個程式檔及五份交接文件同步至指定網站 Repository，依正常 PR/merge 流程發布；禁止 force push。
4. 發布後實際檢查五個指定頁面及正式站資源，更新本文件和其餘四份交接文件的最終 commit/Pages 結果。

本次中斷是額度不足，站主指示停止工作並準備交接；W05 仍在進行中，不另開 W06。
## W05 最終接棒：燈箱驗收（2026-10-17；發布前）

### 本機實測

- 本機預覽 http://127.0.0.1:8765/；使用現有瀏覽器 viewport 控制，測試 1440×1000、768×1024、390×844。
- 首頁、/collections/、/collections/figures/ 三頁在上述寬度下 documentElement.scrollWidth 均等於 clientWidth；未見水平溢位。390px 首頁漢堡選單可開啟，珍藏分類子項可展開為三個垂直項目，手機畫面保留電話。
- 390px 手珠大賞燈箱：dialog 位於 viewport 內，寬 374px；圖片 object-fit:contain、原圖 800×533 且載入成功；左右箭頭均可見（各 42×48px）；右箭頭切至 2 / 24、左箭頭可返回。背景捲動鎖定前後 scrollY 同為 496；ESC 與關閉按鈕均關閉燈箱並將焦點還原至原作品按鈕。
- 手機觸控滑動：目前瀏覽器控制介面沒有觸控/Swipe 操作 API，未實測；程式雖有 pointer swipe handler，不能記為通過，待站主用實機左右滑動確認。
- 1440px 桌機：手珠大賞由 1 / 24 切至 24 / 24，下一張循環回 1 / 24，上一張循環回 24 / 24；按鈕與左右鍵均可切換，ESC 關閉且焦點還原。背景空白處點擊可關閉。
- 作品群組：手珠賽況 1 / 8→2 / 8；佛教造像 1 / 2→2 / 2；人物造像 1 / 2→2 / 2；草廬藝廊 1 / 6→2 / 6。以上開啟的燈箱圖皆實際載入，CSS 為 contain。人物頁「騎乘人物・全貌」首圖載入 /assets/images/w05-figure-mounted-rider-full.webp，畫面完整包含人物、馬匹與底座。
- 本機七頁（首頁、分類總覽、人物造像、手珠大賞、手珠賽況、佛教造像、藝廊）共 75 個唯一 CSS、JS、Logo 與圖片資源路徑均回應 HTTP 200；node --check assets/js/site.js 通過；瀏覽器 Console 未見 error。

### 發布狀態

本節為 W05 燈箱發布前驗收紀錄。燈箱尚未有新 commit/PR，正式站目前仍為主選單 PR #8 版本：main 1afd79659887c156fa6a27db01b4161d4bb95a45、Pages run #10（39007647908）；該正式版尚未包含本燈箱。滑動待實機驗收，其餘正式發布與部署資料待發布後補記。