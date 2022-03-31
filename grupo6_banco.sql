create database systemp; 

use systemp;

create table Clientes (
idCliente int auto_increment, primary key (idCliente),
Nome_Cliente varchar(50),
CNPJ char(14),
Inscricao_Estadual char(9), 
Contato_Nome varchar(30),
Contato_email varchar(40),
Contato_Tel varchar(15),
Estado char(2),
Cidade varchar(30));

insert into Clientes (Nome_Cliente, CNPJ, Inscricao_Estadual, Contato_Nome, Contato_email, Contato_Tel, Estado, Cidade)
values ('SEW Eurodrive do Brasil LTDA', '85765386000150', '210234856', 'Leandro Almeida', 'leandro.almeida@sew.com.br', '(21)98547-2234', 'RJ', 'Rio de Janeiro'),
		('Zanini Renk LTDA', '75667312000231', '385847547', 'José Carlos', 'j.carlos@zaninirenk.com.br', '(11)98604-73021', 'SP', 'São Paulo'),
        ('Usina Etanol Com. e Exp. LTDA', '54896012000398', '321546876','Marcos Silva', 'marcossilva@etanol.com.br', '(19)90871-7564', 'SP', 'Indaiatuba'),
        ('STAR Equipamentos EIRELI', '67345372000189', '339857092','Juliana Soares', 'j.soares@star.com.br', '(31)96754-8662', 'MG', 'Extrema');

select * from clientes;

-- Tabela Cadastro_Site

create table Cadastro_usuario (
fkCliente int, foreign key(fkCliente) references Clientes (idCliente),
Login varchar(30),
Senha varchar(25),
email varchar(50)); 

insert into Cadastro_usuario (fkCliente, Login, Senha, email)
values ('1','manutencaosew', 'manusew@5532', 'manutencao1@sew.com.br'),
		('2','renkzanini', 'Manu@Tencao3021', 's.moura@zaninirenk.com.br'),
        ('3','usinaetanol.manutencao', 'UEtanol#25', 'manutencao@etanol.com.br'),
        ('4','StarEquip', 'StarEmanu$79', 'a.tadeu@star.com.br'); 

select * from Cadastro_usuario;

-- Tabela Sensor 

create table Sensor (
idSensor int auto_increment, primary key(idSensor),
fkCliente int, foreign key (fkCliente) references Clientes (idCliente), 
Maquina_cliente varchar(30),
Faixa_temp char(7)); 

insert into Sensor (fkCliente, Maquina_Cliente, Faixa_temp)
values ('1', 'Redutor Planetario 1', '40-55°C'),
		('2', 'RE2', '50-60°C'),
        ('3', 'Redutor 5', '37-43°C'),
        ('4', 'RP1', '44-49°C'); 
        
	select * from Sensor; 
	
-- Tabela Registro_temperatura

create table Registro_temperatura (
fkSensor int, foreign key (fkSensor) references sensor (idSensor),
Registro_Temp varchar(7), 
Data_Hora datetime default current_timestamp); 

insert into Registro_temperatura (fkSensor, Registro_temp, Data_Hora)
values ('1', '46.5°C', '2022-01-22 13:32:15'); 

select * from Registro_temperatura; 

select Registro_temperatura.*, Sensor.idSensor
from Sensor
join Registro_temperatura
on Registro_temperatura.fkSensor = Sensor.idSensor;
