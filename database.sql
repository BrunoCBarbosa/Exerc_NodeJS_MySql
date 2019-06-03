CREATE TABLE filmes (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(200) NOT NULL,
    description TEXT,
    PRIMARY KEY(id)
);

CREATE TABLE jogos (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(200) NOT NULL,
    description TEXT,
    PRIMARY KEY(id)
);

CREATE TABLE livros (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(200) NOT NULL,
    description TEXT,
    PRIMARY KEY(id)
);