var express = require("express");
var router = express.Router();

var filmeController = require("../controllers/filmeController");

router.post("/", function (req, res) {
    filmeController.sugerir(req, res);
})

router.get("/", function (req, res) {
    filmeController.buscarSugestoes(req, res);
})

router.get("/buscarTotalUsuarios", function (req, res) {
    filmeController.buscarTotalUsuarios(req, res);
})

router.get("/gerarGrafico", function (req, res) {
    filmeController.gerarGrafico(req, res);
})

router.get("/buscarTotalSugestao", function (req, res) {
    filmeController.buscarTotalSugestao(req, res);
})



module.exports = router;