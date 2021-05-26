FROM node:16.1.0-alpine3.12
 
COPY ./server.js /server.js
COPY ./package.json /package.json
COPY ./yarn.lock /yarn.lock
# descargamos las dependencias
RUN yarn install
# se ejecuta el comando para correr el servidor
# una vez el contenedor esté en ejecución
CMD ["yarn","start"]
# Permitimos el tráfico al exterior del contenedor
# por el puerto 3001
EXPOSE 3001
