const Gasto = require('../models/gastos');
const gastosControllers = {};

gastosControllers.getGastos = async (req, res) => {
  const gastos = await Gasto.find();
  res.json(gastos);
};

gastosControllers.getGasto = async (req, res) => {
  console.log(req.params.id);
  const gasto = await Gasto.findById(req.params.id);
  res.json(gasto);
};

gastosControllers.addGasto = async (req, res) => {
  const gasto = new Gasto({
    tipo: req.body.tipo,
    ruc: req.body.ruc,
    empresa: req.body.empresa,
    monto: req.body.monto,
    descripcion: req.body.descripcion
  });
  console.log(gasto);
  await gasto.save();
  res.json('status: Gasto guardado');
};

gastosControllers.editGasto = async (req, res) => {
  const { id } = req.params;
  const gasto = {
    tipo: req.body.tipo,
    ruc: req.body.ruc,
    empresa: req.body.empresa,
    monto: req.body.monto,
    descripcion: req.body.descripcion
  };
  await Gasto.findByIdAndUpdate(id, { $set: gasto }, { new: true });
  res.json('status: Gasto actualizado');
};

gastosControllers.deleteGasto = async (req, res) => {
  await Gasto.findByIdAndDelete(req.params.id);
  res.send('Gastos con ID ' + req.params.id + ' borrados');
};

module.exports = gastosControllers;
