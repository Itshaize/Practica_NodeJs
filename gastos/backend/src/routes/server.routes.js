const express= require('express');
const router=express.Router();

const gasto=require('../controllers/gastos.controllers');
const usuario=require('../controllers/usuarios.controllers');

router.get('/api',(req, res) => {
  res.send('Bienvenido Backend Cálculo de Gastos')
});

router.get('/api/about', (req,res)=>{
  res.send('Acerca del sitio')
});

router.get('/api/contactos',(req,res)=>{
  res.sendFile('./contacto.avif',{
    root:__dirname
  })
});

router.post('/api/calculos',(req,res)=>{
  console.log(req.body);
  res.send("Cálculo impuesto a la renta ");
});

router.get('/api/gastos',gasto.getGastos);
router.post('/api/gastos', gasto.addGasto);
router.get('/api/gastos/:id', gasto.getGasto);
router.put('/api/gastos/:id', gasto.editGasto);
router.delete('/api/gastos/:id', gasto.deleteGasto);

router.get('/api/usuarios',usuario.getUsuarios);
router.post('/api/usuarios', usuario.addUsuario);
router.post('/api/usuarios/:id', usuario.addUsuarioId);
router.put('/api/usuarios/:id', usuario.updateUsuario);
router.delete('/api/usuario/:id', usuario.deleteUsuario);

router.use((req, res) => {
  res.status(404).send('No se encontro la página');
});

module.exports=router;
