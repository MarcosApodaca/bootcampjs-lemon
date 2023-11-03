import { enumeracion } from "./model";

export const puntos = (document.getElementById("puntos") as HTMLInputElement)
export function muestraPuntuacion():void {
   
    puntos.textContent = `Puntuación: ${enumeracion.puntuacion}`
}

export function dameCarta():void {
     
    let numeroAleatorio:number = Math.floor(Math.random() * 10) +1
    
    if ( numeroAleatorio > 7 ) {
         numeroAleatorio += 2;
    } 
  
   
   mostrarCarta(numeroAleatorio);
   enumeracion.puntuacion += numeroAleatorio;
   muestraPuntuacion()
  
}

 function mostrarCarta (carta: number):void{
    const cartaImg = (document.getElementById("cartaImg") as HTMLImageElement )
    let urlCarta;
  
  switch (carta) {
    case 1:
      urlCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg';
      break;
    case 2:
      urlCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg';
      break;
    case 3:
      urlCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg';  
      break;
    case 4:
       urlCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg';
       break;
    case 5: 
        urlCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg';   
        break;
    case 6:
        urlCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg'
        break;
    case 7:
        urlCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg'
        break;
    case 10:
        urlCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg'
        enumeracion.puntuacion -= 10 
        enumeracion.puntuacion += 0.5
        break;
    case 11:
        urlCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg'
        enumeracion.puntuacion -= 11 
        enumeracion.puntuacion += 0.5
        break;
    case 12:
        urlCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg'
        enumeracion.puntuacion -= 12 
        enumeracion.puntuacion += 0.5
        break;
    default:
      urlCarta = 'https://github.com/Lemoncode/fotos-ejemplos/blob/main/cartas/back.jpg';
  }
  cartaImg.src = urlCarta;


}

