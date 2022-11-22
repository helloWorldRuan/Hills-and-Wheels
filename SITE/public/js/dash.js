
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
    fetch('/usuarios/buscarPorId', {
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(filtro)
    })
    .then(function (resposta) {
        resposta.json()
            .then(function (json) {
                for(var i = 0; i < json.length; i++) {
                    ranking_top.innerHTML = json[i].idBiker
                }
            })
            .catch(function (erro) {
                console.error(erro);
            })
    })
    .catch(function (erro) {
        console.error(erro);
    })
}



