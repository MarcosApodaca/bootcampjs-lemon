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


class TotalDepartamento {

    descuento: number; // Porcentaje de descuento
    total: number; // Total final calculado
    subtotal: number; // Subtotal sin aplicar descuento

    constructor(decuento:number) {
        this.descuento = decuento;
        this.total = 0;
        this.subtotal = 0;
    }
    calculatotal() {
      this.total =  this.subtotal - (this.descuento * this.subtotal) / 100
    }
}

const totalesSupermercado = new TotalDepartamento(10)
totalesSupermercado.subtotal = 50;
totalesSupermercado.calculatotal()

console.log(totalesSupermercado.total);


