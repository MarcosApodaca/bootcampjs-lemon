import { dameCarta, enumeracion, getGameOverLabel } from "./motor";

export const suceso = (document.getElementById("suceso") as HTMLButtonElement);

export function plantarse() {
    let mensaje = (document.getElementById("txt") as HTMLInputElement );
    mensaje.innerHTML = getGameOverLabel(enumeracion.puntuacion);
    planto.disabled = true
    btnCarta.disabled = true

    nuevoJuego()
    suceso.style.display = 'block'
}

function  reiniciarPartida(){
    location.reload();
}
 
const newGame = (document.getElementById("newGame") as HTMLButtonElement);
newGame.addEventListener('click', reiniciarPartida);

export function nuevoJuego() {
    
    if (btnCarta.disabled === true ) {
        newGame.style.display = 'block';
        
    }
    
}

export const handleCompruebaClick = () =>{
    dameCarta()
    gameOver()
    planto.disabled = false
}

 const btnCarta = (document.getElementById("btn-carta") as HTMLInputElement)
 const planto = (document.getElementById("planto") as HTMLButtonElement )

 function gameOver(){
  if (enumeracion.puntuacion > 7.5){
      (document.getElementById("txt") as HTMLInputElement ).innerHTML = getGameOverLabel(enumeracion.puntuacion);
      
      
      btnCarta.disabled = true
      planto.disabled = true
  }
  else if ( enumeracion.puntuacion === 7.5){
      (document.getElementById("txt") as HTMLInputElement ).innerHTML = getGameOverLabel(enumeracion.puntuacion);
      planto.disabled = true
  }
  nuevoJuego()
  
}