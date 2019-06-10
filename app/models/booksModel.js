module.exports = function(){
    
    this.getBooks = function(connection, callback){
        connection.query('SELECT * FROM books', callback);
    }

    this.saveBook = function(books, connection, callback){
        connection.query('INSERT INTO books SET ?', books, callback);
    }

    this.updateBook = function(books, connection, callback){
        connection.query('UPDATE books SET ?', books, callback);
    }

    this.deleteBook = function(id, connection, callback){
        connection.query('DELETE FROM books WHERE id = ' + id.id, callback);
    }

    return this;
}