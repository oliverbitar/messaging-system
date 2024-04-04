const express = require('express');
const messageRoutes = express.Router();

const messageController = require('../controller/message_controller');

messageRoutes.get("/:chatId", messageController.getChatsForUser);

module.exports = messageRoutes;