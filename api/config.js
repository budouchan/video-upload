module.exports = (req, res) => {
  res.json({
    apiKey: process.env.GOOGLE_API_KEY,
    clientId: process.env.GOOGLE_CLIENT_ID,
    folderId: process.env.GOOGLE_DRIVE_FOLDER_ID
  });
};