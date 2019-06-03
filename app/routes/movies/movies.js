module.exports = function(app){

    app.get('/filmes', function(req, res){

        var connection = app.config.dbConnection();
        var moviesModel = app.app.models.moviesModel;

        moviesModel.getMovies(connection, function(error, result){
            res.render("movies/movies", {movies : result});
        });
    });
}