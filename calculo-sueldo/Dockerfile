FROM node:16.1.0-alpine3.12

# copiamos el servidor al contenedor 
COPY ./server.js /server.js
COPY ./custom /custom
COPY ./package.json /package.json
COPY ./yarn.lock /yarn.lock
# descargamos el modulo con el cual trabaja
# el servidor
RUN yarn install
# se ejecuta el comando para correr el servidor
# una vez el contenedor esté en ejecución
CMD ["yarn","start"]
# Permitimos el tráfico al exterior del contenedor
# por el puerto 3000
EXPOSE 3000
