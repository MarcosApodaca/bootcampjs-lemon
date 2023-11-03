import { enumeracion } from "./model";
import { dameCarta } from "./motor";


export const planto = (document.getElementById("planto") as HTMLButtonElement )

planto.disabled = true

export const btnCarta = (document.getElementById("btn-carta") as HTMLInputElement)
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

 



export function gameOver(){
    if (enumeracion.puntuacion > 7.5){
        (document.getElementById("txt") as HTMLInputElement ).innerHTML = "Game Over"
        
        
        btnCarta.disabled = true
        planto.disabled = true
    }
    else if ( enumeracion.puntuacion === 7.5){
        (document.getElementById("txt") as HTMLInputElement ).innerHTML = "¡ Lo has clavado! ¡Enhorabuena!"
        planto.disabled = true
    }
    nuevoJuego()
    
}

function  reiniciarPartida(){
    location.reload()
}
 
const newGame = (document.getElementById("newGame") as HTMLButtonElement)
newGame.addEventListener('click', reiniciarPartida)
function nuevoJuego() {
    
    if (btnCarta.disabled === true ) {
        newGame.style.display = 'block'
        
    }
    
}

export const handleCompruebaClick = () =>{
    
    dameCarta()
    gameOver()
    planto.disabled = false
}