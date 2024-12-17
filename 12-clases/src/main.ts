import { Reserva } from "./interface";

// ----- CASO 1 -----

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

class GestorReservas {
  reservas: ReservasHotel[]

  constructor(listaReservas: Reserva[]){
    this.reservas = listaReservas.map(reservas => new ReservasHotel(reservas));
  }

  calcularSubtotal():number{
    return this.reservas
      .map(reservas => reservas.calcularPrecioBase())
      .reduce((acc, precio) => acc + precio, 0)
  }

  calcularPrecioIva() {
    const subtotal = this.calcularSubtotal();
    const iva = 0.21;
    const total = subtotal * (1 + iva);
    return Math.round(total)
  }
}

const reservas:Reserva[] =  [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1,
  },
];
 
const gestor = new GestorReservas(reservas)
const subtotal = gestor.calcularSubtotal();
const subtotalIva = gestor.calcularPrecioIva();

console.log(`Precio sin Iva: ${subtotal}€
Precio con Iva: ${subtotalIva}€`);





// ----- CASO 2 -----

class GestorReservasTourOperador extends GestorReservas {
  constructor(listaReservas: Reserva[]) {
    super(listaReservas); 
  }
  calcularSubtotal(): number {
    return this.reservas
      .map(reserva => (100 + (reserva.pax - 1) * 40) * reserva.noches) 
      .reduce((acc, precio) => acc + precio, 0); 
  }

  calcularTotalConIVA(): number {
    const subtotal = this.calcularSubtotal();
    const descuento = subtotal * 0.15; 
    const subtotalConDescuento = subtotal - descuento;

    const IVA = 0.21; 
    const total = subtotalConDescuento * (1 + IVA);

    return Math.round(total) 
  }
}

const reservasTourOperador:Reserva[] =  [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1,
  },
  {
    tipoHabitacion: "standard",
    pax: 2,
    noches: 5,
  },
  {
    tipoHabitacion: "suite",
    pax: 4,
    noches: 2,
  },
];

const tourOperador = new GestorReservasTourOperador(reservasTourOperador)
const subtotalTouOperador = tourOperador.calcularSubtotal();
const subtotalIvaTourOperador = tourOperador.calcularTotalConIVA()

console.log(`Precio total sin IVA Tour Operador: ${subtotalTouOperador}€
Precio con IVA: ${subtotalIvaTourOperador}€`);
