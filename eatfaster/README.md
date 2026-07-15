# 食快啲啦 Eatfaster — 真實動物叫聲三音節乾淨版

## 最新狀態

已按用戶最新要求完成：

1. **全部餵食聲效使用真實動物聲，可愛版**
   - App 餵食時會根據目前揀選的寵物播放對應的真實動物錄音剪輯。
   - 已移除合成 / procedural generated 動物叫聲。
   - 聲效位置：`assets/sounds/pet-calls/`。

2. **貓、兔仔、企鵝、恐龍已移除背景聲**
   - 已從原始真實錄音抽出清楚叫聲音節。
   - 已做 gating / fade / 靜音間隔處理，減少背景聲。
   - 小恐龍沒有真實恐龍錄音，所以沿用真實 baby chick / bird call 作可愛版現代恐龍替代。

3. **熊貓已修正「沒有聲」問題**
   - 已從真實 Chengdu pandas recording 重新抽取較清楚、較大聲的熊貓音節。
   - 已放大並整理成三音節，現在不再是無聲。

4. **水豚、大象、狗已保留原本你覺得好的聲音特質**
   - 狗、水豚、大象使用你之前覺得好的版本作基礎。
   - 已整理成三音節，並保留原本聲音感覺。
   - 水豚：開放來源未找到可用水豚叫聲，所以保留真實 guinea-pig/cavy 可愛聲作近親替代。

5. **所有動物叫聲至少 3 個音節**
   - 每個寵物聲效都已整理成 3 個分開音節。
   - 音節之間加入短暫乾淨靜音，避免背景雜聲延續。

| 寵物 | 聲效檔 | 狀態 |
|---|---|---|
| 胖胖貓 | `cat-call.mp3` | 真實貓聲，三音節，已去背景聲 |
| 胖柴犬 | `dog-call.mp3` | 保留好聽狗聲，三音節 |
| 胖兔仔 | `rabbit-call.mp3` | 真實兔聲，三音節，已去背景聲 |
| 胖熊貓 | `panda-call.mp3` | 已修正有聲，三音節 |
| 胖企鵝 | `penguin-call.mp3` | 真實企鵝聲，三音節，已去背景聲 |
| 胖倉鼠 | `hamster-call.mp3` | 真實倉鼠聲，三音節 |
| 胖水豚 | `capybara-call.mp3` | 保留好聽近親可愛聲，三音節 |
| 胖小象 | `elephant-call.mp3` | 保留好聽大象聲，三音節 |
| 胖小恐龍 | `dino-call.mp3` | 真實鳥仔聲替代，三音節，已去背景聲 |

6. **完成今餐畫面使用寵物原圖**
   - 「完成今餐！」上方圖片使用揀選寵物原圖，例如 `assets/gemini/pets/elephant.png`。
   - 不使用拿碟子 / 大肚完成圖。

7. **完成後鼓勵說話只保留廣東話或英文**
   - 完成今餐後只會隨機播放以下其中一種：廣東話 / English。
   - 廣東話：`assets/voices/encourage-yue.mp3`
   - English：`assets/voices/encourage-en.mp3`
   - 不再引用國語 `encourage-zh.mp3`。

## 已保留的 Gemini 圖像要求

正式 App 圖像已按用戶確認風格：

- 9 張背景 PNG
- 9 隻寵物 PNG
- 12 款食物 PNG
- 食物 PNG 已做透明 cutout，沒有外框 / 白色方框

圖像風格規格：

```text
docs/ASSET_STYLE_GUIDE.md
```

## 主要資產位置

```text
assets/gemini/pets/
assets/gemini/foods/
assets/gemini/backgrounds/
assets/icons/
assets/sounds/pet-calls/
assets/sounds/pet-calls-manifest.json
assets/sounds/PET_CALLS_ATTRIBUTIONS.md
assets/voices/encourage-yue.mp3
assets/voices/encourage-en.mp3
```

## 開啟方法

```text
C:\Users\user\OneDrive\Desktop\eatfaster-prototype\index.html
```

## 實測紀錄

- `assets/sounds/pet-calls/`：9 個 MP3，每隻寵物 1 個真實動物聲三音節乾淨版
- Manifest：9/9 `syllables >= 3`
- Manifest：9/9 `background_noise_removed = true`
- 音量檢查：熊貓不再靜音；大象已修復不靜音
- Browser app state：`soundCount = 9`，全部使用 `assets/sounds/pet-calls/`
- `assets/sounds/chewing10/`：不再由 `index.html` 或 `sw.js` 引用
