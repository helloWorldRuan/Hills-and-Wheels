var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function cadastrarConquista(req, res) {
    var distance = req.body.distanceServer;
    var jump = req.body.jumpServer;
    var speed = req.body.speedServer;
    var champ = req.body.champServer;
    var bike = req.body.bikeServer;
    var aro = req.body.aroServer;
    var medal = req.body.medalServer;
    var win = req.body.winServer;
    var msg = req.body.msgServer;

    console.log(distance, jump, speed, champ, bike, aro, medal, win, msg)


    if (distance == undefined) {
        res.status(400).send("Seu distance está undefined!");
    } else if (jump == undefined) {
        res.status(400).send("Seu jump está undefined!");
    } else if (jump == undefined) {
        res.status(400).send("Seu jump está undefined!");
    }else if (jump == undefined) {
        res.status(400).send("Seu jump está undefined!");
    }else if (jump == undefined) {
        res.status(400).send("Seu jump está undefined!");
    }else if (jump == undefined) {
        res.status(400).send("Seu jump está undefined!");
    }else if (jump == undefined) {
        res.status(400).send("Seu jump está undefined!");
    }else if (jump == undefined) {
        res.status(400).send("Seu jump está undefined!");
    } else {
        usuarioModel.cadastrarFeito(distance, jump, speed, champ, bike, aro, medal, win, msg)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            )
    }
}

function cadastrarBiker(req, res) {
    var nome = req.body.nomeServer;
    var gender = req.body.genderServer;
    var date = req.body.dateServer;
    var pais = req.body.paisServer;
    var modal = req.body.modalServer;

    console.log(nome, gender, date, pais, modal)

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (gender == undefined) {
        res.status(400).send("Seu gender está undefined!");
    } else if (date == undefined) {
        res.status(400).send("Seu date está undefined!");
    }else if (pais == undefined) {
        res.status(400).send("Seu pais está undefined!");
    }else if (modal == undefined) {
        res.status(400).send("Seu modal está undefined!");
    } else {
        usuarioModel.cadastrarBiker(nome, gender, date, pais, modal)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            )
    }
}


module.exports = {
    testar,
    cadastrarConquista,
    cadastrarBiker
}