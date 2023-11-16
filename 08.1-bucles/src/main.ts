import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// APARTADO 1
// PACIENTES ASSIGNADO A LA ESPECIALIDAD DE PEDIATRIA
 

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]):Pacientes[] => {
    let listaPediatria:Pacientes[] = []
    for (let i = 0; i < pacientes.length; i++) {
        
       if (pacientes[i].especialidad === "Pediatra") {
            listaPediatria.push(pacientes[i])
       }
        
    }
    return listaPediatria

};

const pacientesPediatra = obtenPacientesAsignadosAPediatria(pacientes);
console.log("Lista de pacientes assignado a Pediatria", pacientesPediatra);


//PACIENTES ASIGNADOS A PEDIATRIA, MENOR DE 10 AÑOs


const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
    let pacientesMenores: Pacientes[] = []
    for (let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10 )
            pacientesMenores.push(pacientes[i])

    }
    return pacientesMenores
};


console.log("Lista de pacientes assignado a pediatria, menos de 10 años",obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes))



// APARTADO 2
// PROTOCOLO DE URGENCIA

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProctolo:boolean = false;
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].frecuenciaCardiaca > 100 || pacientes[i].temperatura > 39){
            activarProctolo = true
        }
        
    }
  
    return activarProctolo;
};

console.log("Protocolo de urgencia activado",activarProtocoloUrgencia(pacientes))



// APARTADO 3
// REASIGNAR LOS PACIENTES ASIGNADOS A LA ESPECIALIDAD DE PEDIATRIA A LA DE MEDICO DE FAMILIA


const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
    let i = 0
    let reasignarPaicentes: Pacientes[] = []
    while (i < pacientes.length) {
        if (pacientes[i].especialidad === "Pediatra") {
            pacientes[i].especialidad = "Medico de familia"
            reasignarPaicentes.push(pacientes[i])
       }
       i++
    }
     return reasignarPaicentes
};

console.log("Pacientes de Pediatra, reasignado a Medico de familia",reasignaPacientesAMedicoFamilia(pacientes));


// APARTADO 4
// COMPROBAR LISTA DE PACIENTES ASIGNADO A PEDIATRIA

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    let i = 0
    let pacientesAsignado:boolean = false;
    while(i < pacientes.length){
        if(pacientes[i].especialidad === "Pediatra" && pacientes[i].nombre && pacientes[i].apellidos){
            pacientesAsignado = true;
        }
        i++
    }
    return pacientesAsignado
  };
  
console.log("El Pediatra tiene pacientes asignados",HayPacientesDePediatria(pacientes));


// APARTADO OPCIONALES
// APARTADO 5

interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
  }

let numeroPacientesPorEspecialidad: NumeroPacientesPorEspecialidad[] = [
    {
        medicoDeFamilia: 0,
        pediatria: 0,
        cardiologia: 0,
    }
]


const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad[] => {
      
    for (let i = 0; i < pacientes.length; i++) {
       
        if(pacientes[i].especialidad === "Medico de familia") {
            numeroPacientesPorEspecialidad[0].medicoDeFamilia += 1
        }
        else if (pacientes[i].especialidad === "Cardiólogo"){
            numeroPacientesPorEspecialidad[0].cardiologia += 1
        }
        else if(pacientes[i].especialidad === "Pediatra"){
            numeroPacientesPorEspecialidad[0].pediatria += 1
        }
    }
  
    return numeroPacientesPorEspecialidad 
  };

  console.log("Numero total de pacientes que están asignados a",cuentaPacientesPorEspecialidad(pacientes));
  