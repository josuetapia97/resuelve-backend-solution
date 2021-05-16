const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express()
const port = 3001;
//console.log(jsonFile);
const getPlayersFromApi = async () =>{
    try {
        const res = await fetch('http://localhost:8000/jugadores/')
        const json_resp = await res.json()
        return json_resp;
    } catch (error) {
        console.log(error);
    }
}

app.get(
    '/',
    async function(req,res){
        const json = await getPlayersFromApi(); 
        res.send(json);
    }
);

app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}`)
});