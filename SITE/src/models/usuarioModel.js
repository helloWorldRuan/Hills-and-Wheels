var database = require("../database/config")

// Cadastrando conquistas
function cadastrarFeito(distance, jump, speed, champ, bike, aro, medal, win, msg) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFeito():", distance, jump, speed, champ, bike, aro, medal, win, msg);

    var instrucao = `
        INSERT INTO Conquista (distancia, salto, velocidade, camps, medalhas, vitorias, bike, aro, msg ) VALUES (${distance},${jump},${speed},${champ},${medal},${win},'${bike}','${aro}', '${msg}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Cadastrando usuário (biker)
function cadastrarBiker(nome, gender, date, pais, modal, conquista) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarBiker():", nome, gender, date, pais, modal, conquista);

    var instrucao = `
        INSERT INTO Biker (nome, genero, dtNasc, pais, fkModalidade, fkConquista) VALUES ('${nome}','${gender}','${date}','${pais}',${modal}, ${conquista});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Select dados do banco e ordenando por coluna
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

// Select dados dos insights
function selectInsights(){
    var instrucao = `
        SELECT COUNT(idBiker) Bikers, COUNT(DISTINCT pais) Paises, SUM(distancia) KM 
        FROM Biker JOIN Conquista ON fkConquista = idConquista;`

    console.log(instrucao)
    
    return database.executar(instrucao)
}

// Select dados do gráfico de público por gênero
function selectPublicGender(){
    var instrucao = "SELECT COUNT(genero) gender FROM Biker GROUP BY genero;"
    console.log(instrucao)

    return database.executar(instrucao)
}

// Select dados do gráfico de público por modalidade
function selectPublicModal(){
    var instrucao = `
        SELECT m.nome as modal, COUNT(fkModalidade) bikers FROM Biker
        JOIN Modalidade as m ON fkModalidade = idModalidade
        GROUP BY m.nome;`

    console.log(instrucao)

    return database.executar(instrucao)
}

// Select dados do gráfico de público por idade
function selectPublicAge(){
    var instrucao = `
        SELECT COUNT(TIMESTAMPDIFF(YEAR, dtNasc, CURDATE())) AS 'idade' FROM Biker
        WHERE YEAR(dtNasc) >= 2000 AND YEAR(dtNasc) <= 2010
        UNION
        SELECT COUNT(TIMESTAMPDIFF(YEAR, dtNasc, CURDATE())) FROM Biker
        WHERE YEAR(dtNasc) >= 1990 AND YEAR(dtNasc) <= 2000
        UNION
        SELECT COUNT(TIMESTAMPDIFF(YEAR, dtNasc, CURDATE())) FROM Biker
        WHERE YEAR(dtNasc) >= 1980 AND YEAR(dtNasc) <= 1990
        UNION
        SELECT COUNT(TIMESTAMPDIFF(YEAR, dtNasc, CURDATE())) FROM Biker
        WHERE YEAR(dtNasc) >= 1970 AND YEAR(dtNasc) <= 1980
        UNION
        SELECT COUNT(TIMESTAMPDIFF(YEAR, dtNasc, CURDATE())) FROM Biker
        WHERE YEAR(dtNasc) >= 1960 AND YEAR(dtNasc) <= 1970
        UNION
        SELECT COUNT(TIMESTAMPDIFF(YEAR, dtNasc, CURDATE())) FROM Biker
        WHERE YEAR(dtNasc) >= 1950 AND YEAR(dtNasc) <= 1960;
    `

    console.log(instrucao)

    return database.executar(instrucao)
}

module.exports = {
    cadastrarFeito,
    cadastrarBiker,
    selectData,
    selectInsights,
    selectPublicGender,
    selectPublicModal,
    selectPublicAge

};