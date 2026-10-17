# 松仁草廬新版目前交接狀態

日期：2026-10-17  
本機網站根目錄：`F:\架站客\客戶\松仁草廬\tsaoloo.github.io`

## 目前狀態

- 第一波網站內容、設計、SEO/GEO、必要根目錄檔案及五份交接文件已完成。
- 舊站仍在 `F:\架站客\客戶\松仁草廬\web`，原始檔案沒有更動。
- 本機預覽伺服器目前使用 `127.0.0.1:8765`；Codex 預覽分頁已開啟。
- 新站目錄尚未初始化 Git repository，也沒有 GitHub remote；未上傳或部署。這樣保留了「禁止擅自上傳／部署」的要求。
- 搜尋引擎驗證未做，因為沒有提供 Search Console／Bing 驗證資料。

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
