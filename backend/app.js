const env = require('./env');
const app = require('./config/server');

const port = env.api.port;
const host = env.api.host;

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});