// Importa o Express e cria um roteador
const express = require('express');
const router = express.Router();

// Importa funções do banco de dados
const { getDB, ObjectId } = require('./db');

// Redireciona a raiz '/' para a página de projetos
router.get('/', (req, res) => res.redirect('/projects'));

// Rota para exibir a página de projetos
router.get('/projects', (req, res) => res.render('projetos'));

// Página de cadastro de usuário
router.get('/register', (req, res) => res.render('register'));

// Processa o cadastro de usuário
router.post('/register', async (req, res) => {
    await getDB().collection('usuarios').insertOne(req.body);
    res.redirect('/login'); // Após cadastro, redireciona para login
});

// Página de login de usuário
router.get('/login', (req, res) => res.render('login'));

// Processa o login de usuário
router.post('/login', async (req, res) => {
    const user = await getDB().collection('usuarios').findOne({
        login: req.body.login,
        senha: req.body.senha
    });
    if (user) {
        res.redirect('/carros'); // Login bem-sucedido
    } else {
        res.send('Login inválido'); // Falha no login
    }
});

// Lista todos os carros disponíveis
router.get('/carros', async (req, res) => {
    const carros = await getDB().collection('carros').find().toArray();
    res.render('carros', { carros });
});

// Página de gerenciamento de carros
router.get('/gerenciar-carros', async (req, res) => {
    const carros = await getDB().collection('carros').find().toArray();
    res.render('gerenciar-carros', { carros });
});

// Adiciona um novo carro no banco de dados
router.post('/add-carro', async (req, res) => {
    await getDB().collection('carros').insertOne(req.body);
    res.redirect('/gerenciar-carros');
});

// Atualiza a quantidade disponível de um carro
router.post('/update-carro/:id', async (req, res) => {
    await getDB().collection('carros').updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: { qtde_disponivel: req.body.qtde_disponivel } }
    );
    res.redirect('/gerenciar-carros');
});

// Remove um carro do banco de dados
router.post('/delete-carro/:id', async (req, res) => {
    await getDB().collection('carros').deleteOne({ _id: new ObjectId(req.params.id) });
    res.redirect('/gerenciar-carros');
});

// Vende um carro: decrementa a quantidade disponível
router.get('/vender-carro/:id', async (req, res) => {
    const carro = await getDB().collection('carros').findOne({ _id: new ObjectId(req.params.id) });
    if (carro.qtde_disponivel > 0) {
        await getDB().collection('carros').updateOne(
            { _id: new ObjectId(req.params.id) },
            { $inc: { qtde_disponivel: -1 } }
        );
    }
    res.redirect('/carros');
});

// Exporta o roteador para ser usado no app principal
module.exports = router;