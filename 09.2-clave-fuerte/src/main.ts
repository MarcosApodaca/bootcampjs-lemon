
import { ValidacionClave, commonPasswords } from "./model";



export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    if(clave === clave.toLowerCase() || clave === clave.toUpperCase()){
        return {
            esValida: false,
            error: "La clave debe tener mayúsculas y minúsculas"
        };
    } else {
        return {
            esValida: true
        };
    }  
};

export const tieneNumeros = (clave: string): ValidacionClave => {

    let arrayDeCaracteres = clave.split('');
    const resultado =  arrayDeCaracteres.some(clave => (!isNaN(Number(clave))));
           
    if (resultado){
        return{
            esValida: true
        };
    }else {
        return {
            esValida: false,
            error: "La clave debe tener números"
        };
    }
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {

    const regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    const result = regex.test(clave);

    if(result){
        return{
            esValida: true
        };
    }else {
        return {
            esValida: false,
            error: "La clave debe de tener caracteres especiales"
        };
    }
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
    const longitudMinima = 8;
    const cadena = clave.length >= longitudMinima

    if(cadena){
        return{
            esValida: true
        };
    }else {
        return {
            esValida: false,
            error: "La clave debe de tener una longitud mínima de 8 caracteres"
        };
    }    
};  

export const tieneNombreUsuario = (nombreUsuario: string, clave: string): ValidacionClave => {

    if(nombreUsuario === clave){
        return{
            esValida: false,
            error: "La clave no debe tener el nombre del usuario"
            
        };
    }else {
        return {
            esValida: true
        };
    } 
};

export const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
    const esComun = commonPasswords.includes(clave.toLowerCase());

    if(esComun){
        return{
            esValida: false,
            error: "La clave no debe de contener palabras comunes"
        };
    }else{
        return{
            esValida: true
        };
    }
};


export const validarClave = (nombreUsuario: string, clave: string, commonPasswords: string[]): ValidacionClave => {

    const MayusculasYMinusculas = tieneMayusculasYMinusculas(clave)
    const Numeros = tieneNumeros(clave)
    const CaracteresEspeciales = tieneCaracteresEspeciales(clave)
    const LongitudMinima = tieneLongitudMinima(clave)
    const NombreUsuario = tieneNombreUsuario(nombreUsuario,clave)
    const PalabrasComunes = tienePalabrasComunes(clave,commonPasswords)

    
    switch (key) {
        case MayusculasYMinusculas:
            
            break;
    
        default:
            break;
    }
    
};

let usuario = "Marcos"


console.log(validarClave(usuario,"5!kD4M59wf",commonPasswords));
