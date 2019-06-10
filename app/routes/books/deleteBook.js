module.exports = function(app){

    app.get('/deletarlivro', function(req, res){

        var connection = app.config.dbConnection();
        var booksModel = app.app.models.booksModel;

        var id = req.query;

        booksModel.deleteBook(id, connection, function(error, result){
            res.redirect("/livros");
        });
    });
}