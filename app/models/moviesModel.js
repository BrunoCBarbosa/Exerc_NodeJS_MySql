module.exports = function(){

    this.getMovies = function(connection, callback){
        connection.query('SELECT * FROM movies', callback);
    }

    this.saveMovie = function(movies, connection, callback){
        connection.query('INSERT INTO movies SET ?', movies, callback);
    }

    this.deleteMovie = function(id, connection, callback){
        connection.query('DELETE FROM movies WHERE id = ' + id.id, callback);
    }

    return this;
}