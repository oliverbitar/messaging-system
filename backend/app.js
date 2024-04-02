const express = require('express');
const { MongoClient } = require("mongodb");
const app = express();
const port = 8000;
const client = new MongoClient('mongodb://mongo:27017', { connectTimeoutMS: 30000, useNewUrlParser: true, useUnifiedTopology: true });

app.get("/chat/:userId/:pageSize/:PageNumber", async (req, res) => {
  try {
    const db = client.db('communication');
    const collection = db.collection('user_chats');
    const examples = await collection.find({messager_1_id: req.params.userId}).toArray();
    res.json(examples);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});