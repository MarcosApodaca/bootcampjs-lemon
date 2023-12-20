import { Tablero, cartas, tablero } from "./model"
import { barajarCartas, parejaEncontrada, parejaNoEncontrada, sePuedeVoltearLaCarta, sonPareja, } from "./motor"

const iniciaPartida = document.getElementById("iniciaPartida") as HTMLButtonElement

iniciaPartida.addEventListener('click', function() {
    iniciarPartida()
} )

const iniciarPartida = () => {

    tablero;
    barajarCartas(cartas);

  };

  

const divCarta = document.querySelectorAll('.contenido');  


divCarta.forEach(carta => {
  carta.addEventListener('click', () => {
    const indiceArray = (carta as HTMLElement).dataset.indiceId || '0';
    const indiceImagen: any = (carta.querySelector('img') as HTMLElement).dataset.indiceImagen;
    const indice = parseInt(indiceArray, 10);
    
    if (sePuedeVoltearLaCarta(tablero, indice)) {

      voltearCarta(tablero,indice)

      const imagenCarta = carta.querySelector('img');
      const nuevaUrl = cartas[indiceImagen].imagen;

      if (imagenCarta) {
        imagenCarta.src = nuevaUrl;
      }   
           
      
    }
     console.log(sePuedeVoltearLaCarta(tablero, indice));
      
  });

 });


 const voltearCarta = (tablero:Tablero, indice: number): void => {
 switch (tablero.estadoPartida) {

   case "PartidaNoIniciada":
   case "CeroCartasLevantadas":
    
     tablero.estadoPartida = "UnaCartaLevantada";
     tablero.indiceCartaVolteadaA = indice;
     break;

   case "UnaCartaLevantada":
     // Voltear la segunda carta
     tablero.estadoPartida = "DosCartasLevantadas";
     tablero.indiceCartaVolteadaB = indice;
     break;

   case "DosCartasLevantadas":

     if (sonPareja(tablero.indiceCartaVolteadaA!, tablero.indiceCartaVolteadaB!, tablero)) {
       // Son pareja, marcarlas como encontradas
       parejaEncontrada(tablero, tablero.indiceCartaVolteadaA!, tablero.indiceCartaVolteadaB!);
     } else {
       // No son pareja, volver a voltearlas después de un tiempo
       setTimeout(() => {
         parejaNoEncontrada(tablero, tablero.indiceCartaVolteadaA!, tablero.indiceCartaVolteadaB!);
       }, 1000);
     }

     // Reiniciar el estado
     tablero.estadoPartida = "CeroCartasLevantadas";
     tablero.indiceCartaVolteadaA = undefined;
     tablero.indiceCartaVolteadaB = undefined;
     break;

   case "PartidaCompleta":
     break;
  }
}  

