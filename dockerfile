# Usando uma imagem base do Node.js
FROM node:22

# Definindo o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para dentro do container
COPY package.json package-lock.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta onde o Fastify estará rodando
EXPOSE 3333

# Comando para rodar a aplicação
CMD ["npm", "start"]
