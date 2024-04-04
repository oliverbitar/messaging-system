const express = require('express');
const app = express();

const chatRoutes = require('../routes/chat_route');
const messageRoutes = require('../routes/message_route');

app.use('/chat', chatRoutes);
app.use('/message', messageRoutes);

module.exports = app;