# 松仁草廬新版目前交接狀態

日期：2026-10-17  
本機網站根目錄：`F:\架站客\客戶\松仁草廬\tsaoloo.github.io`

## 目前狀態

- 第一波網站內容、設計、SEO/GEO、必要根目錄檔案及五份交接文件已完成。
- 舊站仍在 `F:\架站客\客戶\松仁草廬\web`，原始檔案沒有更動。
- 本機預覽伺服器目前使用 `127.0.0.1:8765`；Codex 預覽分頁已開啟。
- W02 已完成本機頁尾修改及正式站缺檔修復。GitHub `main` 已同步 `assets/`、55 張圖片及九個內頁資料夾；正式站 10 頁均已部署並驗收。
- W02 以 GitHub 登入瀏覽器正常提交並透過 PR #1 合併到 `main`；保留既有 Git 歷史，沒有 force push 或索取/暴露憑證。網站修復合併 commit 為 `d1f6250bbd40424412ad29e8e7c56f6f6439d307`。
- GitHub Pages 發布來源已於登入 Settings → Pages 確認：Deploy from a branch / `main` / `/(root)`。
- GitHub Pages 部署 run `38990357652` 已成功；發布來源是 `main / /(root)`。正式站 10 頁、三尺寸、55 張圖片、手機選單、燈箱、Footer、robots 與 sitemap 均通過 W02 驗收。Google/Bing 所有權驗證未做，未提供驗證資料。

## 本機預覽

如果目前的預覽伺服器已關閉，請在 PowerShell 執行：

```powershell
python -m http.server 8765 --bind 127.0.0.1 --directory "F:\架站客\客戶\松仁草廬\tsaoloo.github.io"
```

瀏覽器開啟 `http://127.0.0.1:8765/`。若 8765 埠已被佔用，可改用 8766 並開啟 `http://127.0.0.1:8766/`。

## 下一棒 Codex 可直接使用的指令

> 請先讀取 `SONGREN_V2_HANDOFF_CURRENT.md`、`SONGREN_V2_CONSTRUCTION_REPORT.md`、`SONGREN_V2_CONTENT_MAPPING.md`、`SONGREN_V2_IMAGE_MAPPING.md`、`SONGREN_V2_SEO_GEO_REPORT.md`，接著在 `F:\架站客\客戶\松仁草廬\tsaoloo.github.io` 延續網站維護。保留 `web/` 原始資料不動，不虛構營業時間、價格、材質、年代或鑑定，不變更已核對的地址與手機。任何發佈、GitHub 上傳或正式部署，須等我另行明確指示。

## 後續建議

1. 由店主最後確認新版地址、手機與九個主題名稱是否符合對外使用。
2. 若取得正式手寫 Logo 原稿或高解析無反光招牌影像，再評估輪廓清理與 SVG 向量化；現有標誌已清楚標示為字體排字替代方案。
3. 店主提供營業時間、服務／交易政策或逐件藏品的材質與年代依據後，再逐頁補充事實資料；目前未留待補寫的假資料。
4. 若未來要發布，先確認 GitHub repository／remote 與預定 branch，再依使用者明確授權建立版本並部署；目前資料夾可直接作為 Pages 靜態網站根目錄。


## W02 交接更新（2026-10-17）— 已完成

- **本機根目錄：** `F:\架站客\客戶\松仁草廬\tsaoloo.github.io`。完整檔案可直接作為 GitHub Pages root；原 `web/` 未更動。
- **缺檔原因：** W02 開始時 GitHub `main` 只有 13 個根目錄檔案，沒有 `assets/` 和九個正式內頁資料夾，導致正式站資源失效及內頁 404。Pages 發布設定本來就是 `main / /(root)`。
- **同步：** GitHub PR #1 已正常合入 `main`，70 個檔案變更，修復網站的合併 commit 為 `d1f6250bbd40424412ad29e8e7c56f6f6439d307`。已補齊 55 張 WebP、兩款 Logo、CSS/JS、九個內頁目錄及根目錄首頁/404；保留 README、SEO 根目錄檔案和既有歷史。沒有 force push。
- **Footer：** 所有 10 個正式頁面和 404 已移除深色重複區塊；Footer 僅一個 Logo、品牌、地址、手機、四個精簡導覽；首頁正文「尋訪松仁草廬」保留。桌機/平板約 152px、390px 手機約 203px。
- **本機驗收：** HTTP 預覽 10 頁 × 三尺寸共 30 組；CSS/JS、Hero、Footer、手機選單、燈箱及 55 張圖片引用正常。
- **正式站驗收：** Pages run `38990357652`（#3）對應 `d1f6250`，24 秒 Success。實際正式網域 10 頁 × 三尺寸 30 組通過；55/55 圖片載入、沒有水平溢位/破圖/404頁；手機選單與燈箱正常；Footer 每頁僅一組品牌/地址/電話；robots.txt 與含 10 個網址的 sitemap.xml 可讀。
- **尚未做：** Search Console/Bing Webmaster Tools 所有權驗證及索引狀態檢查；未取得驗證資料。原手寫招牌 Logo 向量化仍依 W01 記錄待正式原稿。

