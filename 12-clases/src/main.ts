import { Reserva } from "./interface";

// const reservas:Reserva = [
//   {
//     tipoHabitacion: "standard",
//     pax: 1,
//     noches: 3,
//   },
//   {
//     tipoHabitacion: "standard",
//     pax: 1,
//     noches: 4,
//   },
//   {
//     tipoHabitacion: "suite",
//     pax: 2,
//     noches: 1,
//   },
// ];

class ReservasHotel {

  tipoHabitacion:string
  pax:number
  noches:number

  constructor(reservas:Reserva){
    this.tipoHabitacion = reservas.tipoHabitacion
    this.pax = reservas.pax;
    this.noches = reservas.noches;
  }

  calcularPrecioBase() {
    const precioBase = this.tipoHabitacion === "standard" ? 100 : 150;
    const cargoExtra = (this.pax - 1) * 40; 
    return (precioBase + cargoExtra) * this.noches;
  }
}

const Caso1:Reserva = { tipoHabitacion: 'standard', pax:2, noches:3};
const hotelReserva = new ReservasHotel(Caso1)

console.log(hotelReserva.calcularPrecioBase());
