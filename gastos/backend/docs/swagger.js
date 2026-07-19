const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const routesPath = path.resolve(__dirname, '../src/routes/*.js').replace(/\\/g, '/');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API REST Gastos con Node.js',
      version: '1.0.0',
      description: 'Documentación interactiva de la API para registrar y consultar gastos y usuarios.'
    },
    servers: [{ url: 'http://localhost:3000', description: 'Servidor local' }],
    tags: [
      { name: 'General', description: 'Información general de la API' },
      { name: 'Gastos', description: 'Operaciones CRUD de facturas y gastos' },
      { name: 'Usuarios', description: 'Operaciones de usuarios' }
    ],
    components: {
      schemas: {
        GastoInput: {
          type: 'object',
          required: ['tipo', 'monto'],
          properties: {
            tipo: { type: 'string', example: 'salud' },
            ruc: { type: 'string', example: '171200972001' },
            empresa: { type: 'string', example: 'Farmacia Central' },
            monto: { type: 'number', format: 'double', example: 45.6 },
            descripcion: { type: 'string', example: 'Compra de medicamentos' }
          }
        },
        Gasto: {
          allOf: [
            { $ref: '#/components/schemas/GastoInput' },
            {
              type: 'object',
              properties: {
                _id: { type: 'string', example: '6696c4d3911e9f263c68a781' },
                createdAt: { type: 'string', format: 'date-time' },
                __v: { type: 'integer', example: 0 }
              }
            }
          ]
        },
        Usuario: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            nombre: { type: 'string', example: 'Juan Pérez' }
          }
        },
        CalculoInput: {
          type: 'object',
          properties: {
            ingresos: { type: 'number', format: 'double', example: 25000 },
            deducciones: { type: 'number', format: 'double', example: 3500 }
          }
        },
        Mensaje: { type: 'string', example: 'Operación realizada correctamente' }
      }
    }
  },
  apis: [routesPath]
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

function setupSwagger(app) {
  app.get('/api-docs.json', (req, res) => {
    res.type('application/json').send(swaggerDocs);
  });

  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocs, {
      explorer: true,
      customSiteTitle: 'API REST Gastos | Swagger'
    })
  );
}

module.exports = { setupSwagger, swaggerDocs };
