// Importa o framework Express
const express = require('express');
// Cria uma instância do Express
const app = express();
// Importa módulo para manipular caminhos de arquivos
const path = require('path');

// Importa o módulo de conexão com o banco de dados
const db = require('./db');
// Importa as rotas configuradas
const routes = require('./routes');

// Middleware para interpretar dados enviados por formulários
app.use(express.urlencoded({ extended: true }));

// Serve arquivos estáticos da pasta "public" (como o CSS)
app.use(express.static(path.join(__dirname, '..', 'public')));

// Configura a engine de templates EJS
app.set('view engine', 'ejs');
// Define a pasta onde ficam os arquivos EJS
app.set('views', path.join(__dirname, '..', 'html'));

// Usa as rotas definidas no arquivo routes.js
app.use('/', routes);

// Conecta ao banco de dados e inicia o servidor na porta 80
db.connect().then(() => {
    app.listen(80, () => console.log('Servidor rodando na porta 80'));
});