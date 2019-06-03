module.exports = function(){
    
    this.getBooks = function(connection, callback){
        connection.query('SELECT * FROM books', callback);
    }

    this.saveBook = function(books, connection, callback){
        connection.query('INSERT INTO books SET ?', books, callback);
    }

    return this;
}