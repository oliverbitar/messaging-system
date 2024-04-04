const express = require('express');
const userRoutes = express.Router();

const userControllers = require('../controller/chat_controller');

userRoutes.get("/:userId/:pageSize/:PageNumber", userControllers.getChatsForUser);

module.exports = userRoutes;