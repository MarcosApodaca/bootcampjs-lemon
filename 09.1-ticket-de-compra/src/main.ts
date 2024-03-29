
import { LineaTicket, ResultadoLineaTicket, ResultadoTotalTicket, TipoIva, TotalPorTipoIva, productos } from "./model";
import "./style.css";

//I calculate the VAT by the type

const tipoDeIva = (tipoIva:TipoIva,precio:number):number => {
      
  let tasaIva: number;

  switch (tipoIva) {
    case "general":
      tasaIva = 21;
      break;
    case "reducido":
      tasaIva = 10;
      break;
    case "superreducidoA":
      tasaIva = 5;
      break;
    case "superreducidoB":
      tasaIva = 4;
      break;
    default:
      tasaIva = 0;
      break;
  };
       
  return precio * tasaIva/100;
}

  
export  const calculaTicket = (lineasTicket: LineaTicket[]) => {
  let resultado:ResultadoLineaTicket[] = [];

    for (let i = 0; i < lineasTicket.length; i++) {
        
      const tipoIva = lineasTicket[i].producto.tipoIva;
      const precionSinIva = lineasTicket[i].producto.precio;
      const precioIva = tipoDeIva(tipoIva,precionSinIva);
      const precioConIva = precioIva + precionSinIva;
       
      resultado.push(
        { 
          nombre: lineasTicket[i].producto.nombre,
          cantidad: lineasTicket[i].cantidad,
          precionSinIva,
          tipoIva,
          precioConIva,
        }
      )
        
    };

  return resultado;
};

// I pass as a parameter the product list, that is in /model.ts
const resultadoProducto = calculaTicket(productos)
console.log(resultadoProducto);



export const totalTicket = (resultadoLineaTicket: ResultadoLineaTicket[]):ResultadoTotalTicket => {
  let totalSinIva = 0;
  let totalConIva = 0;
  let totalIva = 0;
  
  for (let i = 0; i < resultadoLineaTicket.length; i++) {
    const totalSinIvaProd = resultadoLineaTicket[i].precionSinIva * resultadoLineaTicket[i].cantidad;
    totalSinIva += totalSinIvaProd;
    const totalConIvaProd = resultadoLineaTicket[i].precioConIva * resultadoLineaTicket[i].cantidad;
    totalConIva += totalConIvaProd;
    totalIva += totalConIvaProd - totalSinIvaProd;
  };

  return {
    totalSinIva,
    totalConIva,
    totalIva: Number(totalIva.toFixed(2)),
  };
};

console.log(totalTicket(resultadoProducto));




export const desgloseIva = (resultadoLineaTicket: ResultadoLineaTicket[]): TotalPorTipoIva[] => {
  let desglose: TotalPorTipoIva[] = [];

  for (let i = 0; i < resultadoLineaTicket.length; i++) {
      let tipoIva = resultadoLineaTicket[i].tipoIva;
      let cuantia = (resultadoLineaTicket[i].precioConIva - resultadoLineaTicket[i].precionSinIva) * resultadoLineaTicket[i].cantidad
      cuantia = Number(cuantia.toFixed(2));

      const indiceExistente = desglose.findIndex((item) => item.tipoIva === tipoIva);

      if (indiceExistente !== -1) {
        desglose[indiceExistente].cuantia += cuantia;
      } else {
        desglose.push({
          tipoIva,
          cuantia,
        });
      }
  }
  return desglose;
};

console.log(desgloseIva(resultadoProducto));



export const generarTicketFinal = (lineasTicket:LineaTicket[])=> {

  const lineas = calculaTicket(lineasTicket);
  const total = totalTicket(lineas);
  const desgloseIvaResult = desgloseIva(lineas);
  
  return {
    lineas,
    total,
    desgloseIva: desgloseIvaResult,
  };
}


console.log(generarTicketFinal(productos));

