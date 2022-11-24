var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.post("/cadastrarConquista", function (req, res){
    usuarioController.cadastrarConquista(req, res);
})

router.post("/cadastrarBiker", function (req, res){
    usuarioController.cadastrarBiker(req, res);
})

router.get("/buscarPorId/:filtro", function (req, res) {
    usuarioController.buscarPorIdRank(req, res);
});

module.exports = router;