var database = require("../database/config")


function cadastrarFeito(distance, jump, speed, champ, bike, aro, medal, win, msg) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFeito():", distance, jump, speed, champ, bike, aro, medal, win, msg);

    var instrucao = `
        INSERT INTO Conquista (distancia, salto, velocidade, camps, medalhas, vitorias, bike, aro, msg ) VALUES (${distance},${jump},${speed},${champ},${medal},${win},'${bike}','${aro}', '${msg}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarBiker(nome, gender, date, pais, modal, conquista) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarBiker():", nome, gender, date, pais, modal, conquista);

    var instrucao = `
        INSERT INTO Biker (nome, genero, dtNasc, pais, fkModalidade, fkConquista) VALUES ('${nome}','${gender}','${date}','${pais}',${modal}, ${conquista});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function selectData(filtro, order) {
    console.log(filtro, order);

    var instrucao =
    `
    SELECT  b.idBiker, b.nome, m.nome modalidade, c.* FROM Biker b 
    JOIN Modalidade m ON b.fkModalidade = m.idModalidade 
    JOIN Conquista c ON b.fkConquista = c.idConquista
    ORDER BY ${filtro == undefined ? 'idBiker' : filtro} ${order};
    `;

    return database.executar(instrucao)
}

function selectInsights(){
    var instrucao = 
    "SELECT COUNT(idBiker) Bikers, COUNT(pais) Paises, SUM(distancia) KM FROM Biker JOIN Conquista ON fkConquista = idCOnquista;"

    console.log(instrucao)
    
    return database.executar(instrucao)
}

module.exports = {
    cadastrarFeito,
    cadastrarBiker,
    selectData,
    selectInsights
};