import "./style.css";

const puntos = (document.getElementById("puntos") as HTMLInputElement)

 let puntuacion:number = 0;

function muestraPuntuacion():void {
   
    puntos.textContent = `Puntuación: ${puntuacion}`
}

document.addEventListener('DOMContentLoaded', function() {
    muestraPuntuacion();
  });

function dameCarta():void {
    let numeroAleatorio:number = Math.floor(Math.random() * 10) +1
    if ( numeroAleatorio > 7 ) {
         numeroAleatorio += 2;
    } 
  
   
   mostrarCarta(numeroAleatorio);
   puntuacion += numeroAleatorio;
   muestraPuntuacion()
   gameOver()
   planto.disabled = false
}



const btnCarta = (document.getElementById("btn-carta") as HTMLInputElement)
btnCarta.addEventListener('click', dameCarta)


const cartaImg = (document.getElementById("cartaImg") as HTMLImageElement )

function mostrarCarta (carta: number):void{
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
        puntuacion -= 10 
        puntuacion += 0.5
        break;
    case 11:
        urlCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg'
        puntuacion -= 11 
        puntuacion += 0.5
        break;
    case 12:
        urlCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg'
        puntuacion -= 12 
        puntuacion += 0.5
        break;
    default:
      urlCarta = 'https://github.com/Lemoncode/fotos-ejemplos/blob/main/cartas/back.jpg';
  }
  cartaImg.src = urlCarta;


}


function gameOver(){
    if (puntuacion > 7.5){
        (document.getElementById("txt") as HTMLInputElement ).innerHTML = "Game Over"

       
    btnCarta.disabled = true
    planto.disabled = true
    }
    else if ( puntuacion === 7.5){
        (document.getElementById("txt") as HTMLInputElement ).innerHTML = "¡ Lo has clavado! ¡Enhorabuena!"
        planto.disabled = true
    }
    nuevoJuego()

}

function plantarse() {
   let mensaje = (document.getElementById("txt") as HTMLInputElement )
    if ( puntuacion < 4)
        mensaje.innerHTML = "Has sido muy conservador";
    else if (puntuacion ===  5) {
        mensaje.innerHTML = "Te ha entrado el canguelo eh?"
    }
    else if (puntuacion ===  6 || 7){
        mensaje.innerHTML = "Casi casi..."
    }
    else if( puntuacion ===  7.5) {
        mensaje.innerHTML =  "¡ Lo has clavado! ¡Enhorabuena!"
    }
    planto.disabled = true
    btnCarta.disabled = true
    suceso.style.display = 'block'
    nuevoJuego()
}

const planto = (document.getElementById("planto") as HTMLButtonElement )
planto.addEventListener("click", plantarse)


const newGame = (document.getElementById("newGame") as HTMLButtonElement)
newGame.addEventListener('click', reiniciarPartida)
function nuevoJuego() {
    
    if (btnCarta.disabled === true ) {
        newGame.style.display = 'block'
        
    }
    
}

function  reiniciarPartida(){
    location.reload()
}
planto.disabled = true
const suceso = (document.getElementById("suceso") as HTMLButtonElement)
suceso.addEventListener("click", dameCarta)