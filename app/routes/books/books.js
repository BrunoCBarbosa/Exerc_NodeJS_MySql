module.exports = function(app){

    app.get('/livros', function(req, res){

        var connection = app.config.dbConnection();
        var booksModel = app.app.models.booksModel;

        booksModel.getBooks(connection, function(error, result){
            res.render("books/books", {books : result});
        });
    });
}