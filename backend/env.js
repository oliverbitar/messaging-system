const env = {
    api: {
      port: 8000,
      host: 'localhost',
    },
    database: {
      connection: process.env.connection || 'mongodb://127.0.0.1:27017/ecommerce',
    },
  };
  
  module.exports = env;