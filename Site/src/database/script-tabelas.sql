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

create table Jogo (
IdJogo int primary key auto_increment,
QtdAcertos int,
QtdErros int
);

-- Tabela associativa
create table Resultado (
IdResultado int,
fkUsuario int,
fkJogo int,
DataJogo date,
constraint pkCompostaResUsuar primary key (IdResultado, fkUsuario, fkJogo),
constraint fkUsuarioResultado foreign key (fkUsuario)
	references Usuario(IdUsuario),
constraint fkJogoResultado foreign key (fkJogo)
	references Jogo(IdJogo)
);

-- npm run dev
-- parece npm start
-- mas atualiza sozinho