const gastosControllers = {};

gastosControllers.getGastos = async (req, res) => {
  res.json([
    {
      id: '100',
      gasto: 'Salud',
      monto: 14575.6,
      informacion: 'Corresponde a consultas medicas, pagos de seguros, medicinas'
    },
    {
      id: '200',
      gasto: 'Educacion',
      monto: 3575.6,
      informacion: 'Corresponde a pensiones de colegios, transporte escolar'
    },
    {
      id: '300',
      gasto: 'Vivienda',
      monto: 5575.6,
      informacion: 'Corresponde a pago servicios basicos'
    }
  ]);
};

gastosControllers.addGasto = async(req,res)=>{
  console.log(req.body);
  res.send("Nuevo gasto registrado"); 
}

gastosControllers.updateGasto = async (req, res) => {
  res.send('Monto del gasto de VIVIENDA actualizado');
};

gastosControllers.deleteGasto = async (req, res) => {
  res.send('Gastos con ID ' + req.params.id + ' borrados');
};

module.exports = gastosControllers;
