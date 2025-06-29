const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// APIキーなどをフロントエンドに渡すためのAPIエンドポイント
app.get('/api/config', (req, res) => {
  res.json({
    apiKey: process.env.GOOGLE_API_KEY,
    clientId: process.env.GOOGLE_CLIENT_ID,
    folderId: process.env.GOOGLE_DRIVE_FOLDER_ID
  });
});

// 静的ファイルの提供（index.htmlなどを表示するため）
app.use(express.static(path.join(__dirname)));

// メインページのルート
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// サーバー起動
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});