const environments = require('../env');
const { MongoClient } = require("mongodb");
const client = new MongoClient(environments.database.connection, environments.database.settings);

exports.getChatsForUser = async (req, res, next) => {
    try {
      const db = client.db('communication');
      const collection = db.collection('user_chats');
      const examples = await collection.find({messager_1_id: parseInt(req.params.userId)}).toArray();
  
      res.json(examples);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};