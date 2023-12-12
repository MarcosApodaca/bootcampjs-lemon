import { Carta, Tablero, cartas, tablero } from "./model";

const barajarCartas = (cartas : Carta[]): Carta[] => {
    for (let i = cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
      }
    return cartas  
  }

  const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {

    if(tablero.estadoPartida !== "DosCartasLevantadas"){
        return true
    }else return false
   
  }  

  const voltearLaCarta = (tablero: Tablero, indice: number) : void => {
    
  }  
  

  export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
    if (indiceA === indiceB){
        return true
    } else return false
  }

  const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {
    if ( indiceA === indiceB) {
        tablero.estadoPartida = "PartidaCompleta"
    }
  }
  
  const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {
    if(indiceA !== indiceB) {
        tablero.estadoPartida = "CeroCartasLevantadas"
    }
  }

  export const esPartidaCompleta = (tablero: Tablero) : boolean => {
        return tablero.every((tablero) => true)
  }

  export const iniciaPartida = (tablero: Tablero): void => {
    tablero
    barajarCartas(cartas)
  };  