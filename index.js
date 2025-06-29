const express = require('express');
const path = require('path');
const app = express();

// APIキーなどをフロントエンドに渡すためのAPIエンドポイント
app.get('/api/config', (req, res) => {
  res.json({
    apiKey: process.env.GOOGLE_API_KEY,
    clientId: process.env.GOOGLE_CLIENT_ID,
    folderId: process.env.GOOGLE_DRIVE_FOLDER_ID
  });
});

// 静的ファイルの提供（index.htmlなどを表示するため）
// publicフォルダを静的ファイルのルートとして設定
app.use(express.static(path.join(__dirname, 'public')));


// ルートURLへのアクセスでindex.htmlを返す
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// VercelがExpressアプリを認識できるように、appをエクスポートします
module.exports = app;