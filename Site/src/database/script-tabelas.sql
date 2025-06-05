create database LeCinema;

use LeCinema;

create table Usuario (
IdUsuario int primary key auto_increment,
Nome varchar(70),
Email varchar(70),
Senha char(6)
);

create table Sugestao (
IdSugestao int primary key auto_increment,
FilmeSugerido varchar(40),
fkUsuario int,
constraint fkUsuarioSugestao foreign key (fkUsuario)
	references Usuario(IdUsuario)
);

-- npm run dev
-- parece npm start, mas atualiza sozinho