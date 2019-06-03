module.exports = function(app){

    app.get('/jogos', function(req, res){

        var connection = app.config.dbConnection();
        var gamesModel = app.app.models.gamesModel;

        gamesModel.getGames(connection, function(error, result){
            res.render("games/games", {games : result})
        });
    });
}