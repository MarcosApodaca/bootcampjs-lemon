import { LineaTicket, ResultadoLineaTicket, TipoIva } from "./model";
import "./style.css";

export const productos: LineaTicket[] = [
    {
      producto: {
        nombre: "Legumbres",
        precio: 2,
        tipoIva: "general",
      },
      cantidad: 2,
    },
    {
      producto: {
        nombre: "Perfume",
        precio: 20,
        tipoIva: "general",
      },
      cantidad: 3,
    },
    {
      producto: {
        nombre: "Leche",
        precio: 1,
        tipoIva: "superreducidoC",
      },
      cantidad: 6,
    },
    {
      producto: {
        nombre: "Lasaña",
        precio: 5,
        tipoIva: "superreducidoA",
      },
      cantidad: 1,
    },
  ]; 


  const tipoDeIva = (tipoIva:TipoIva,precio:number):number => {
      
    let tasaIva: number

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

        }
       
    return precio * tasaIva/100
}

  
export  const calculaTicket = (lineasTicket: LineaTicket[]) => {
    let resultado:ResultadoLineaTicket[] = []

    for (let i = 0; i < lineasTicket.length; i++) {
        let precioConIva = resultado[i].precioConIva
        const tipoIva = lineasTicket[i].producto.tipoIva
        const precio = lineasTicket[i].producto.precio
        
        precioConIva = tipoDeIva(tipoIva , precio)

        return resultado =[
            { 
               nombre: lineasTicket[i].producto.nombre,
               cantidad: lineasTicket[i].cantidad,
               precionSinIva: precio,
               tipoIva: tipoIva,
               precioConIva: precioConIva,
           }
           ]
        
    }
    return resultado
  };


