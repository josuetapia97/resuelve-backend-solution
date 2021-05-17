const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3001;

const fetchData = async (url) =>{
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}
const fetchAllData = async (json) => {
    const jugadores = [...json];
    for(const jugador of jugadores) {
        try {
            jugador.nombre += (jugador.apellido)?
                " "+jugador.apellido:""
            delete jugador.apellido;
            const nivel = await fetchData(jugador.nivel);
            jugador.nivel = nivel.nivel;
            jugador.goles_minimos = nivel.goles_mes;
            const equipo = await fetchData(jugador.equipo);
            jugador.sueldo_completo = null;
            jugador.equipo = equipo.nombre;
        } catch (error) {
            console.log(error);
        }
    }
    return {jugadores};
}
const getPlayersFromApi = async () =>{
    try {
        const res = await fetch('http://localhost:8000/jugadores/')
        const jsonResp = await res.json()
        const jsonRespAllData = await fetchAllData(jsonResp);
        return jsonRespAllData;
    } catch (error) {
        console.log(error);
    }
}


app.get(
    '/jugadores',
    async function(req,res){
        const json = await getPlayersFromApi();
        res.send(json);
    }
);

app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}`)
});