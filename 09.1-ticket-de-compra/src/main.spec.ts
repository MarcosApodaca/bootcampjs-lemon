import { calculaTicket } from "./main"

describe('calcularIva', () => { 
    it("Debe de devolver el pricio con el iva reduciso", () => {
        //Arrange

        const tipoIva =     [
            {
              producto: {
                nombre: "Legumbres",
                precio: 2,
                tipoIva: "general",
              },
              cantidad: 2,
            },
            ]
        //Act
        const result = calculaTicket(tipoIva)
        //Assert
        expect(result).toEqual(2.1)

    })

 })
 