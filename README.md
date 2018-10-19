Utilizando o sequelize com MY SQL

npm install --save sequelize
npm install --save sequelize-cli
npm install --save mysql2 - Banco de dados que irei utilizar na aplicação

Roda o comando depois no terminal

node_modules/.bin/sequelize init

Ele vai gerar as pastas:
migrations
models
seeders
config

Configurar os dados do banco de dados no config/config.json

e se não tiver o banco de dados criado, então criar com o comando:

db:create
