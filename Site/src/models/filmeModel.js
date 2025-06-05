var database = require("../database/config") // Tem que ser igual a controller

function sugerir(nomeFilme, IdUsuario) {
    var instrucaoSql = `INSERT INTO sugestao (FilmeSugerido, fkUsuario) VALUES ('${nomeFilme}', '${IdUsuario}') `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarSugestoes() {
    var instrucaoSql = "SELECT * FROM sugestao";
    
    return database.executar(instrucaoSql);
}

function buscarTotalUsuarios(){
    var instrucaoSql = `SELECT COUNT(fkUsuario) as 'TotalUsuários' FROM Sugestao;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function gerarGrafico(){
    var instrucaoSql = `SELECT Nome, COUNT(FilmeSugerido) as 'SugestoesUsuario' FROM Sugestao JOIN Usuario ON idUsuario = fkUsuario GROUP BY (fkUsuario) limit 5;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function buscarTotalSugestao(){
    var instrucaoSql = `SELECT COUNT(FilmeSugerido) as 'TotalSugestoes' FROM Sugestao;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}
module.exports = {
    sugerir,
    buscarSugestoes,
    buscarTotalUsuarios,
    gerarGrafico,
    buscarTotalSugestao
};