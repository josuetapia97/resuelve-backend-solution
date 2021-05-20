

# Para la solución a la prueba se crearon tres módulos:

* # registro-jugadores 📖

En este módulo se almacena una base de datos en SQLlite, la cual contiene el catalogo de equipos, catalogo de niveles y los jugadores registrados. Para hacer más comoda la comunicación se desarrolló una `API REST en Django` la cual serializa los datos de la base de datos y los convierte en endpoints. Este módulo permite hacer el `CRUD` a la base de datos con operaciones http, es decir, si se requiere modificar, agregar, eliminar o consultar los datos se puede hacer por sus operaciones correspondientes en http

* # consumidor-api 🔌

Este módulo sirve como intermediario entre el módulo de `registro-jugadores` y el `calculo sueldo`, este módulo es un servidor creado en `Node.js` que nos permite consumir la API anterior con el fin de darle formato al json que ésta nos regresa, todo esto para simular el input solicitado en el challenge.
```json
{
   "jugadores": [
        {
            "id": 1,
            "nombre": "Juan Perez",
            "nivel": "A",
            "goles": 6,
            "sueldo": 50000,
            "bono": 25000,
            "equipo": "rojo",
            "goles_minimos": 5,
            "sueldo_completo": null
        }
   ]
}
``` 

* # calculo sueldo 💰

 En este módulo se hace el calculo de los `sueldos completos`, de igual forma es un server creado en `Node.js` el cual consume la api anterior (`consumidor-api`). Como salida este módulo nos proporciona un endpoint que nos regresa el siguiente json con los sueldos completos ya calculados.

 ```json
 [
    {
        "id": 1,
        "nombre": "Juan Perez",
        "nivel": "A",
        "goles": 6,
        "sueldo": 50000,
        "bono": 25000,
        "equipo": "rojo",
        "goles_minimos": 5,
        "sueldo_completo": 77000
    }
 ]
 ```

# Levantar el ambiente 🚀

Levantar el ambiente realmente es muy sencillo.

Primero tenemos que clonar el repo, para ello necesitamos instalar un par de cosas.

- Instalar [Git](https://git-scm.com/downloads "instalar Git")
- Instalar [Docker](https://docs.docker.com/get-docker/ "instalar Docker")

Abrimos una terminal e introducimos el siguiente comando:

``git clone https://github.com/josuetapia97/resuelve-backend-solution.git``

La idea es levantar todo con ayuda de contenedores, pero levantar uno por uno puede ser muy tedioso, para ello mejor se implementó un docker-compose que levanta todo con solo dos comandos, pero antes, tenemos que hacer algunas modificaciones ya que si estamos simulando un deploy algunas credenciales no se pueden subir a un repositorio como es el caso de github, entonces creamos un archivo `.env` en la siguiente ruta `resuelve-backend-solution/registro-jugadores/jugadores/jugadores` con el siguiente contenido:
```file
DEBUG=on
SECRET_KEY='********'
SQLITE_URL=sqlite:///db.sqlite3
```
donde el valor de SECRET_KEY es un string y es usado para brindar firmas criptográficas, debe de ser único y su valor no debe de ser fácil de predecir, [más información](https://docs.djangoproject.com/en/3.2/ref/settings/#std:setting-SECRET_KEY "Ir Django Docs") 

una vez creado nuestro archivo procedemos a crear los contenedores con un `docker-compose build` pero para ello necesitamos estar parados en una terminal en la ubicación de nuestro archivo `resuelve-backend-solution/`.
Corremos el siguiente comando 
``docker-compose build`` terminado de crear las imagenes de docker, procedemos a ejecutar el siguiente comando ``docker-compose up`` hasta este punto ya se tienen las instancias arriba por lo que podemos hacer uso de los servicios.

Para ello abrimos nuestro navegador e ingresamos las siguientes URL:

## registro-jugadores

``http://localhost/``

nos muestra la interfaz de la API REST 

``http://localhost/niveles/``

nos muestra el catalogo de niveles

``http://localhost/equipos/``

nos muestra el catalogo de equipos

``http://localhost/jugadores/``

nos muestra los jugadores registrados 

### Nota: para agregar un valor basta con ir a la ruta deseada y agregar los datos solicitados, posteriormente darle en POST, sí queremos acceder a un valor en especifico para modificarlo necesitamos agregar a la URL el id del objeto que queremos modificar. Ej
``http://localhost/jugadores/1/``

## consumidor-api

``http://localhost:3001/jugadores``

nos brinda el JSON de entrada al módulo de calculo de sueldos completos, éste obtiene los valores de la API anterior.

## calculo-sueldo

``http://localhost:3000/sueldo_completo``

nos da como respuesta el JSON con el calculo de los sueldos completos.

Si necesitamos cambiar los valores, basta con modificarlos en el módulo ``registro-jugadores`` y refrescar el navegador con la ruta ``http://localhost:3000/sueldo_completo``

        




