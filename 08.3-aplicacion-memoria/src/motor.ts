import { Carta, Tablero } from "./model";

const barajarCartas = (cartas : Carta[]): Carta[] => {
    for (let i = cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
      }
    return cartas  
  }

  const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {
    
  }  

  const voltearLaCarta = (tablero: Tablero, indice: number) : void => {
    
  }  