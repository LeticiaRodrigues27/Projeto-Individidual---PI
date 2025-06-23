-- Script Filmes
-- Projeto individual

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

-- Select para a KPI de total de usuários que sugeriram
SELECT COUNT(fkUsuario) as 'TotalUsuarios' FROM Sugestao;

-- Select para a KPI de total de sugestões,
SELECT COUNT(FilmeSugerido) as 'TotalSugestoes' FROM Sugestao;

-- Select para gráfico de quantidade de sugestões de usuários (5 úsuários)
SELECT Nome, COUNT(FilmeSugerido) as 'SugestõesUsuário' FROM Sugestao JOIN Usuario ON idUsuario = fkUsuario GROUP BY (fkUsuario) limit 5;

select * from Usuario;
select * from Sugestao;

