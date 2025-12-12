# 🎧 聽力助手 - 網頁版

專為英語學習者設計的線上工具，將英文音訊自動轉換為中英對照文字。

## ✨ 功能特色
- 📱 手機/電腦都能用
- 🎤 支援 MP3, WAV, M4A 格式
- ⏱️ 最長 20 分鐘音訊
- 🔄 自動語音辨識 + 翻譯
- 📥 一鍵下載結果

## 🚀 快速開始

### 使用示範版本（不需API）
直接訪問：`https://[您的帳號].github.io/[專案名稱]`

### 使用完整版本（需要API金鑰）
1. **申請免費API**：
   - [AssemblyAI](https://www.assemblyai.com) - 語音辨識
   - [Google Cloud](https://console.cloud.google.com) - 翻譯（可選）

2. **修改 config.js**：
   ```javascript
   ASSEMBLYAI_API_KEY: '你的_AssemblyAI_API_金鑰'