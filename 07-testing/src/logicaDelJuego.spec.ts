import { enumeracion } from "./model";
import { gameOver } from "./logicaDelJuego";

describe("Comprobar si el jugador ha ganado", () => {
   
    it("Debe devolver si el jugador ha perdido la partida", () => {
        //Arrange   
        enumeracion.puntuacion = 10
       const perdiste = "Game Over"
        //Act
        const resultado = gameOver()

        //Assert
         expect(resultado).toBe(perdiste)
    });

    it("Debe devolver si el jugador ha ganado la partida", () => {

        //Arrange
        enumeracion.puntuacion = 7.5
        const ganaste = "¡ Lo has clavado! ¡Enhorabuena!"

        //Act
        const resultado = gameOver()

        //Assert
        expect(resultado).toBe(ganaste)

    })


});