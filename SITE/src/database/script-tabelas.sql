create database Ceres;
use Ceres;

create table Usuario(
idUser int auto_increment,
nome varchar(45),
CNPJ char(14),
telefone varchar(9),
estado varchar(45),
cidade varchar(45),
CEP char(8),
complemento varchar(45),
email varchar(60), 
username varchar(45),
senha varchar(30),
constraint chkemail check (email like '%@%'),
constraint chkestado check (estado in ('AC','AL','AP','AM','BA','CE','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO')),
primary key (idUser)
);

create table Armazem(
idArmazem int auto_increment,
tamanho int,
especie varchar(45),
estado char(2),
cidade varchar(45),
CEP char(8),
fkUser int,
constraint chkestado2 check (estado in ('AC','AL','AP','AM','BA','CE','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO')),
constraint chkespecie check (especie in ('Café','Araucária','Cacau')),
constraint fkusuario foreign key (fkUser) references Usuario(idUser),
primary key (idArmazem)
);

create table DHT11(
idSensor int auto_increment,
fkArmazem int,
constraint fkarmazem foreign key (fkArmazem) references Armazem(idArmazem),
primary key (idSensor)
);

create table Metrica(
idMetrica int,
horario datetime default current_timestamp,
temperatura double,
umidade double,
fkSensor int,
constraint fksensor foreign key (fkSensor) references DHT11(idSensor),
primary key (idMetrica, fkSensor)
);