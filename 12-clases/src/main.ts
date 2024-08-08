interface Reserva {
    tipoHabitacion: "standard" | "suite";
    pax: number;
    noches: number;
  }
  
  const reservas = [
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


//   interface Reserva {
//     tipoHabitacion: "standard" | "suite";
//     desayuno: boolean;
//     pax: number;
//     noches: number;
//   }
  
//   const reservas = [
//     {
//       tipoHabitacion: "standard",
//       desayuno: false,
//       pax: 1,
//       noches: 3,
//     },
//     {
//       tipoHabitacion: "standard",
//       desayuno: false,
//       pax: 1,
//       noches: 4,
//     },
//     {
//       tipoHabitacion: "suite",
//       desayuno: true,
//       pax: 2,
//       noches: 1,
//     },
//   ];