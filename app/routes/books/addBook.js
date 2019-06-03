module.exports = function(app){
    app.get('/novolivro', function(req, res){
        res.render("books/addBook");
    });

    app.post('/livros/salvar', function(req, res){
        var book = req.body;

        var connection = app.config.dbConnection();
        var booksModel = app.app.models.booksModel;

        booksModel.saveBook(book, connection, function(error, result){
            res.redirect("/livros");
        });
    });
}