

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
