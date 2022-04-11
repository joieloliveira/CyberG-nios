COMO RODAR O PROJETO BAIXADO
Instalar todas as dependencias indicada pelo package.json
### npm install

Rodar o projeto React 
### npm start

criar uma image
### docker build .
pra ver a ultima imagem criada
### docker image ls
id da image criado com docker build
### docker run -p 3000:3000 -d 'id'

acesse a no seu navegador http://localhost:3000/tabelas e veja o resultado

docker stop (mais o id da image criado com docker build) => para parar a execução do conteiner
