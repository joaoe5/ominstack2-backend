const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

//GET - Buscar uma informação da api
// POST - Criar
// PUT - Editar
// DELETE - Apagar

routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);

routes.post(
    '/boxes/:id/files',
    multer(multerConfig).single('file'),
    FileController.store
);

// um middleware ele modifica ou retorna uma resposta - nesse caso o segundo parâmetro
// routes.get('/teste', (req, res) => {
//     return res.send('Hello Jao');
// })

module.exports = routes;