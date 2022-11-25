var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrarConquista", function (req, res){
    usuarioController.cadastrarConquista(req, res);
})

router.post("/cadastrarBiker", function (req, res){
    usuarioController.cadastrarBiker(req, res);
})

router.get("/selectData/:filtro", function (req, res) {
    usuarioController.selectData(req, res);
})

router.get("/selectInsights", function (req, res){
    usuarioController.selectInsights(req, res);
})

router.get("/selectPublicGender", function (req, res){
    usuarioController.selectPublicGender(req, res);
})

router.get("/selectPublicModal", function (req, res){
    usuarioController.selectPublicModal(req, res);
})

router.get("/selectPublicAge", function (req, res){
    usuarioController.selectPublicAge(req, res);
})


module.exports = router;