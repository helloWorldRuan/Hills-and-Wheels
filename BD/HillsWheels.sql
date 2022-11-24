CREATE DATABASE dbHillsWheels;
USE dbHillsWheels;

CREATE TABLE Modalidade(
idModalidade INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(10)
);

INSERT INTO Modalidade VALUES
(null, 'MTB'),
(null, 'Speed'),
(null, 'Downhill'),
(null, 'BMX'),
(null, 'Bike Trial');

CREATE TABLE Conquista(
idConquista INT PRIMARY KEY AUTO_INCREMENT,
distancia INT,
salto INT,
velocidade INT,
camps INT,
medalhas INT,
vitorias INT,
bike VARCHAR(30),
aro FLOAT,
msg VARCHAR(200)
);

CREATE TABLE Biker(
idBiker INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
genero CHAR(1),
CONSTRAINT chkGenero CHECK (genero in ('M', 'F')),
dtNasc DATE,
pais VARCHAR(45),
fkModalidade INT,
FOREIGN KEY (fkModalidade) REFERENCES Modalidade (idModalidade),
fkConquista INT,
FOREIGN KEY (fkConquista) REFERENCES Conquista (idConquista)
);


SELECT * FROM Conquista;
SELECT * FROM Biker;
SELECT * FROM Conquista;

-- SELECT RANKING
SELECT  b.idBiker, b.nome, m.nome, c.* FROM Biker b 
JOIN Modalidade m ON b.fkModalidade = m.idModalidade 
JOIN Conquista c ON b.fkConquista = c.idConquista;

-- Quantidade de usuários (Bikers) | Kilometros totais percorridos | Quantidade de países distintos
SELECT COUNT(idBiker) Bikers, COUNT(pais) Paises, SUM(distancia) KM FROM Biker
JOIN Conquista ON fkConquista = idCOnquista;




