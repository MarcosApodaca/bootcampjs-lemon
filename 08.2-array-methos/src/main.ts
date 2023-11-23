
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
 

const obtenPacientesAsignadosAPediatria: Pacientes[] = pacientes.filter((pacientes) => 
  pacientes.especialidad === "Pediatra"
);

console.log("Lista de pacientes assignado a Pediatria", obtenPacientesAsignadosAPediatria);



//PACIENTES ASIGNADOS A PEDIATRIA, MENOR DE 10 AÑOs


const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios:Pacientes[] = pacientes.filter((pacientes) => 
  pacientes.especialidad === "Pediatra" && pacientes.edad< 10
);

console.log("Lista de pacientes assignado a pediatria, menos de 10 años",obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios)



// APARTADO 2
// PROTOCOLO DE URGENCIA

const activarProtocoloUrgencia = pacientes.some((pacientes) => 
  pacientes.frecuenciaCardiaca > 100 || pacientes.temperatura > 39 
)
console.log("Protocolo de urgencia activado",activarProtocoloUrgencia)



// APARTADO 3
// REASIGNAR LOS PACIENTES ASIGNADOS A LA ESPECIALIDAD DE PEDIATRIA A LA DE MEDICO DE FAMILIA


const reasignaPacientesAMedicoFamilia = pacientes.map(pacientes => {
  if (pacientes.especialidad === "Pediatra") {
    return {
      ...pacientes,
      especialidad: "Medico de familia"
    };
  } else {
      return pacientes
    }
});

console.log("Pacientes de Pediatra, reasignado a Medico de familia",reasignaPacientesAMedicoFamilia);


// APARTADO 4
// COMPROBAR LISTA DE PACIENTES ASIGNADO A PEDIATRIA

const HayPacientesDePediatria = pacientes.some((pacientes) => 
    pacientes.especialidad === "Pediatra"
  );
  
console.log("El Pediatra tiene pacientes asignados",HayPacientesDePediatria);


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


pacientes.forEach((paciente) => {
  switch (paciente.especialidad) {
    case "Medico de familia":
      numeroPacientesPorEspecialidad[0].medicoDeFamilia++;
      break;
    case "Pediatra":
      numeroPacientesPorEspecialidad[0].pediatria++;
      break;
    case "Cardiólogo":
      numeroPacientesPorEspecialidad[0].cardiologia++;
      break;
    default:
      break;
  }
  return numeroPacientesPorEspecialidad;
});


  console.log(`Numero total de pacientes que están asignados a, Medico De Familia ${numeroPacientesPorEspecialidad[0].medicoDeFamilia}, Pediatria ${numeroPacientesPorEspecialidad[0].pediatria}, Cardiologia ${numeroPacientesPorEspecialidad[0].cardiologia}`);
  