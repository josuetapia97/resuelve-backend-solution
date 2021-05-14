class CalculoSueldo{
    constructor(jugadores){
        this.jugadores = jugadores;
        this.golesEquipo=0;
        this.golesMinimosEquipo = 50;
        this.golesXcentEquipo = 0;
    }
    get jugadoresJSON(){
        return this.jugadores;
    }
    getGolesEquipo(){
        try {
            let arrayGoles = this.jugadores.map(jugador=>jugador.goles);
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            this.golesEquipo = arrayGoles.reduce(reducer);
        } catch (error) {
            console.timeLog(error);
        }
    };
    getXcentEquipo(){
        const res =this.golesEquipo/this.golesMinimosEquipo;
        this.golesXcentEquipo = 0.5*res;
    };
    computeSueldoFijo(){
        this.getGolesEquipo();
        this.getXcentEquipo();
        try {
            this.jugadores.forEach(jugador=>{
                const individual = jugador.goles/jugador.goles_minimos;
                const individualXcent = individual*0.5;
                const bonoVariableXcent = individualXcent + this.golesXcentEquipo;
                const bonoVariable = +jugador.bono * bonoVariableXcent;
                jugador.sueldo_completo = jugador.sueldo + bonoVariable;
            });
        } catch (error) {
            console.log(error);
        }
    };
}

module.exports = CalculoSueldo;