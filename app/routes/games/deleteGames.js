module.exports = function(app){

    app.get('/deletarjogo', function(req, res){

        var connection = app.config.dbConnection();
        var gamesModel = app.app.models.gamesModel;

        var id = req.query;
      
        gamesModel.deleteGame(id, connection, function(error, result){
            res.redirect("/jogos");
        });
    });
}