const express = require('express');
//const json = require('./json/resuelveFC.json');
const CalculoSueldo = require('./custom/calculoSueldo.js');
const fetch = require('node-fetch');
const app = express()
const port = 3000;
const getPlayers = async () =>{
    try {
        const res = await fetch('http://consumidor-api:3001/jugadores')
        const json_resp = await res.json()
        //const json_resp = json;
        const jugadores = json_resp.jugadores;
        const calculoSueldo = new CalculoSueldo(jugadores);
        calculoSueldo.computeSueldoFijo();
        return calculoSueldo.jugadoresJSON;
    } catch (error) {
        console.log(error);
    }
}

app.get(
    '/sueldo_completo',
    async function(req,res){
        const json = await getPlayers(); 
        res.send(json);
    }
);

app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}`)
});