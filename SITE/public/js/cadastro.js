function cadastrar() {
    var Biker = {
        nomeServer: in_name.value,
        genderServer: sl_gender.value,
        dateServer: in_date.value,
        paisServer: in_pais.value,
        modalServer: sl_modal.value,
        fkConquistaServer: ''
    }

    var Conquista = {
        bikeServer: in_bike.value,
        aroServer: in_aro.value,
        msgServer: in_msg.value,
        distanceServer: Number(in_distance.value),
        jumpServer: Number(in_jump.value),
        speedServer: Number(in_speed.value),
        champServer: Number(in_champ.value),
        medalServer: Number(in_medal.value),
        winServer: Number(in_win.value)
    }

    var idConquista

    // Validação dos campos
    var invalidInput = !Biker.nomeServer || !Biker.genderServer || !Biker.dateServer || !Biker.paisServer || !Biker.modalServer || !Conquista.bikeServer || !Conquista.aroServer || !Conquista.msgServer || !Conquista.distanceServer || !Conquista.jumpServer || !Conquista.speedServer || !Conquista.champServer || !Conquista.medalServer || !Conquista.winServer

    if (invalidInput) {
        alert('Preencha todos os campos!')
        return false;
    }

    fetch("/usuarios/cadastrarConquista", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Conquista)
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json()
                .then(function (resposta) {

                    console.log("Conquista: ", resposta)

                    idConquista = resposta.insertId
                    Biker.fkConquistaServer = idConquista

                    fetch("/usuarios/cadastrarBiker", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(Biker)
                    }).then(function (resposta) {

                        if (resposta.ok) {
                            resposta.json()
                                .then(function (respostaBiker) {
                                    console.log("Bikers: ", respostaBiker)
                                }).catch()
                        }
                    })
                }).catch()

            alert('Cadastro realizado com sucesso!')

            window.location.href = "ranking.html"

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

    });

    return false;

}

