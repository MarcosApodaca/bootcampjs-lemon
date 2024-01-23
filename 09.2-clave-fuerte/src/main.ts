import { ValidacionClave } from "./model";

export const validarClave = (
    nombreUsuario: string,
    clave: string,
    commonPasswords: string[]
  ): ValidacionClave => {
    // TODO
    
  };


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
    const claveNumero = Number(clave)
    if(claveNumero !== Number()){
        return{
            esValida:false,
            error: "La clave debe de tener números"
        };
    } else {
        return {
             esValida: true
        };
    }
    
};

const contra = 'andres233'
console.log(tieneNumeros(contra));
