const express = require('express');
const router = express.Router();

const gasto = require('../controllers/gastos.controllers');
const usuario = require('../controllers/usuarios.controllers');

/**
 * @openapi
 * /api:
 *   get:
 *     tags: [General]
 *     summary: Comprueba que la API está disponible
 *     responses:
 *       200:
 *         description: Mensaje de bienvenida
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 */
router.get('/api', (req, res) => {
  res.send('Bienvenido Backend Cálculo de Gastos');
});

/**
 * @openapi
 * /api/about:
 *   get:
 *     tags: [General]
 *     summary: Retorna información acerca del sitio
 *     responses:
 *       200:
 *         description: Información del sitio
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *               example: Acerca del sitio
 */
router.get('/api/about', (req, res) => {
  res.send('Acerca del sitio');
});

/**
 * @openapi
 * /api/contactos:
 *   get:
 *     tags: [General]
 *     summary: Retorna el recurso gráfico de contacto
 *     responses:
 *       200:
 *         description: Imagen de contacto
 *         content:
 *           image/avif:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: Archivo de contacto no encontrado
 */
router.get('/api/contactos', (req, res) => {
  res.sendFile('./contacto.avif', { root: __dirname });
});

/**
 * @openapi
 * /api/calculos:
 *   post:
 *     tags: [General]
 *     summary: Envía los datos para calcular el impuesto a la renta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CalculoInput'
 *     responses:
 *       200:
 *         description: Solicitud de cálculo recibida
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 */
router.post('/api/calculos', (req, res) => {
  console.log(req.body);
  res.send('Cálculo impuesto a la renta');
});

/**
 * @openapi
 * /api/gastos:
 *   get:
 *     tags: [Gastos]
 *     summary: Retorna todas las facturas registradas
 *     responses:
 *       200:
 *         description: Lista de gastos obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Gasto'
 *   post:
 *     tags: [Gastos]
 *     summary: Registra una nueva factura
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GastoInput'
 *     responses:
 *       200:
 *         description: Gasto guardado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mensaje'
 */
router.get('/api/gastos', gasto.getGastos);
router.post('/api/gastos', gasto.addGasto);

/**
 * @openapi
 * /api/gastos/{id}:
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: Identificador MongoDB del gasto
 *       schema:
 *         type: string
 *   get:
 *     tags: [Gastos]
 *     summary: Obtiene un gasto por su identificador
 *     responses:
 *       200:
 *         description: Gasto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gasto'
 *       404:
 *         description: Gasto no encontrado
 *   put:
 *     tags: [Gastos]
 *     summary: Actualiza una factura existente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GastoInput'
 *     responses:
 *       200:
 *         description: Gasto actualizado correctamente
 *   delete:
 *     tags: [Gastos]
 *     summary: Elimina una factura
 *     responses:
 *       200:
 *         description: Gasto eliminado correctamente
 */
router.get('/api/gastos/:id', gasto.getGasto);
router.put('/api/gastos/:id', gasto.editGasto);
router.delete('/api/gastos/:id', gasto.deleteGasto);

/**
 * @openapi
 * /api/usuarios:
 *   get:
 *     tags: [Usuarios]
 *     summary: Retorna una lista de usuarios
 *     responses:
 *       200:
 *         description: Lista obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 *   post:
 *     tags: [Usuarios]
 *     summary: Registra un usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuario registrado
 */
router.get('/api/usuarios', usuario.getUsuarios);
router.post('/api/usuarios', usuario.addUsuario);

/**
 * @openapi
 * /api/usuarios/{id}:
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *   post:
 *     tags: [Usuarios]
 *     summary: Registra un usuario asociado a un identificador
 *     responses:
 *       200:
 *         description: Usuario registrado
 *   put:
 *     tags: [Usuarios]
 *     summary: Actualiza los datos de un usuario
 *     responses:
 *       200:
 *         description: Usuario actualizado
 *   delete:
 *     tags: [Usuarios]
 *     summary: Elimina un usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado
 */
router.post('/api/usuarios/:id', usuario.addUsuarioId);
router.put('/api/usuarios/:id', usuario.updateUsuario);
router.delete('/api/usuarios/:id', usuario.deleteUsuario);

/**
 * @openapi
 * /api/usuario/{id}:
 *   delete:
 *     deprecated: true
 *     tags: [Usuarios]
 *     summary: Elimina un usuario usando la ruta singular anterior
 *     description: Se conserva por compatibilidad. Utilice DELETE /api/usuarios/{id}.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado
 */
router.delete('/api/usuario/:id', usuario.deleteUsuario);

router.use((req, res) => {
  res.status(404).send('No se encontró la página');
});

module.exports = router;
