# Práctica 11 — HttpClient en Angular

Aplicación Angular que cumple la guía `PW2.11_HttpClient Angular.pdf`:

- Servicio `GastosService` con un método GET tipado para `assets/datos.json`.
- Interfaz `Gasto` y reporte tabular de los tres registros del archivo JSON.
- Interfaz `User`, servicio `UserService` y componente adicional para consumir
  `https://jsonplaceholder.typicode.com/users`.
- Estados de carga, error, reintento y búsqueda de usuarios.

## Ejecutar

```bash
npm install
npm start
```

Abrir `http://localhost:4200`. Las pantallas principales de la práctica están en:

- `/reporte`: GET al JSON local.
- `/usuarios`: GET a la API REST externa.

El backend y MongoDB no son necesarios para comprobar estas dos peticiones HTTP.

## Verificar

```bash
npm run build
```

El resultado de producción se genera en `dist/frontend`.

## Resultado obtenido

Se implementó el consumo interoperable de datos JSON locales y remotos mediante
`HttpClient`. Las respuestas se modelan con interfaces TypeScript y se muestran en
tablas responsivas, con manejo explícito de los estados de la petición.
