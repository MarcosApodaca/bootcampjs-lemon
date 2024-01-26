import { tieneCaracteresEspeciales, tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes, validarClave } from "./main";
import { ValidacionClave } from "./model";

describe("tieneMayusculasYMinusculas", () =>{
    it("should be returned TRUE if the password has both upper and lower case",() => {
        //Arrange
        const password:string = 'AdmIn28';
        //act
        const result = tieneMayusculasYMinusculas(password);
        //assert
        const respuesta:ValidacionClave = {
            esValida: true
        };
        expect(result).toEqual(respuesta);
    });
});

describe("tieneNumeros", () => {
    it("should be return TRUE if the password has a number", () => {
        //Arrange
        const password:string = 'jorGe28';
        //Act
        const result = tieneNumeros(password);
        //Assert
        const respuesta:ValidacionClave = {
            esValida: true
        };
        expect(result).toEqual(respuesta);
    });
});

describe("tieneCaracteresEspeciales", () => {
    it("should be return TRUE if the password has a special character", () => {
        //Arrange
        const password:string = 'Maqui@velo13';
        //Act
        const result = tieneCaracteresEspeciales(password);
        //Assert
        const respuesta:ValidacionClave = {
            esValida: true
        };
        expect(result).toEqual(respuesta);
    });
});

describe("tieneLongitudMinima", () => {
    it("should be return TRUE if the password have have a minimum length of 8 characters", () => {
        //Arrange
        const password:string = 'D2@z37fy';
        //Act
        const result = tieneLongitudMinima(password);
        //Assert
        const respuesta:ValidacionClave = {
            esValida: true
        };
        expect(result).toEqual(respuesta);
    });
});

describe("tieneNombreUsuario", () => {
    it("should be return FALSE if the if the password is the same as the user's password", () => {
        //Arrange
        const usuario:string = "admin";
        const password:string = 'admin';
        //Act
        const result = tieneNombreUsuario(usuario,password);
        //Assert
        const respuesta:ValidacionClave = {
            esValida: false,
            error: "La clave no debe tener el nombre del usuario"
        };
        expect(result).toEqual(respuesta);
    });
});

describe("tienePalabrasComunes", () => {
    it("should be return FALSE if the password contains common password", () => {
        //Arrange
        const commonPasswords:string[] = 
        [
        "password",
        "123456",
        "qwerty",
        "admin",
        "letmein",
        ];
        const password:string = 'password';
        //Act
        const result = tienePalabrasComunes(password,commonPasswords);
        //Assert
        const respuesta:ValidacionClave = {
            esValida: false,
            error: "La clave no debe de contener palabras comunes"
        };
        expect(result).toEqual(respuesta);
    });

    it("should be return TRUE if the password does not contain common password", () => {
        //Arrange
        const commonPasswords:string[] = 
        [
        "password",
        "123456",
        "qwerty",
        "admin",
        "letmein",
        ];
        const password:string = '5!kD4M59wf';
        //Act
        const result = tienePalabrasComunes(password,commonPasswords);
        //Assert
        const respuesta:ValidacionClave = {
            esValida: true,
        };
        expect(result).toEqual(respuesta);
    });

});

describe("validarClave", () => {
    it("should be return TRUE if the password passes password validation", () => {
        //Arrange
        const nombreUsuario = "Marcos" 
        const password:string = '5!kD4M59wf';
        const commonPasswords:string[] = 
        [
        "password",
        "123456",
        "qwerty",
        "admin",
        "letmein",
        ];

        //Act
        const result = validarClave(nombreUsuario,password,commonPasswords);

        //Assert
        const respuesta:ValidacionClave = {
            esValida: true,
        };
        expect(result).toEqual(respuesta);
    });

    it("should be return FALSE if password does not pass key validation", () => {
        //Arrange
        const nombreUsuario = "Marcos" 
        const password:string = 'p@3ssword';
        const commonPasswords:string[] = 
        [
        "password",
        "123456",
        "qwerty",
        "admin",
        "letmein",
        ];

        //Act
        const result = validarClave(nombreUsuario,password,commonPasswords);

        //Assert
        const respuesta:ValidacionClave = {
            esValida: false,
            error: "La clave debe tener mayúsculas y minúsculas",
        };
        expect(result).toEqual(respuesta);
    });
})