// interface Reserva {
//     tipoHabitacion: "standard" | "suite";
//     pax: number;
//     noches: number;
//   }
  
//   const reservas = [
//     {
//       tipoHabitacion: "standard",
//       pax: 1,
//       noches: 3,
//     },
//     {
//       tipoHabitacion: "standard",
//       pax: 1,
//       noches: 4,
//     },
//     {
//       tipoHabitacion: "suite",
//       pax: 2,
//       noches: 1,
//     },
//   ];


class Animal {
  nombre: string;
  edad: number;
  constructor(nombre: string, edad: number) {
  this.nombre = nombre;
  this.edad = edad;
  }
  haceRuido() {
  return "Algún sonido genérico";
  }
  duerme() {
  return "Zzzzz";
  }
 }

class Gato extends Animal {
  raza: string;
  constructor (nombre: string, edad: number, raza:string) {
    super(nombre,edad)
    this.raza = raza;
  }
  haceRuido(): string {
    return 'Miauuu'
  }

}

const gato = new Gato('michi', 5,'Siames' )

console.log(gato);


