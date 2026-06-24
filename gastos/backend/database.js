const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const URI = process.env.MONGO_URL_DIRECT;
        if (!URI) {
            throw new Error("MONGO_URL_DIRECT is not defined in the environment variables.");
        }
        
        await mongoose.connect(URI, {
            // El nombre de la base de datos se puede agregar al final de la URI o configurarlo aquí
            dbName: 'gastos_db' // Puedes cambiar esto por el nombre real de tu base de datos
        });
        
        console.log('Conexion exitosa a MongoDB Atlas');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error.message);
        process.exit(1); 
    }
};

module.exports = connectDB;
