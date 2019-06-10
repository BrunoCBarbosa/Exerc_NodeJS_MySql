module.exports = function(app){

    app.get('/deletarfilme', function(req, res){

        var connection = app.config.dbConnection();
        var moviesModel = app.app.models.moviesModel;

        var id = req.query;

        moviesModel.deleteMovie(id, connection, function(error, result){
            res.redirect("/filmes");
        });
    });
}