未來新增發布仍需依當次任務明確授權；W02 的授權不自動延伸到未來修改。

## W03 交接更新（2026-10-17；本次發布已完成）

- **本次授權：** 使用者已明確授權完成 W03 本機修改，並以正常 Git/GitHub 流程同步至 `tsaoloo/tsaoloo.github.io`；不得 force push。授權範圍僅本網站 Repository，本次不改動 `web/` 原始資料夾及其他 Repository。
- **本機：** `F:\架站客\客戶\松仁草廬\tsaoloo.github.io`。10 個正式頁面均已修改/巡檢；CSS、JavaScript、Logo、真實 ICO、枝葉/窗櫺 SVG 與 63 張影像齊備。網站每頁頁尾為單一正式 Footer。
- **前台文案：** 全站正式頁與 SEO 根檔已掃除「舊站、舊文、舊藏、舊照」及同類歷史來源字眼；必要來源歷史只留在內部報告。
- **配圖/視覺：** 本版 108 個內容圖引用、63 個實體圖片檔。頁面新增圖片引用數：首頁 4、about 10、artists 2、bead-awards 1、bead-contest 1、collections 7、gallery 2、sculpture 5、visit 1、wood-art 4。詳細頁數與檔名見施工報告和 `SONGREN_W03_VISUAL_AUDIT.md`。
- **本機 HTTP：** 預覽根頁與資源路徑 75/75 HTTP 200；正式頁 10/10、sitemap 10 個網址、63/63 圖片有使用且檔案存在、Node JS 語法檢查通過。本次瀏覽器畫面截圖/實際操作尚未做，請勿將其標成通過。
- **正式站：** PR #2 已合併；網站版本 commit `8a894cc3f56d6b570e189767e4d08b7ed8814bf3`。Pages workflow #5 / run `38995047965` 成功。10/10 頁面、CSS/JS、robots、sitemap GET 200；63/63 圖片、雙 Logo、favicon、枝葉/窗櫺/雲紋 SVG HEAD 200。正式頁僅單一 Footer，沒有 `.dark-callout` 或禁用來源措辭。
- **GitHub W03：** PR #2 merge commit `8a894cc3f56d6b570e189767e4d08b7ed8814bf3`（W03 網站內容發布 SHA）。Pages run `38995047965` success。W02 基準為 `523212c029c468bd30a66b70d22468f6e2477cec`；Settings 原記錄發布來源 `main / /(root)`。


## W04 目前狀態（2026-10-17；本機及正式站內容已完成）

- 本機根目錄：F:\架站客\客戶\松仁草廬\tsaoloo.github.io；本輪未修改 web/ 原始資料夾。
- sculpture/ 本輪新增 7 張精選照片，內容圖總數 18；新增人物造像照片頁 /collections/figures/，有 6 張圖。collections/ 有 7 個照片式分類入口，主選單「珍藏分類」以桌機下拉、手機展開收合方式顯示 7 個子連結。
- 網站新增 13 張 WebP：7 張佛教造像、6 張人物造像；全站目前 76 張 WebP。敏感女性裸露畫作來源已排除，詳見施工報告與 SONGREN_W04_CATEGORY_PLAN.md。
- GitHub PR #4 已正常合入 main，網站內容 merge commit：d880facd6f6a2369e868932449e023f06ad9d6e0；未 force push，其他 Repository 和 web/ 未修改。
- 正式站 HTTP 實測 11 個頁面均為 200；82 個頁面引用資源均為 200，含新造像圖片、CSS、JS、logo、robots.txt、sitemap.xml。正式 sitemap 有 11 個頁面網址。
- HTML/資源靜態檢查與 site.js 語法檢查通過。瀏覽器實際截圖、1440/768/390 視覺檢查、手機子選單點擊與燈箱互動尚未在本輪人工驗收，請勿標為已通過。
- 詳細施工、圖片來源及分類計畫分別見 SONGREN_V2_CONSTRUCTION_REPORT.md、SONGREN_V2_IMAGE_MAPPING.md、SONGREN_W04_CATEGORY_PLAN.md；W03 視覺稽核為歷史基線，W04 追加結果見 SONGREN_W03_VISUAL_AUDIT.md。

## 後續接手提示

接續時以 W04 的本機和 main 正式站內容為基準，先讀 SONGREN_W04_CATEGORY_PLAN.md 和最新施工報告。未來若要修改或發布，需依當次授權執行；本輪 W04 授權已用於上述 PR #4。

