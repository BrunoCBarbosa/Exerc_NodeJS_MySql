var mySql = require('mysql');

var connMySql = function(){
    return mySql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_informacoes'
    });

}

module.exports = function(){
    console.log('Autoload carregou o módulo de conexão com o banco de dados!');
    return connMySql;
    
}