const express= require('express');
const router=express.Router();

const gasto=require('../controllers/gastos.controllers');
const usuario=require('../controllers/usuarios.controllers');

router.get('/misitio',(req, res) => {
  res.send('Bienvenido Backend Cálculo de Gastos')
});

router.get('/misitio/about', (req,res)=>{
  res.send('Acerca del sitio')
});

router.get('/misitio/contactos',(req,res)=>{
  res.sendFile('./contacto.avif',{
    root:__dirname
  })
});

router.post('/misitio/calculos',(req,res)=>{
  console.log(req.body);
  res.send("Cálculo impuesto a la renta ");
});

router.get('/misitio/gastos',gasto.getGastos);
router.post('/misitio/gastos', gasto.addGasto);
router.put('/misitio/gastos/:id', gasto.updateGasto);
router.delete('/misitio/gastos/:id', gasto.deleteGasto);

router.get('/misitio/usuarios',usuario.getUsuarios);
router.post('/misitio/usuarios', usuario.addUsuario);
router.post('/misitio/usuarios/:id', usuario.addUsuarioId);
router.put('/misitio/usuarios/:id', usuario.updateUsuario);
router.delete('/misitio/usuario/:id', usuario.deleteUsuario);

router.use((req, res) => {
  res.status(404).send('No se encontro la página');
});

module.exports=router;
