import { Tablero, cartas, tablero } from "./model"
import { barajarCartas, esPartidaCompleta, iniciaPartida, parejaEncontrada, parejaNoEncontrada, sePuedeVoltearLaCarta, sonPareja, } from "./motor"
import JSConfetti from 'js-confetti'

let partidaIniciada = false;



export const comenzar = document.getElementById("iniciaPartida") as HTMLButtonElement

 comenzar.addEventListener('click', function() {
  const comenzar = () => {
    partidaIniciada = true;
    iniciaPartida
    tablero;
    barajarCartas(cartas);
  };
  comenzar()
} )


const divCarta = document.querySelectorAll('.contenido');  


export const seleccionaCarta = () => {
divCarta.forEach(carta => {
  carta.addEventListener('click', () => {
    
    if (!partidaIniciada) {
      alert("Debes de iniciar la partida, antes de poder seleccionar");
      return;
    }
    
    const indiceArray:any = (carta as HTMLElement).dataset.indiceId;
    const indiceImagen: any = (carta.querySelector('img') as HTMLElement).dataset.indiceImagen;
    const indice = parseInt(indiceArray, 10);
    if(tablero.cartas[indice].estaVuelta === true) {
      alert("Selecciona otra carta");
      
    }

    if (sePuedeVoltearLaCarta(tablero, indice)) {
      
      const imagenCarta = carta.querySelector('img');
      const nuevaUrl = cartas[indiceImagen].imagen;
      if (imagenCarta) {
        imagenCarta.src = nuevaUrl;
        setTimeout(() => {
          carta.classList.remove('carta-volver');
          carta.classList.add('carta-girada');
        }, 200);
        
      } 
      voltearCarta(tablero, indice);

    }
  });
});
}

const girarCarta = () => {
  divCarta.forEach(carta => {
    const indiceArray:any = (carta as HTMLElement).dataset.indiceId;
    const indice = parseInt(indiceArray, 10);
    if (tablero.cartas[indice].estaVuelta === false) {
        
      setTimeout(() => {
        carta.classList.remove('carta-girada');
        carta.classList.add('carta-volver');
      }, 1000); 
    }
  })
}

let intentos = 0;

const incrementarContador = () => {
  intentos++;
  actualizarContadorEnPantalla();
};

const actualizarContadorEnPantalla = () => {
  const elementoContador = document.getElementById("contador");
  if (elementoContador) {
    elementoContador.innerHTML = `${intentos}`;
  }
};

export const reiniciar = document.getElementById('reiniciar')
reiniciar?.addEventListener('click', function(){
  location.reload();
})

const contenedor = () => {
  const contenedor = document.getElementById('contenedor');
  contenedor?.classList.add('contenedor-h1');
  comenzar.classList.add('reset');
  reiniciar?.classList.add('btn');
  reiniciar?.classList.remove('reset');
}


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
            incrementarContador();
          } else {
            parejaNoEncontrada(tablero, tablero.indiceCartaVolteadaA, tablero.indiceCartaVolteadaB);
            incrementarContador();
            girarCarta();
           
            }
          }
      tablero.estadoPartida = "CeroCartasLevantadas";
      tablero.indiceCartaVolteadaA = 0;
      tablero.indiceCartaVolteadaB = 0;

      if (esPartidaCompleta(tablero)){
      tablero.estadoPartida = "PartidaCompleta";
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
      contenedor()
      }
    break;
        
  }
};
  




