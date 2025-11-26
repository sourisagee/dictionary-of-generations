require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');
const apiRouter = require('./routes/api.routes');

const app = express();
const PORT = process.env.PORT || 4000;

serverConfig(app);

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

module.exports = app;
