module.exports = function(app){
    app.get('/novojogo', function(req, res){
        res.render("games/addGame");
    });

    app.post('/jogos/salvar', function(req, res){
        var game = req.body;

        var connection = app.config.dbConnection();
        var gamesModel = app.app.models.gamesModel;

        gamesModel.saveGame(game, connection, function(error, result){
            res.redirect("/jogos");
        });
    });
}