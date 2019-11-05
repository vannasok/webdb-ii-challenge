const express = require('express');
const helmet = require('helmet');

const carRouter = require('./router/carRouter');
const server = express();

server.use(express.json());
server.use(helmet());
server.use(logger);

server.use('/api/cars', carRouter);

server.get('/', (req, res) => {
   res.status(200).json({ message: 'Server is Running' });
});

function logger(req, res, next) {
   const time = new Date().toLocaleTimeString();
   const date = new Date().toLocaleDateString();
   console.log(
      `${req.method} Request | http://localhost:8000${req.url} | ${date} , ${time}`
   );
   next();
}
module.exports = server;
