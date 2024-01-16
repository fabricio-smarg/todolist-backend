# Sobre o repositório
 Este repositório contem o backend de uma API feita com NodeJS e Express seguindo o seguinte <a href="https://youtu.be/Cdu0WJhI-d8">tutorial</a> no youtube, do canal <a href="https://www.youtube.com/@ManualdoDev">Manual do Dev</a>. Eles também possuem um perfil aqui no <a href="https://github.com/manualdodev"> GitHub </a>. 

### Tecnologias usadas
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

### Como usar
Primeiro, precisamos clonar ou baixar este repositório.

```

$ git clone https://github.com/fabricio-smarg/todolist-backend.git
```
Após clonar o repositório, é necessário criar um banco de dados MySQL junto com as colunas necessárias.
```

$ CREATE DATABASE database_name;
```
Em seguida é necessário criar a tabela de "tarefas" que será utilizada pela aplicação.
```

$ CREATE TABLE tasks(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    status VARCHAR(45) NOT NULL,
    created_at VARCHAR(45) NOT NULL
);
```
Na raiz do projeto existirá um arquivo chamado ".env.example" este arquivo contém 5 campos que deverão ser preenchidos em um arquivo chamado ".env", basta criar este arquivo ou renomear o arquivo de exemplo . Depois disso, basta preencher os campos com os dados referentes ao seu banco de dados.

```

PORT= [Porta em que o servidor será executado]
MYSQL_HOST= [O host da sua máquina, por padrão é 'localhost']
MYSQL_USER= [Seu nome de usuário, por padrão o MySQL usa o usuário 'root']
MYSQL_PASSWORD= [A senha que você escolheu ao instalar o MySQL]
MYSQL_DB= [O nome do banco de dados criado anteriormente.]
```

Por fim, basta executar o comando para iniciar o servidor (ainda dentro da pasta "backend") e abrir o arquivo "index.html".

```

$ npm start
```

### Licença
Distribuído sob a Licença MIT. Consulte <code>LICENSE</code> para obter mais informações.

### Contato
[![Linkedin](https://img.shields.io/badge/Fabrício%20Alves%20Smargiasse-blue?style=flat-square&logo=Linkedin&logoColor=white&link=LINK-DO-SEU-LINKEDIN)](https://www.linkedin.com/in/fabricio-alves-smargiasse/)
[![GitHub](https://img.shields.io/github/followers/fabricio-smarg?label=follow&style=social)](https://github.com/fabricio-smarg)
