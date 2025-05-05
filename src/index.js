const express = require('express');
const client = require('prom-client');
const app = express();
const register = new client.Registry();

client.collectDefaultMetrics({ register });

app.get('/', (req, res) => {
  res.send('¡Hola desde Node.js con DevOps!');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(3000, () => {
  console.log('App corriendo en http://localhost:3000');
});
