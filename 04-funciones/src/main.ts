import "./style.css";


let numeroTurno:number = 0
const turno = document.getElementById("turno") as HTMLInputElement
const anterioTurno = document.getElementById("anterioTurno")as HTMLButtonElement
const siguenteTurno = document.getElementById("siguenteTurno")as HTMLButtonElement
const reset = document.getElementById("reset")as HTMLButtonElement


function actualizarTurno():void {
    
    turno.textContent = numeroTurno.toString().padStart(2, '0');
}


function siguente() {
    numeroTurno++
    actualizarTurno()
}

function anterior() {
    
    if (numeroTurno > 0) 
    numeroTurno--
    actualizarTurno()
}

function reiniciar(){
    numeroTurno = 0
    actualizarTurno()
}


actualizarTurno()

siguenteTurno.addEventListener("click", siguente)
anterioTurno.addEventListener("click", anterior)
reset.addEventListener("click", reiniciar)


