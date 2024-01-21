import { LineaTicket, ResultadoLineaTicket, ResultadoTotalTicket, TipoIva, TotalPorTipoIva } from "./model";
import "./style.css";


  const tipoDeIva = (tipoIva:TipoIva,precio:number):number => {
      
    let tasaIva: number;

    switch (tipoIva) {
        case "general":
            tasaIva = 21
            break;
        case "reducido":
            tasaIva = 10
            break;
        case "superreducidoA":
            tasaIva = 5
            break;
        case "superreducidoB":
            tasaIva = 4
            break;
        case "superreducidoC":
            tasaIva = 0
            break;
        case "sinIva":
            tasaIva = 0
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
        let precioConIva = precioIva + precio
       

        return resultado =[
            { 
               nombre: lineasTicket[i].producto.nombre,
               cantidad: lineasTicket[i].cantidad,
               precionSinIva: precio,
               tipoIva: tipoIva,
               precioConIva: precioConIva,
           }
           ];
        
    };
    return resultado;
  };


export const totalTicket = (ResultadoLineaTicket:ResultadoLineaTicket[]):ResultadoTotalTicket[] => {
  let total:ResultadoTotalTicket[] = [];
  let totalConIva = 0;
  let totalSinIva = 0;
  let totalIva = 0 ;
  
  for (let i = 0; i < ResultadoLineaTicket.length; i++) {
       
      totalSinIva += ResultadoLineaTicket[i].precionSinIva;
      totalConIva += ResultadoLineaTicket[i].precioConIva;
      const ivaParaEstaLinea = tipoDeIva(ResultadoLineaTicket[i].tipoIva, totalSinIva);
      totalIva += ivaParaEstaLinea;
  };

  return total = [
    {
      totalSinIva: totalSinIva,
      totalConIva: totalConIva,
      totalIva: totalIva,
    }
  ];

}

export const totalPorTipoIva = (lineaTicket:ResultadoLineaTicket[]):TotalPorTipoIva[] => {
  let totalPorIva:TotalPorTipoIva[]  = []
  let ultimoIva = ""
  for (let i = 0; i < lineaTicket.length; i++) {
    let tipoIva = lineaTicket[i].tipoIva
      if(tipoIva === ultimoIva){

      }
      ultimoIva
  }
  return totalPorIva = [
    {
      tipoIva: tipoIva,
      cuantia : cuantia,
    }
  ]

}