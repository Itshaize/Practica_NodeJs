const mongoose = require('mongoose');
const { Schema } = mongoose;

const GastosSchema = new Schema({
    tipo: { type: String, required: true },
    ruc: { type: String },
    empresa: { type: String },
    monto: { type: Number, required: true },
    descripcion: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Gasto', GastosSchema);
