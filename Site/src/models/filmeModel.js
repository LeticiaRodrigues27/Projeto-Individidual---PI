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

module.exports = {
    sugerir,
    buscarSugestoes
};