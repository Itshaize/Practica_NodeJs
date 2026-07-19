const express = require('express');
const connectDB = require('./database');
const { setupSwagger } = require('./docs/swagger');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.text());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
});

// Conectar a la base de datos
connectDB();

setupSwagger(app);
app.use(require('./src/routes/server.routes'));

app.listen(port, () => {
  console.log('Servidor escuchando en el puerto ' + port);
  console.log(`Documentación Swagger: http://localhost:${port}/api-docs`);
});
