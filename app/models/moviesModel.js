module.exports = function(){

    this.getMovies = function(connection, callback){
        connection.query('SELECT * FROM movies', callback);
    }

    this.saveMovie = function(movies, connection, callback){
        connection.query('INSERT INTO movies SET ?', movies, callback);
    }

    return this;
}