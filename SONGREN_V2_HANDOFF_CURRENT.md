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
