import { cartas, infoCartas, tablero } from "./model"
import { barajarCartas, sePuedeVoltearLaCarta, voltearLaCarta } from "./motor"

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
   

    const indiceArray = (carta as HTMLElement).dataset.indiceArray || '0';
    const indiceImagen:number = parseInt((carta as HTMLElement).dataset.indiceImagen || '0');


      const indice = parseInt(indiceArray, 10);
        // Tu lógica aquí
        if (sePuedeVoltearLaCarta(tablero, indice)) {
           
            voltearLaCarta(tablero, indice);
        }
  
        const nuevaUrl = infoCartas[indiceImagen].imagen;
          const imagenCarta = carta.querySelector('img');
  
          if (imagenCarta) {
              imagenCarta.src = nuevaUrl;
          } else {
              console.error('No se encontró la etiqueta img dentro del elemento de carta.');
          }
      

    });

  });



//   const cambiarCarta = (indice: number) => {
      
//       let urlCarta = "";
//     function girarCarta(carta:number, imagen: HTMLImageElement):void {
       
//       switch(carta){
//         case 1:
//           urlCarta = "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/1.png?raw=true";
//           break;
//         case 2:
//           urlCarta = "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/2.png?raw=true";
//           break;
//         }
        
//         imagen.src = urlCarta;
      
//       }

//   };

