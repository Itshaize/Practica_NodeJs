const usuariosControllers = {};

usuariosControllers.getUsuarios = async (req, res) => {
  res.json([]);
};

usuariosControllers.addUsuario = async(req,res)=>{
  console.log(req.body);
  res.send("Nuevo usuario registrado"); 
}

usuariosControllers.addUsuarioId = async (req, res) => {
  console.log(req.body); 
  console.log(req.params);
  res.send('Usuario nuevo registrado');
};

usuariosControllers.updateUsuario = async (req, res) => {
  res.send('Datos del usuario ' + req.params.id + ' actualizados');
};

usuariosControllers.deleteUsuario = async (req, res) => {
  res.send('Usuario ' + req.params.id + ' borrado');
};

module.exports = usuariosControllers;
