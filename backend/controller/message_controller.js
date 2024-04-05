const environments = require('../env');
const { MongoClient } = require("mongodb");
const client = new MongoClient(environments.database.connection, environments.database.settings);
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

exports.getChatsForUser = async (req, res, next) => {
    try {
      io.on('receive', (socket) => {
        io.on('send-message', message => {
          io.broadcast.emit(message);
        })
      });
      const db = client.db('communication');
      const collection = db.collection('chat_messages');
      const examples = await collection.find({chat_id: parseInt(req.params.chatId)}).toArray();
  
      res.json(examples);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};