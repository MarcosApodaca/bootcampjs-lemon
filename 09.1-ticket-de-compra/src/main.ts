
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
    case "superreducidoC":
      tasaIva = 0;
      break;
    case "sinIva":
      tasaIva = 0;
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
      const precio = lineasTicket[i].producto.precio;
      const precioIva = tipoDeIva(tipoIva,precio);
      let precioConIva = precioIva + precio;
       
      resultado.push(
        { 
          nombre: lineasTicket[i].producto.nombre,
          cantidad: lineasTicket[i].cantidad,
          precionSinIva: precio,
          tipoIva: tipoIva,
          precioConIva: precioConIva,
        }
      )
        
    };

  return resultado;
};

// I pass as a parameter the product list, that is in /model.ts
const resultadoProducto = calculaTicket(productos)
console.log(resultadoProducto);



export const totalTicket = (ResultadoLineaTicket:ResultadoLineaTicket[]):ResultadoTotalTicket[] => {
  let total:ResultadoTotalTicket[] = [];
  let totalConIva = 0;
  let totalSinIva = 0;
  let totalIva = 0;
  
  for (let i = 0; i < ResultadoLineaTicket.length; i++) {

    totalSinIva = ResultadoLineaTicket[i].precionSinIva;
    totalConIva = ResultadoLineaTicket[i].precioConIva;
    const ivaParaEstaLinea = tipoDeIva(ResultadoLineaTicket[i].tipoIva, totalSinIva);
    totalIva = ivaParaEstaLinea;
    
    total.push(  
      {
        totalSinIva: totalSinIva,
        totalConIva: totalConIva,
        totalIva: totalIva,
      }
      )
  };

  return total
};

console.log(totalTicket(resultadoProducto));




export const desgloseIva = (resultadoLineaTicket: ResultadoLineaTicket[]): TotalPorTipoIva[] => {
  let desglose: TotalPorTipoIva[] = [];

  for (let i = 0; i < resultadoLineaTicket.length; i++) {
      let tipoIva = resultadoLineaTicket[i].tipoIva;
      let cuantia = resultadoLineaTicket[i].cantidad

      const indiceExistente = desglose.findIndex((item) => item.tipoIva === tipoIva);

      if (indiceExistente !== -1) {
        desglose[indiceExistente].cuantia += cuantia;
      } else {
        desglose.push({
          tipoIva: tipoIva,
          cuantia: cuantia,
        });
      }
  }
  return desglose;
};

console.log(desgloseIva(resultadoProducto));



export const generarTicketFinal = (lineasTicket:LineaTicket[])=> {

  const resultadoLineaTicket = calculaTicket(lineasTicket);
  const total = totalTicket(resultadoLineaTicket);
  const desgloseIvaResult = desgloseIva(resultadoLineaTicket);
  
  return {
    lineas: resultadoLineaTicket,
    total: total,
    desgloseIva: desgloseIvaResult,
  };
}


console.log(generarTicketFinal(productos));

