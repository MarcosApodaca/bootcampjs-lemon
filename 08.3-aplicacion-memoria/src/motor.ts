import { Carta, Tablero,  } from "./model";
// cartas, tablero
export const barajarCartas = (cartas : Carta[]): Carta[] => {
    for (let i = cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
      }
    return cartas  
  }

 export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {
    const carta = tablero.cartas[indice];

   return !carta.encontrada && !carta.estaVuelta && tablero.estadoPartida !== "DosCartasLevantadas";
   
  }  

  export const voltearLaCarta = (tablero: Tablero, indice: number) : void => {
    if (sePuedeVoltearLaCarta(tablero, indice)) {
      const carta = tablero.cartas[indice];
  
      carta.estaVuelta = true;

    }
  }  


  export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
    const cartaA = tablero.cartas[indiceA];
    const cartaB = tablero.cartas[indiceB];
    cartaA.estaVuelta = true
    cartaB.estaVuelta = true
    return cartaA && cartaB && cartaA.idFoto === cartaB.idFoto && indiceA !== indiceB;

  }

export  const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {
    tablero.cartas[indiceA].encontrada = true;
    tablero.cartas[indiceB].encontrada = true;
  }
  
  export const parejaNoEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {
    const cartaA = tablero.cartas[indiceA];
    const cartaB = tablero.cartas[indiceB];
    
    if (cartaA.idFoto !== cartaB.idFoto) {
      const imagenCartaA = document.querySelector(`[data-indice-imagen="${indiceA}"]`) as HTMLImageElement;
      const imagenCartaB = document.querySelector(`[data-indice-imagen="${indiceB}"]`) as HTMLImageElement;
      cartaA.estaVuelta = false
      cartaB.estaVuelta = false
       setTimeout(() => {
         imagenCartaB.src = "";
          imagenCartaA.src = "";
        }, 1000); 
      
    }
    
  };
  
  

  export const esPartidaCompleta = (tablero: Tablero) : boolean => {
    return tablero.cartas.every((carta) => carta.encontrada);
    
  }

  export const iniciaPartida = (tablero: Tablero): void => {
    tablero.cartas = barajarCartas(tablero.cartas);

    // Reiniciar el estado de todas las cartas
    tablero.cartas.forEach((carta) => {
      carta.estaVuelta = false;
      carta.encontrada = false;
    });
  
    // Establecer el estado inicial de la partida
    tablero.estadoPartida = "PartidaNoIniciada";
    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;
  };  