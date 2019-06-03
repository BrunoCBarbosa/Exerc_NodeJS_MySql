module.exports = function(){

    this.getGames = function(connection, callback){
        connection.query('SELECT * FROM games', callback);
    }

    this.saveGame = function(games, connection, callback){
        connection.query('INSERT INTO games SET ?', games, callback);
    }

    return this;
}