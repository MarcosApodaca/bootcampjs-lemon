
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
 
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter((pacientes) => pacientes.especialidad === "Pediatra");
};


console.log("Lista de pacientes assignado a Pediatria", obtenPacientesAsignadosAPediatria(pacientes));



//PACIENTES ASIGNADOS A PEDIATRIA, MENOR DE 10 AÑOs

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {

  return pacientes.filter((pacientes) => pacientes.especialidad === "Pediatra" && pacientes.edad< 10);
};

console.log("Lista de pacientes assignado a pediatria, menos de 10 años",obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));



// APARTADO 2
// PROTOCOLO DE URGENCIA

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {

  let activarProctolo = pacientes.some((pacientes) => {
    pacientes.frecuenciaCardiaca > 100 || pacientes.temperatura > 39
    return true;
  }
  )
  return activarProctolo;
};

console.log("Protocolo de urgencia activado",activarProtocoloUrgencia(pacientes));



// APARTADO 3
// REASIGNAR LOS PACIENTES ASIGNADOS A LA ESPECIALIDAD DE PEDIATRIA A LA DE MEDICO DE FAMILIA

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {

  return pacientes.map((pacientes) => {
    if (pacientes.especialidad === "Pediatra") {
      return {
        ...pacientes,
        especialidad: "Medico de familia"
      };
    } else {
        return pacientes;
      }
  })

};
console.log("Pacientes de Pediatra, reasignado a Medico de familia",reasignaPacientesAMedicoFamilia(pacientes));


// APARTADO 4
// COMPROBAR LISTA DE PACIENTES ASIGNADO A PEDIATRIA

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.some((pacientes) => { pacientes.especialidad === "Pediatra"});
};

  
console.log("El Pediatra tiene pacientes asignados",HayPacientesDePediatria(pacientes));


// APARTADO OPCIONALES
// APARTADO 5

interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
  }

let numeroPacientesPorEspecialidad: NumeroPacientesPorEspecialidad = 
    {
        medicoDeFamilia: 0,
        pediatria: 0,
        cardiologia: 0,
    }

    
const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {

    pacientes.forEach((pacientes) => {
      switch (pacientes.especialidad) {
        case "Medico de familia":
          numeroPacientesPorEspecialidad.medicoDeFamilia++;
          break;
        case "Pediatra":
          numeroPacientesPorEspecialidad.pediatria++;
          break;
        case "Cardiólogo":
          numeroPacientesPorEspecialidad.cardiologia++;
          break;
        default:
          break;
      }
    })
    return numeroPacientesPorEspecialidad;
};



  console.log(`Numero total de pacientes que están asignados`, cuentaPacientesPorEspecialidad(pacientes) );
  