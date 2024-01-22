import { calculaTicket, totalTicket, desgloseIva, generarTicketFinal} from "./main"
import { LineaTicket, ResultadoLineaTicket } from "./model"

describe('calculaTicket', () => { 
    it("Debe de devolver el pricio con el iva reduciso", () => {
        //Arrange

        const producto:LineaTicket[] =  [
            {
              producto: {
                nombre: "Legumbres",
                precio: 2,
                tipoIva: "general",
              },
              cantidad: 2,
            },
        ];
        //Act
        const result = calculaTicket(producto)
        //Assert
        const resultadoLineaTicket = [
          {
            cantidad: 2,
            nombre: "Legumbres",
            precioConIva: 2.42,
            precionSinIva: 2,
            tipoIva: "general",
          },
        ];

        expect(result).toEqual(resultadoLineaTicket);

    });

});
 
describe('ResultadoTotalTicket', () => {
  it("Deberia devolver el objeto", () =>{
    //Arrange
      const ResultadoLineaTicket:ResultadoLineaTicket[] = [
        {
          cantidad: 2,
          nombre: "Legumbres",
          precioConIva: 2.42,
          precionSinIva: 2,
          tipoIva: "general",
      }
    ];
    //Act
    const result = totalTicket(ResultadoLineaTicket)

    //Assert
    const resultadoTotalTicket = [
      {
        totalSinIva: 2,
        totalConIva: 2.42,
        totalIva: 0.42,
      }
    ]

    expect(result).toEqual(resultadoTotalTicket);
  });

});

describe("TotalPorTipoIva", () =>{
  it("Debe devolver el desglose total", () => {
    //Arrange
    const resultadoLineaTicket:ResultadoLineaTicket[] = [
      {
        cantidad: 2,
        nombre: "Legumbres",
        precioConIva: 2.42,
        precionSinIva: 2,
        tipoIva: "general",
    }
  ];
    
    //Atc
    const result = desgloseIva(resultadoLineaTicket);
    //Assert 
     const totalporIva = [
      {
        tipoIva: "general",
        cuantia : 2,
      }
    ];

    expect(result).toEqual(totalporIva);

  })
})


describe("generarTicketFinal", () => {

  it("Debe devolver el ticket final", () =>{
    //Arrange
    const lineaTicker: LineaTicket[] =  [
      {
        producto: {
          nombre: "Legumbres",
          precio: 2,
          tipoIva: "general",
        },
        cantidad: 2,
      },
    ];
    //Act

    const result = generarTicketFinal(lineaTicker);

    //Assert
    const ticketFinal = [{
      lineas:{
        totalConIva: 2.42,
        totalIva: 0.42,
        totalSinIva: 2,
      },
      total: {
        cantidad: 2,
        nombre: "Legumbres",
        precioConIva: 2.42,
        precionSinIva: 2,
        tipoIva: "general",
      },
      desgloseIva: {
        cuantia: 2,
        tipoIva: "general"
       
      }
    }];

    expect(result).toEqual(ticketFinal);
  })


})