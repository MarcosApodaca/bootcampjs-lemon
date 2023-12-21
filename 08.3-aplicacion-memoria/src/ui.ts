import { Tablero, cartas, tablero } from "./model"
import { barajarCartas, parejaEncontrada, parejaNoEncontrada, sePuedeVoltearLaCarta, sonPareja, } from "./motor"

let partidaIniciada = false;

const iniciarPartida = () => {
  partidaIniciada = true;
  tablero;
  barajarCartas(cartas);
};

export const iniciaPartida = document.getElementById("iniciaPartida") as HTMLButtonElement
 iniciaPartida.addEventListener('click', function() {
    iniciarPartida()
} )


const divCarta = document.querySelectorAll('.contenido');  


divCarta.forEach(carta => {
  carta.addEventListener('click', () => {
    
    if (!partidaIniciada) {
      alert("Debes de iniciar la partida, antes de poder seleccionar")
      return;
    }
    const indiceArray:any = (carta as HTMLElement).dataset.indiceId;
    const indiceImagen: any = (carta.querySelector('img') as HTMLElement).dataset.indiceImagen;
    const indice = parseInt(indiceArray, 10);
    
    if (sePuedeVoltearLaCarta(tablero, indice)) {

      const imagenCarta = carta.querySelector('img');
      const nuevaUrl = cartas[indiceImagen].imagen;
      if (imagenCarta) {
        imagenCarta.src = nuevaUrl;
        setTimeout(() => {
          carta.classList.add('carta-girada');
        }, 100);
        
      } 
      
      voltearCarta(tablero, indice)

      // if (!sonPareja(tablero.indiceCartaVolteadaA!, tablero.indiceCartaVolteadaB!, tablero)) {
        
      //   setTimeout(() => {
      //     carta.classList.add('carta-girada');
      //     carta.classList.add('carta-volver');
      //   }, 500); 
      // }
    }
  });
});



const voltearCarta = (tablero: Tablero, indice: number): void => {
  switch (tablero.estadoPartida) {
    case "PartidaNoIniciada":
    case "CeroCartasLevantadas":
        tablero.estadoPartida = "UnaCartaLevantada";
        tablero.indiceCartaVolteadaA = indice;
    break;

    case "UnaCartaLevantada":
      tablero.estadoPartida = "DosCartasLevantadas";
      tablero.indiceCartaVolteadaB = indice;   

      if (tablero.indiceCartaVolteadaA !== undefined && tablero.indiceCartaVolteadaB !== undefined) {
        if (sonPareja(tablero.indiceCartaVolteadaA!, tablero.indiceCartaVolteadaB!, tablero)) {
            parejaEncontrada(tablero, tablero.indiceCartaVolteadaA, tablero.indiceCartaVolteadaB);
          } else {
            parejaNoEncontrada(tablero, tablero.indiceCartaVolteadaA, tablero.indiceCartaVolteadaB);
            }
          }
    tablero.estadoPartida = "CeroCartasLevantadas";
    tablero.indiceCartaVolteadaA = 0;
    tablero.indiceCartaVolteadaB = 0;
    break;

    case "PartidaCompleta":
       
    break;
        
  }
};
  




