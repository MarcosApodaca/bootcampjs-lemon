let numeroTurno = 0
const turno = document.getElementById("turno")
const anterioTurno = document.getElementById("anterioTurno");
const siguenteTurno = document.getElementById("siguenteTurno")
const reset = document.getElementById("reset")


function actualizarTurno() {
    
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

