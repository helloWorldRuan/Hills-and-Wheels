var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM Usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarFeito(distance, jump, speed, champ, bike, aro, medal, win, msg) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFeito():", distance, jump, speed, champ, bike, aro, medal, win, msg);
    
    var instrucao = `
        INSERT INTO Conquista (distancia, salto, velocidade, camps, medalhas, vitorias, bike, aro, msg ) VALUES ('${distance}','${jump}','${speed}','${champ}','${medal}','${win}','${bike}','${aro}', '${msg}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarBiker(nome, gender, date, pais, modal) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarBiker():", nome, gender, date, pais, modal);
    
    var instrucao = `
        INSERT INTO Biker (nome, genero, dtNasc, pais, fkModalidade) VALUES ('${nome}','${gender}','${date}','${pais}','${modal}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    entrar,
    cadastrarFeito,
    cadastrarBiker,
    listar,
};