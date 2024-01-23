import { calculaTicket, totalTicket, desgloseIva, generarTicketFinal} from "./main"
import { LineaTicket, ResultadoLineaTicket, ResultadoTotalTicket } from "./model"

describe('calculaTicket', () => { 
    it("should be return an array of object with name, quantity, price without VAT, VAT type and price with VAT", () => {
        //Arrange

        const producto:LineaTicket[] =  [
          {
            producto: {
              nombre: "Leche",
              precio: 1,
              tipoIva: "superreducidoC",
            },
            cantidad: 6,
          },
        ];
        //Act
        const result = calculaTicket(producto);
        //Assert
        const resultadoLineaTicket:ResultadoLineaTicket[] = [
          {
            nombre: 'Leche',
            cantidad: 6,
            precionSinIva: 1,
            tipoIva: 'superreducidoC',
            precioConIva: 1
          },
        ];

        expect(result).toEqual(resultadoLineaTicket);

    });

});
 
describe('ResultadoTotalTicket', () => {
  it("should be return an array of object with the price without VAT and with VAT", () =>{
    //Arrange
      const ResultadoLineaTicket:ResultadoLineaTicket[] = [
        {
          cantidad: 2,
          nombre: "Legumbres",
          precioConIva: 2.42,
          precionSinIva: 2,
          tipoIva: "general",
      },
      {
        nombre: 'Perfume',
        cantidad: 3,
        precionSinIva: 20,
        tipoIva: 'general',
        precioConIva: 24.2
      },
    ]

    //Act
    const result = totalTicket(ResultadoLineaTicket);

    //Assert
    const resultadoTotalTicket:ResultadoTotalTicket[] = [
      {
        totalSinIva: 2,
        totalConIva: 2.42,
        totalIva: 0.42,
      },
      { 
        totalSinIva: 20, 
        totalConIva: 24.2, 
        totalIva: 4.2 
      },

    ]

    expect(result).toEqual(resultadoTotalTicket);
  });

});

describe("TotalPorTipoIva", () =>{
  it("should be return the VAT breakdown and the repeated amount", () => {
    //Arrange
    const resultadoLineaTicket:ResultadoLineaTicket[] = [
      {
        cantidad: 2,
        nombre: "Legumbres",
        precioConIva: 2.42,
        precionSinIva: 2,
        tipoIva: "general",
    },
    {
      nombre: 'Lasaña',
      cantidad: 1,
      precionSinIva: 5,
      tipoIva: 'superreducidoA',
      precioConIva: 5.25
    }
    
  ];
    
    //Atc
    const result = desgloseIva(resultadoLineaTicket);
    //Assert 
     const totalporIva = [
      {
        tipoIva: "general",
        cuantia : 2,
      },
      {
        tipoIva:"superreducidoA",
        cuantia: 1
      }
    ];

    expect(result).toEqual(totalporIva);

  });
});


describe("generarTicketFinal", () => {

  it("should be return the final ticket", () =>{
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
    const ticketFinal = {
      lineas: [
        {
          cantidad: 2,
          nombre: "Legumbres",
          precioConIva: 2.42,
          precionSinIva: 2,
          tipoIva: "general",
        },
      ],
      total: [
        {
        totalConIva: 2.42, 
        totalIva: 0.42, 
        totalSinIva: 2,
        }
      ],
      desgloseIva: [
        {
          cuantia: 2, 
          tipoIva: "general",
        },
      ],
    };

    expect(result).toEqual(ticketFinal);
  });
});