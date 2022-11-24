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

router.get("/selectData/:filtro", function (req, res) {
    usuarioController.selectData(req, res);
});

router.get("/selectInsights" ,function (req, res){
    usuarioController.selectInsights(req, res);
})

module.exports = router;