module.exports = function(app){
    app.get('/novofilme', function(req, res){
        res.render("movies/addMovie");
    });

    app.post('/filmes/salvar', function(req, res){
        var movie = req.body;

        var connection = app.config.dbConnection();
        var moviesModel = app.app.models.moviesModel;
        
        moviesModel.saveMovie(movie, connection, function(error, result){
            res.redirect("/filmes");
        });
    });
}