## W05 中斷接軌狀態（2026-10-17）

接軌代號：`SONGREN-W05-RECOVERY-20261017`。本節是恢復後最新狀態，前文 W01–W04 為歷史紀錄。

- 已確認 W05 原有 12 份 HTML、assets/css/site.css、assets/js/site.js、六張候選 WebP 均存在；恢復前 24 份檔案複製至 F:\架站客\客戶\松仁草廬\W05-recovery-backup-20261017，含 SHA-256 manifest。
- 修復桌機下拉競態與 Escape 後重開問題；本機瀏覽器確認預設收合、垂直三項、click/hover/鍵盤焦點展開、click/Escape/外部點擊收合。
- 人物 Hero 改用完整的 w05-figure-weathered-full.webp，分類卡同步；帶醒目標籤候選圖排除，IMG_3336 細節圖裁除左側標籤。
- 本機 11 個內容路徑 HTTP 200；81 個 HTML 引用資源 HTTP 200；node --check assets/js/site.js 通過。約 1200px 畫面檢查首頁、分類總覽、人物首圖和燈箱。
- 珍藏分類僅佛教造像 /sculpture/、木藝與肖楠 /wood-art/、古典人物造像 /collections/figures/。手珠大賞/賽況由木藝頁相關入口、名家淺說由收藏理念、草廬藝廊由首頁與頁尾進入；舊頁保留。
- W05 網站內容已由 PR #6 正常合併。W05 branch commit：9576b94593529f9e23223d29e0a15a5f790db286；main merge commit：336a2d2f7eb93a6773f76138acaab3656d30fac8。Pages 部署 run #9（39006853937）成功，部署 SHA 與 main merge commit 相同。
- 正式站已重新開啟驗收：首頁子選單預設收合，鍵盤展開後只有三個垂直藝術品類別；/collections/ 三卡路徑正確；/collections/figures/ 顯示五張新圖，Hero 全貌含底座，燈箱可開關。正式頁 Footer 僅一組品牌、地址、手機與精簡導覽。
- 正式站 HTTP：首頁、/collections/、/collections/figures/ 均 200；W05 CSS/JS、五張新增人物圖、robots.txt、sitemap.xml 均 200，圖片回應類型為 image/webp。
- 約 1200px 畫面未見水平捲軸。1440、1640、768、390px 視窗與 DOM scrollWidth 無法由現有瀏覽器控制面板量測，手機版實機／指定寬度驗收仍待補；不得列為已通過。
- 本機瀏覽器約 1200px 未見水平捲軸；已修正 .hero-side-note 原 right:-34px 為桌機 10px、手機 8px，移除 main{overflow:clip}。目前無法設定/讀取 1440、1640、768、390px 或 DOM scrollWidth，故這些尺寸未驗；也未保存截圖檔。不得宣稱全尺寸通過。
- 完整記錄見 SONGREN_W05_NAV_IMAGE_FIX.md；圖片、分類與施工報告末尾已補 W05 章節。

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


## W05 最後追加：共用圖片燈箱（接手狀態 2026-10-17）

W05 導覽更正已由 PR #8 發布（main `1afd79659887c156fa6a27db01b4161d4bb95a45`，Pages run #10 `39007647908` 成功）：八個第一層入口完整保留，珍藏分類下只有佛教造像、木藝與肖楠、古典人物造像三項。四個既有內容頁仍為第一層導覽。

之後新增的燈箱連續瀏覽只寫入本機網站：`assets/js/site.js`、`assets/css/site.css` 與 12 份 HTML（含 404；CSS cache `w05-r3`、JS cache `w05-r4`）。目前具左右按鈕/方向鍵、循環、標題與計數、群組隔離、單圖隱藏箭頭、ESC/背景關閉、焦點還原、捲動鎖定、相鄰圖預載、contain 完整呈現和 swipe handler。沒有新增或改動圖片檔。

已在本機實際測試手珠大賞 24 張循環、手珠賽況 8 張序列、佛教造像分組、人物造像 2 張組、藝廊分組、首頁單圖箭頭隱藏、背景關閉與 ESC 焦點還原。Node `--check` 通過。人物全貌截圖中頭部與底座完整。**390×844 viewport 與觸控/滑動未驗**：viewport override 無效，當前控制介面仍呈桌機尺寸；精確尺寸、scrollWidth 數值亦未驗。

本機這項追加尚未同步發布：沒有追加 commit/PR，正式站仍是 PR #8 的網站版本，不含燈箱功能。停工交接已寫入五份文件；快照 F:\架站客\客戶\松仁草廬\W05-recovery-backup-20261017-r4 已建立，含 24 個來源檔及 manifest.tsv，24/24 雜湊吻合。下一棒接續手機驗收、正式發布及更新部署結果。詳見 SONGREN_W05_NAV_IMAGE_FIX.md。
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