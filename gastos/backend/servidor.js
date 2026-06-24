const express = require('express');
const connectDB = require('./database');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.text());

// Conectar a la base de datos
connectDB();

app.use(require('./src/routes/server.routes'));

app.listen(port, () => {
  console.log('Servidor escuchando en el puerto ' + port);
});
