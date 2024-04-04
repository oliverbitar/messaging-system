const env = {
    api: {
      port: 8000,
      host: 'localhost',
    },
    database: {
      connection: 'mongodb://mongo:27017',
      settings: {
        connectTimeoutMS: 30000, 
        useNewUrlParser: true, 
        useUnifiedTopology: true
      }
    },
  };
  
  module.exports = env;