const { MongoClient } = require("mongodb");
const client = new MongoClient('mongodb://mongo:27017', { connectTimeoutMS: 30000, useNewUrlParser: true, useUnifiedTopology: true });

exports.getChatsForUser = async (req, res, next) => {
    try {
      const db = client.db('communication');
      const collection = db.collection('chat_messages');
      const examples = await collection.find({chat_id: parseInt(req.params.chatId)}).toArray();
  
      res.json(examples);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};