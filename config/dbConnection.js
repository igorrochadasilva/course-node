var mysql = require('mysql');

//evitar execução da função createConnection sem que acontecer um autoload, foi necessario atribuir a uma variavel
const comMySQL = function(){
    console.log('conexão com banco de dados foi estabelecida')
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '4321',
        database: 'portal_noticias'
    });
 }

module.exports = function(){
    console.log('O autoload carregou o módulo de conexão com o BD');
    return comMySQL;
}
