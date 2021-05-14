const express = require('express');
const path = require('path');
const jsonFile = require('./json/resuelveFC.json');
const CalculoSueldo = require('./custom/calculoSueldo.js');
const fetch = require('node-fetch');
const app = express()
const port = 3000;
//console.log(jsonFile);
const getPlayers = async () =>{
    try {
        const res = await fetch('http://localhost:3000/static/resuelveFC.json')
        const json_resp = await res.json()
        const jugadores = json_resp.jugadores;
        const calculoSueldo = new CalculoSueldo(jugadores);
        calculoSueldo.computeSueldoFijo();
        return calculoSueldo.jugadoresJSON;
    } catch (error) {
        console.log(error);
    }
}

app.use('/static', express.static(path.join(__dirname, 'json')))

app.get(
    '/',
    async function(req,res){
        const json = await getPlayers(); 
        res.send(json);
    }
);

app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}`)
});