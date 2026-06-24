const moogose= require('mongoose');
const Schema= mongoose.Schema;

const gastoSchema= new Schema({

    tipo:{tyoe:String, required:true},
    monto:{type:Number, required:true},
    descripcion:{type:String, required:true}
});

module.exports= mongoose.model('Gasto', gastoSchema);