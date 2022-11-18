function cadastrar() {

    var nomeVar = in_name.value
    var genderVar = sl_gender.value
    var dateVar = in_date.value
    var paisVar = in_pais.value
    var modalVar = sl_modal.value
    var bikeVar = in_bike.value
    var aroVar = in_aro.value
    var msgVar = in_msg.value
    var distanceVar = Number(in_distance.value)
    var jumpVar = Number(in_jump.value)
    var speedVar = Number(in_speed.value)
    var champVar = Number(in_champ.value)
    var medalVar = Number(in_champ.value)
    var winVar = Number(in_champ.value)

    

    // if (nomeVar == "" || genderVar == "" || dateVar == "" || paisVar == "" || modalVar == "" || bikeVar == "" || aroVar == "" || msgVar == "" || distanceVar == "" || jumpVar == "" || speedVar == "" || champVar == "" || medalVar == "" || winVar == "") {

    //     alert('Preencha todos os campos!')
    //     return false;
    // }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            genderServer: genderVar,
            dateServer: dateVar,
            paisServer: paisVar,
            distanceServer: distanceVar,
            jumpServer: jumpVar,
            speedServer: speedVar,
            champServer: champVar,
            bikeServer: bikeVar,
            aroServer: aroVar,
            medalServer: medalVar,
            winServer: winVar,
            msgServer: msgVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            resposta.json()
            .then(function (respostaFormatada) {
                console.log(respostaFormatada)
                console.log(respostaFormatada.insertedId)

                fetch()

            })

            alert('Cadastro realizado com sucesso!')

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

    });

    return false;

}