var usuarioModel = require("../models/usuarioModel");


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

    if (distance == undefined) {
        res.status(400).send("Seu distance está undefined!");
    } else if (jump == undefined) {
        res.status(400).send("Seu jump está undefined!");
    } else if (speed == undefined) {
        res.status(400).send("Seu speed está undefined!");
    } else if (champ == undefined) {
        res.status(400).send("Seu champ está undefined!");
    } else if (bike == undefined) {
        res.status(400).send("Seu bike está undefined!");
    } else if (aro == undefined) {
        res.status(400).send("Seu aro está undefined!");
    } else if (medal == undefined) {
        res.status(400).send("Seu medal está undefined!");
    } else if (win == undefined) {
        res.status(400).send("Seu win está undefined!");
    } else if (msg == undefined) {
        res.status(400).send("Seu msg está undefined!");
    } else if (win == undefined) {
        res.status(400).send("Seu win está undefined!");
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
    var conquista = req.body.fkConquistaServer

    console.log('fkConquista', conquista)

    console.log(nome, gender, date, pais, modal, conquista)

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (gender == undefined) {
        res.status(400).send("Seu gender está undefined!");
    } else if (date == undefined) {
        res.status(400).send("Seu date está undefined!");
    } else if (pais == undefined) {
        res.status(400).send("Seu pais está undefined!");
    } else if (modal == undefined) {
        res.status(400).send("Seu modal está undefined!");
    } else {
        usuarioModel.cadastrarBiker(nome, gender, date, pais, modal, conquista)
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

function selectData(req, res) {
    var filtro = req.params.filtro;
    var order = 'DESC'

    if (filtro == 'idBiker') {
        order = 'ASC'
    } else if (filtro == 'b.nome') {
        order = 'ASC'
    } else if (filtro == 'modalidade') {
        order = 'ASC'
    }
    usuarioModel.selectData(filtro, order)
        .then(function (resposta) {
            res.json(resposta)
        })
        .catch(function (erro) {
            console.error(erro);
        })
}

function selectInsights(req, res) {
    usuarioModel.selectInsights()
        .then(function (resposta) {
            res.json(resposta)
        })
        .catch(function (erro) {
            console.error(erro)
        })
}

function selectPublicGender(req, res) {
    usuarioModel.selectPublicGender()
        .then(function (resposta) {
            res.json(resposta)
        })
        .catch(function (erro) {
            console.error(erro)
        })
}

function selectPublicModal(req, res) {
    usuarioModel.selectPublicModal()
        .then(function (resposta) {
            res.json(resposta)
        })
        .catch(function (erro) {
            console.error(erro)
        })
}

function selectPublicAge(req, res) {
    usuarioModel.selectPublicAge()
        .then(function (resposta) {
            res.json(resposta)
        })
        .catch(function (erro) {
            console.error(erro)
        })

}


module.exports = {
    cadastrarConquista,
    cadastrarBiker,
    selectData,
    selectInsights,
    selectPublicGender,
    selectPublicModal,
    selectPublicAge
}