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
SELECT  COUNT(idBiker) Bikers, COUNT(DISTINCT pais) Paises, SUM(distancia) KM FROM Biker
JOIN Conquista ON fkConquista = idConquista;

-- Quantidade de público por gênero
SELECT COUNT(genero) gender  FROM Biker
GROUP BY genero;

-- Quantidade de público por modalidade
SELECT m.nome as modal, COUNT(fkModalidade) bikers FROM Biker
JOIN Modalidade as m ON fkModalidade = idModalidade
GROUP BY m.nome;

-- Quantidade de público por faixa etária
SELECT COUNT(TIMESTAMPDIFF(YEAR, dtNasc, CURDATE())) AS '10-20 ANOS' FROM Biker
WHERE YEAR(dtNasc) >= 2000 AND YEAR(dtNasc) <= 2010
UNION
SELECT COUNT(TIMESTAMPDIFF(YEAR, dtNasc, CURDATE())) AS '20-30 ANOS' FROM Biker
WHERE YEAR(dtNasc) >= 1990 AND YEAR(dtNasc) <= 2000
UNION
SELECT COUNT(TIMESTAMPDIFF(YEAR, dtNasc, CURDATE())) AS '30-40 ANOS' FROM Biker
WHERE YEAR(dtNasc) >= 1980 AND YEAR(dtNasc) <= 1990
UNION
SELECT COUNT(TIMESTAMPDIFF(YEAR, dtNasc, CURDATE())) AS '40-50 ANOS' FROM Biker
WHERE YEAR(dtNasc) >= 1970 AND YEAR(dtNasc) <= 1980
UNION
SELECT COUNT(TIMESTAMPDIFF(YEAR, dtNasc, CURDATE())) AS '50-60 ANOS' FROM Biker
WHERE YEAR(dtNasc) >= 1960 AND YEAR(dtNasc) <= 1970
UNION
SELECT COUNT(TIMESTAMPDIFF(YEAR, dtNasc, CURDATE())) AS '60-70 ANOS' FROM Biker
WHERE YEAR(dtNasc) >= 1950 AND YEAR(dtNasc) <= 1960;





