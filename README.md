# Comandos

### Node

```
node - v #verifica a versão do Node
npm -v #verifica a versão do npm
npm init #cria o package json
npm i ou npm install #instala todas as dependências
npm i nome-do-pacote #instala os pacotes
npm unistall #desinstala os pacotes
npm run nome-do-script #executa um script do package.json
npm start #executa o script start do package.json
```

### Git

```
git config --global user.name "Giovanna Borges"
gir config --global user.email grborgesp@gmail.com
git init #inicializa o git em uma pasta
git remote add origin https://github.com/gboorges/api-bke-express.git
```

### Prisma
```
npm i prisma # instala o prisma como dependência de desenvolvimento
npx prisma init # cria um schema prisma e um arquivo de enviroment
npx prisma db pull # cria um modelo baseado em como está no banco. Caso o bd seja mudado no banco, é preciso mandar o mesmo comando novamente
npm i @prisma/client
npx prisma generate # lê o modelo e gera as funções que interagirão com o modelo através do client
npx prisma db push # cria uma tabela no banco de dados a partir do modelo criado no prisma
```