
var i = 0
var j = 0

function changeRanking() {
    j = 0
    if (i == 0) {
        var test = document.querySelector('.test')
        var test2 = document.querySelector('.test2')
        var testbar = document.querySelector('.testbar')
        var testbar2 = document.querySelector('.testbar2')

        test.classList.remove('active')
        test2.classList.toggle('active')
        testbar.classList.remove('activebar')
        testbar2.classList.toggle('activebar')

        contentRanking.style.opacity = 1
        contentRanking.style.display = "flex"
        contentRanking.style.width = "100%"
        contentRanking.style.left = 0

        contentInsight.style.opacity = "0"
        contentInsight.style.display = "flex"

        i++
    }
}

function changeInsight() {
    i = 0
    if (j == 0) {
        var test = document.querySelector('.test')
        var test2 = document.querySelector('.test2')
        var testbar = document.querySelector('.testbar')
        var testbar2 = document.querySelector('.testbar2')

        test2.classList.remove('active')
        test.classList.toggle('active')
        testbar2.classList.remove('activebar')
        testbar.classList.toggle('activebar')

        contentInsight.style.opacity = "1"
        contentInsight.style.display = "flex"

        contentRanking.style.opacity = 0
        contentRanking.style.display = "none"
        contentRanking.style.width = "80%"

        j++
    }
}



function buscarDados(filtro) {
    rankingBody.innerHTML = ""


    fetch(`/usuarios/buscarPorId/${filtro}`, {
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(function (resposta) {
            resposta.json()
                .then(function (resposta) {

                    console.log(resposta)

                    for (var i = 0; i < resposta.length; i++) {

                        var biker = resposta[i]

                        if (i < 3) {
                            rankingBody.innerHTML += `
                            <tr name="top" class="row top3">
                                <td class="td-id">${biker.idBiker}</td>
                                <td class="td-nome">${biker.nome}</td>
                                <td>${biker.modalidade}</td>
                                <td>${biker.velocidade}km/h</td>
                                <td>${biker.distancia}km</td>
                                <td>${biker.salto}m</td>
                                <td>${biker.camps}</td>
                                <td>${biker.medalhas}</td>
                                <td>${biker.vitorias}</td>
                            </tr>
                            `;


                        } else {
                            rankingBody.innerHTML += `
                                <tr name="rank" class="row rank">
                                    <td class="td-id">${biker.idBiker}</td>
                                    <td class="td-nome">${biker.nome}</td>
                                    <td>${biker.modalidade}</td>
                                    <td>${biker.velocidade}km/h</td>
                                    <td>${biker.distancia}km</td>
                                    <td>${biker.salto}m</td>
                                    <td>${biker.camps}</td>
                                    <td>${biker.medalhas}</td>
                                    <td>${biker.vitorias}</td>
                                </tr>
                                `;
                        }
                    }

                    var top = document.getElementsByName("top")
                    top[0].style = 'border-radius: 5px 5px 0 0'
                    top[top.length - 1].style = 'border-radius: 0 0 5px 5px'

                    var rank = document.getElementsByName("rank")
                    rank[0].style = 'border-radius: 5px 5px 0 0; margin-top: 1rem'
                    rank[rank.length - 1].style = 'border-radius: 0 0 5px 5px'

                })


                .catch(function (erro) {
                    console.error(erro);
                })
        })
        .catch(function (erro) {
            console.error(erro);
        })
}



