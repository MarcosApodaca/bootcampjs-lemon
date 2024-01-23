import { tieneMayusculasYMinusculas, tieneNumeros } from "./main";
import { ValidacionClave } from "./model";

describe("tieneMayusculasYMinusculas", () =>{
    it("should be returned TRUE if the password has both upper and lower case",() => {
        //Arrange
        const password:string = 'AdmIn28'
        //act
        const result = tieneMayusculasYMinusculas(password)
        //assert
        const respuesta:ValidacionClave = {
            esValida: true
        };
        expect(result).toEqual(respuesta)
    });
});

describe("tieneNumeros false", () => {
    it("should be return true or false if the password has a number", () => {
        //Arrange
        const password:string = 'jorGe28'
        //Act
        const result = tieneNumeros(password)
        //Assert
        const respuesta:ValidacionClave = {
            esValida: true
        };
        expect(result).toEqual(respuesta)
    })
})