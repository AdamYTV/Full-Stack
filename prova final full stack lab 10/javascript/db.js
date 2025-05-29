// Importa o cliente do MongoDB e ObjectId para manipular IDs
const { MongoClient, ObjectId } = require('mongodb');

// Cria uma instância do cliente do MongoDB
const client = new MongoClient('mongodb://localhost:27017');

// Variável que armazenará a conexão com o banco
let db;

// Função assíncrona que conecta ao banco
async function connect() {
    await client.connect();
    db = client.db('vendaCarros'); // Nome do banco de dados
}

// Função que retorna a instância do banco
function getDB() {
    return db;
}

// Exporta funções e ObjectId para uso em outros arquivos
module.exports = { connect, getDB, ObjectId };