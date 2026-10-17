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

## W04 佛教造像與人物造像新增影像（2026-10-17）

本輪新增 13 張 WebP，原始照片保留於專案素材資料夾，網站使用最佳化副本。以下來源路徑以專案根目錄 F:\架站客\客戶\松仁草廬 為準。

| 網站檔名 | 原始照片 | 使用頁面／畫面 |
|---|---|---|
| sculpture-stone-mounted-full.webp | 數位攝影/980815/IMG_0916.JPG | /sculpture/；騎乘姿態全貌 |
| sculpture-stone-beast-detail.webp | 數位攝影/980815/IMG_0924.JPG | /sculpture/；獸首與表面細節 |
| sculpture-lotus-seat.webp | 數位攝影/980815/IMG_1014.JPG | /sculpture/；蓮座坐像 |
| sculpture-reclining-face.webp | 數位攝影/980815/IMG_0953.JPG | /sculpture/；臥姿面容 |
| sculpture-reclining-portrait.webp | 數位攝影/980815/IMG_0957.JPG | /sculpture/；臥姿上身與衣紋 |
| sculpture-gold-buddha.webp | 數位攝影/IMG_3375.JPG | /sculpture/；金色坐像 |
| sculpture-white-guanyin.webp | 數位攝影/IMG_3363.JPG | /sculpture/；白色坐像 |
| figure-sage-frontal.webp | 數位攝影/提供照1/IMAGE_080.jpg | /collections/figures/；端坐人物正面 |
| figure-thinker-full.webp | 數位攝影/提供照1/IMAGE_096.jpg | /collections/figures/；倚案人物全貌 |
| figure-thinker-detail.webp | 數位攝影/提供照1/IMAGE_101.jpg | /collections/figures/；倚案人物神情細節 |
| figure-red-robed-front.webp | 數位攝影/提供照1/IMAGE_103.jpg | /collections/figures/；朱衣人物正面 |
| figure-red-robed-profile.webp | 數位攝影/提供照1/IMAGE_107.jpg | /collections/figures/；朱衣人物側影 |
| figure-green-robed.webp | 數位攝影/提供照1/IMAGE_110.jpg | /collections/figures/；人物造像首屏／全貌 |

### 分類入口代表圖

- 佛教造像：gold-figure-front.webp
- 木藝與肖楠：archive-root-sculpture.webp
- 手珠大賞：bead-award-14.webp
- 手珠賽況：bead-contest-07.webp
- 名家淺說：archive-painted-work.webp（展示環境影像）
- 空間與近照：shop-front-street.webp
- 古典人物造像：figure-green-robed.webp

### 敏感畫作排除

未將有明顯女性胸部裸露的畫作及其同組照片用於前台、首圖、縮圖或燈箱：數位攝影/980815/IMG_0931.JPG–IMG_0943.JPG 同組影像，以及數位攝影/990306收檔/官網用16張/DSCN0770.JPG。檔案只留在原素材位置，不加入網站 assets。對畫面無法判斷者採排除處理。

## W05 古典人物造像圖片對照（2026-10-17）

本輪檢視六張候選來源，五張進站；來源均非禁止的 數位攝影\提供照1。原始尺寸/用途：

| 原始來源 | 網站圖檔 | 原始尺寸與用途 |
|---|---|---|
| 數位攝影\IMG_3336.JPG | w05-figure-warrior-detail-clean.webp | 768×1024；裁左側 44px 後為 724×1024，僅作局部細節 |
| 數位攝影\IMG_3344.JPG | w05-figure-red-robed-full.webp | 768×1024；紅袍人物全貌 |
| 數位攝影\IMG_3345.JPG | w05-figure-red-robed-profile.webp | 768×1024；紅袍人物側面 |
| 數位攝影\官網用16張\DSCN1556.JPG | w05-figure-weathered-full.webp | 3000×4000；含人物與底座，Hero/分類代表 |
| 數位攝影\官網用16張\DSCN0874.JPG | w05-figure-mounted-rider-full.webp | 4000×3000；騎馬人物全貌及展示空間 |
| 數位攝影\IMG_3334.JPG | 未使用 | 醒目粉紅標籤干擾，淘汰 |

全貌圖採自然比例/contain，局部圖標為細節。W04 舊圖 figure-sage-frontal、figure-thinker-full、figure-thinker-detail、figure-red-robed-front、figure-red-robed-profile、figure-green-robed 已由人物頁新圖替換；檢查須比對完整路徑，避免將 w05-figure 子字串誤判。分類卡與人物 Hero 同用 weathered 全貌。原始照片和 web/ 未修改。
