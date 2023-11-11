import { enumeracion } from "./model";


export function gameOver(){
    if (enumeracion.puntuacion > 7.5){
        return "Game Over"
        
        
    }
    else if ( enumeracion.puntuacion === 7.5){
        return "¡ Lo has clavado! ¡Enhorabuena!"
        
    }
   return ""
    
  }
  