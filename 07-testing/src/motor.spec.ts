import { expect, it } from "vitest";

import { addTwoIfRandomBiggerThanSeven, getPuntuacionLabel, getGameOverLabel } from "./motor";

describe("motor specs", () =>{
    it("should get puntuacion label", () => {
        // Arrange
        const puntuacion = 8;
        const expectedResult = `Puntuación: ${puntuacion}`;
        
        // Act
        const result = getPuntuacionLabel(puntuacion);

        // Assert
        expect(result).toEqual(expectedResult);
    });

    it("should return 'Has sido muy conservador' if puntuacion below 4", () => {
        // Arrange
        const puntuacion = 3;
        const expectResult = "Has sido muy conservador";

        // Act
        const result = getGameOverLabel(puntuacion);

        // Assert
        expect(result).toEqual(expectResult);
    });

     // Cover other 4 cases

    it("should return 'Te ha entrado el canguelo eh?' if puntuacion is more 4 or less 6  ", () => {
        // Arrange
        const puntuacion = 5;
        const expectResult = "Te ha entrado el canguelo eh?";

        // Act
        const result = getGameOverLabel(puntuacion);

        // Assert
        expect(result).toEqual(expectResult);

    }) 

    it("should return 'Te ha entrado el canguelo eh?' if puntuacion is more 6 or less 7.5  ", () => {
        // Arrange
        const puntuacion = 7;
        const expectResult = "Casi casi...";

        // Act
        const result = getGameOverLabel(puntuacion);

        // Assert
        expect(result).toEqual(expectResult);

    }) 

    it("should return 'Te ha entrado el canguelo eh?' if puntuacion are same 7.5  ", () => {
        // Arrange
        const puntuacion = 7.5;
        const expectResult = "¡ Lo has clavado! ¡Enhorabuena!";

        // Act
        const result = getGameOverLabel(puntuacion);

        // Assert
        expect(result).toEqual(expectResult);

    }) 
   

    it('should add 2 if random number bigger than 7', () => {
        // Arrange
        const puntuacion = 8;
        const expectedResult = 10;

        // Act
        const result = addTwoIfRandomBiggerThanSeven(puntuacion);

        // Assert
        expect(result).toEqual(expectedResult);
    });

    it('should not modify random number if equal or less than 7', () => {
        // Arrange
        const puntuacion = 6;

        // Act
        const result = addTwoIfRandomBiggerThanSeven(puntuacion);

        // Assert
        expect(result).toEqual(puntuacion);
    });

})