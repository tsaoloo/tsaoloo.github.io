# 新版圖片與 Logo 來源對照

新版共使用 55 張 WebP 作品／空間圖片：2026-10-16 最新實景 16 張、舊站 `web/images` 精選 7 張、舊手珠大賞 24 張、舊賽況 8 張。共 55/55 張均已在 HTML 引用，沒有把整個舊圖庫無差別複製。

## 2026-10-16 最新實景照片

下列 16 張原始照片全部出現在 `/gallery/`；其中招牌店面照用於首頁 Hero，窗前造像照用於首頁精選，入口與街景用於 `/visit/`。其他照片在藝廊依主題排列。

| 原始照片 | 最佳化檔名 | 新版用途 |
|---|---|---|
| `6237808118016446890.jpg` | `paired-figures-detail.webp` | 藝廊；造像頁細節 |
| `6237808118016446891.jpg` | `paired-figures-window.webp` | 首頁精選；藝廊 |
| `6237808118016446892.jpg` | `paired-figures-greenery.webp` | 藝廊；佛教造像頁 |
| `6237808118016446893.jpg` | `paired-figures-portrait.webp` | 藝廊；佛教造像頁 |
| `6237808118016446894.jpg` | `paired-figures-window-portrait.webp` | 藝廊 |
| `6237808118016446895.jpg` | `paired-figures-close.webp` | 藝廊 |
| `6237808118016446896.jpg` | `shop-front-street.webp` | 藝廊 |
| `6237808118016446897.jpg` | `shop-front-sign.webp` | 首頁 Hero、OG 分享圖、藝廊、尋訪 |
| `6237808118016446898.jpg` | `gold-figure-detail.webp` | 藝廊；佛教造像頁 |
| `6237808118016446899.jpg` | `gold-figure-context.webp` | 藝廊 |
| `6237808118016446900.jpg` | `gold-figure-front.webp` | 藝廊；佛教造像頁 |
| `6237808118016446901.jpg` | `taipei-street-01.webp` | 藝廊；尋訪 |
| `6237808118016446902.jpg` | `taipei-street-02.webp` | 藝廊 |
| `6237808118016446903.jpg` | `taipei-street-03.webp` | 藝廊 |
| `6237808118016446904.jpg` | `shop-approach.webp` | 首頁尋訪區、藝廊、尋訪 |
| `6237808118016446905.jpg` | `shop-front-sign-detail.webp` | 藝廊；招牌字形檢視參考 |

## 舊站精選影像

| 舊站來源 | 新版檔名 | 使用頁面 |
|---|---|---|
| `web/images/1.png` | `root-form-sculpture.webp` | `/wood-art/`、`/gallery/` |
| `web/images/j4.jpg` | `white-reclining-figure.webp` | `/sculpture/`、`/gallery/` |
| `web/images/j5.jpg` | `blue-green-figure.webp` | `/gallery/` |
| `web/images/j12.jpg` | `carved-figure.webp` | `/gallery/` |
| `web/images/S__7004297.jpg` | `root-carving-01.webp` | `/wood-art/`、`/gallery/` |
| `web/images/S__7004299.jpg` | `root-carving-02.webp` | `/wood-art/`、`/gallery/` |
| `web/images/S__7004303.jpg` | `bead-legacy-portrait.webp` | `/wood-art/`、`/gallery/` |

## 舊手珠照片

- `/bead-awards/`：`web/photo/images/fulls/01.jpg` 至 `24.jpg`，分別轉為 `bead-award-01.webp` 至 `bead-award-24.webp`。
- `/bead-contest/`：`web/photo/images/fulls/g01.jpg` 至 `g08.jpg`，分別轉為 `bead-contest-01.webp` 至 `bead-contest-08.webp`。
- 保留原始檔案順序作為顯示編號；不把檔名順序描述成排名或得獎紀錄。

## 處理方式與品牌標誌

原始來源都保留不動。圖片使用 Pillow 讀取 EXIF 方向後轉為 WebP（quality 86、method 6），輸出不攜帶來源 EXIF；維持原圖比例，圖片標籤具 alt、width、height，主 Hero 為 eager/high fetch priority，其餘圖片 lazy loading。網站 CSS 不裁切作品主體。

招牌字樣無法從照片可靠去背，Logo 改用 Windows 標楷體 `kaiu.ttf` 排成「松仁／草廬」透明 PNG，提供深色及白色兩版，並製作 favicon。它是書法字體排字替代方案，不是原招牌輪廓復原；未輸出 SVG。

## W03 視覺升級新增影像對照（2026-10-17）

| 新增檔案 | 專案來源 | 用途 |
|---|---|---|
| `archive-gallery-wide.webp` | `觀古今2016升級\osmo1050121攝\PANORAMA\100_0308\PANO0002.JPG` | about 藝術空間、collections 首屏及空間分類 |
| `archive-interior-wide.webp` | `觀古今2016升級\osmo1050121攝\PANORAMA\100_0309\PANO0006.JPG` | 首頁/collections 店內空間、about 收藏生活 |
| `archive-root-sculpture.webp` | `觀古今2016升級\osmo1050121攝\DJI_0358.JPG` | 木藝/collections 的根木主題 |
| `archive-art-screen.webp` | `觀古今2016升級\osmo1050121攝\DJI_0333.JPG` | 名家淺說作品細節、藝廊圖文 |
| `archive-figure-display.webp` | `觀古今2016升級\osmo1050121攝\DJI_0265.JPG` | 藝廊展示環境 |
| `archive-painted-work.webp` | `web\images\j8.jpg` | 畫作/藝術主題分類及名家淺說 |
| `archive-wood-pendants.webp` | `web\images\j11.jpg` | 木藝章節與手珠細節 |
| `archive-wood-tablets.webp` | `web\images\j9.jpg` | 木作章節、about 收藏主題 |

共 8 個新最佳化 WebP 檔，均先檢視原始畫面後才挑選；全站目前 63 個圖片檔案都被引用。原始圖片目錄 `web/` 只讀取素材，沒有修改或覆蓋。

### W03 各頁新增圖片引用

| 頁面 | 本版內容圖 | 新增引用 | 新增不同檔案 |
|---|---:|---:|---:|
| 首頁 | 7 | 4 | 3 |
| about | 10 | 10 | 9 |
| artists | 2 | 2 | 2 |
| bead-awards | 25 | 1 | 1 |
| bead-contest | 9 | 1 | 0（引用本頁原有賽況照） |
| collections | 7 | 7 | 7 |
| gallery | 25 | 2 | 2 |
| sculpture | 11 | 5 | 5 |
| visit | 4 | 1 | 1 |
| wood-art | 8 | 4 | 4 |

佛教造像頁新增的五個不同照片檔為：`gold-figure-context.webp`（造像全身/場景）、`paired-figures-close.webp`（成對造像細節）、`paired-figures-window.webp`、`paired-figures-window-portrait.webp`（窗前光線與直幅姿態）、`blue-green-figure.webp`（另一姿態）。
