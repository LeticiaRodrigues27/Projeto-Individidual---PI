var filmeModel = require("../models/filmeModel");

function sugerir(req, res) {
    var nomeFilme = req.body.nomeFilme
    var idUsuario = req.body.idUsuario

    console.log('1. ' + nomeFilme);
    console.log('2. ' + idUsuario);

    if (nomeFilme == undefined || nomeFilme == '' || !nomeFilme) {
        res.status(400).send("Preencha o nome do filme para sugerir.")
    } else if (idUsuario == undefined) {
        res.status(400).send("Informe o id do usuário para sugerir.")
    }

    filmeModel.sugerir(nomeFilme, idUsuario)
        .then(function (resposta) {
            res.status(200).send(resposta)
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).send(err);
        })
}

function buscarSugestoes(req, res) {

    filmeModel.buscarSugestoes()
    .then(
        function (resposta) {
            res.status(200).send(resposta);
        }
    )
    .catch(function (erro) {
        res.status(500).send(erro)
    })

}

module.exports = {
    sugerir,
    buscarSugestoes
}