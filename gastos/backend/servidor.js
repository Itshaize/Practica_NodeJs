const express = require('express');
const connectDB = require('./database');
const gastosRoutes = require('./src/routes/server1.routes');
const serverRoutes = require('./src/routes/server.routes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Conectar a la base de datos
connectDB();

app.use('/', gastosRoutes);
app.use('/api', serverRoutes);
app.use('/', serverRoutes);

app.listen(port, () => {
  console.log('Servidor escuchando en el puerto ' + port);
});
