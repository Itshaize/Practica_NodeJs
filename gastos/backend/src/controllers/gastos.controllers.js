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

module.exports = gastosControllers;
