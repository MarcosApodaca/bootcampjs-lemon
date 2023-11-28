import { Enumeracion } from "./model";

export const enumeracion: Enumeracion = {
  puntuacion:0,
}

export const getPuntuacionLabel = (puntuacion: number): string => {
  return `Puntuación: ${puntuacion}`
}

export function muestraPuntuacion():void { 
  const puntos = (document.getElementById("puntos") as HTMLInputElement);
  puntos.textContent = getPuntuacionLabel(enumeracion.puntuacion);
}

export const addTwoIfRandomBiggerThanSeven = (randomNumber: number): number => {
  return randomNumber > 7 ? randomNumber + 2 : randomNumber;
}

export function dameCarta(): void {
     
  let numeroAleatorio:number = Math.floor(Math.random() * 10) +1
  
  numeroAleatorio = addTwoIfRandomBiggerThanSeven(numeroAleatorio);

  const cartaImg = (document.getElementById("cartaImg") as HTMLImageElement);
  cartaImg.src = getCartaUrl(numeroAleatorio);
  enumeracion.puntuacion += numeroAleatorio;
  muestraPuntuacion()
  
}
  
function getCartaUrl (carta: number): string {
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

  return urlCarta;
}

export const getGameOverLabel = (puntuacion: number): string => {
  if ( puntuacion < 4)
    return "Has sido muy conservador";
  else if (puntuacion >= 4 && puntuacion < 6) {
    return "Te ha entrado el canguelo eh?";
  }
  else if (puntuacion >= 6 && puntuacion < 7.5){
    return "Casi casi...";
  }
  else if(puntuacion ===  7.5) {
    return  "¡ Lo has clavado! ¡Enhorabuena!";
  } else {
    return "Game Over";
  }
}