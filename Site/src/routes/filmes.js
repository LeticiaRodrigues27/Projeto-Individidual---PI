var express = require("express");
var router = express.Router();

var filmeController = require("../controllers/filmeController");

router.post("/", function (req, res) {
    filmeController.sugerir(req, res);
})

router.get("/", function (req, res) {
    filmeController.buscarSugestoes(req, res);
})

router.get("/total-sugestoes", function (req, res) {
    filmeController.buscarTotalUsuarios(req, res);
})

module.exports = router;