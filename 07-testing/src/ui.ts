import { enumeracion } from "./model";
import { dameCarta, gameOver } from "./motor";
import { btnCarta, planto } from "./motor";



planto.disabled = true


export const suceso = (document.getElementById("suceso") as HTMLButtonElement)

export function plantarse() {
    let mensaje = (document.getElementById("txt") as HTMLInputElement )
     if ( enumeracion.puntuacion < 4)
         mensaje.innerHTML = "Has sido muy conservador";
     else if (enumeracion.puntuacion ===  5) {
         mensaje.innerHTML = "Te ha entrado el canguelo eh?"
     }
     else if (enumeracion.puntuacion ===  6 || 7){
         mensaje.innerHTML = "Casi casi..."
     }
     else if( enumeracion.puntuacion ===  7.5) {
         mensaje.innerHTML =  "¡ Lo has clavado! ¡Enhorabuena!"
     }
     planto.disabled = true
     btnCarta.disabled = true
    
     nuevoJuego()
     suceso.style.display = 'block'
 }

 





function  reiniciarPartida(){
    location.reload()
}
 
const newGame = (document.getElementById("newGame") as HTMLButtonElement)
newGame.addEventListener('click', reiniciarPartida)
export function nuevoJuego() {
    
    if (btnCarta.disabled === true ) {
        newGame.style.display = 'block'
        
    }
    
}

export const handleCompruebaClick = () =>{
    
    dameCarta()
    gameOver()
    planto.disabled = false
}