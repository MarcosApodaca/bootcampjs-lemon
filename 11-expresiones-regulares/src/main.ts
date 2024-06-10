import "./style.css";
import { bancos } from "./tablaDeBanco";


export const validarFormatoIban = (value: string): boolean => {
    const regexp = /^(?<codigoPais>[A-Z]{2})\d{2}(\s|-)?(?<codigoBanco>\d{4})(\s|-)?(?<codigoSucursal>\d{4})(\s|-)?(?<digitoControl>\d{2})(\s|-)?(?<numeroCuenta>\d{10})$/gm
    
    const coincidencia = regexp.exec(value);
    
    if(coincidencia){
        const { codigoBanco, codigoSucursal, digitoControl , numeroCuenta} = coincidencia.groups as any

        bancos.map((bancos) =>{
            let nombreDeBanco = '' 
            
            if( codigoBanco === bancos.codigo){
                nombreDeBanco = bancos.nombre
                contenedorInfoBanco(codigoSucursal, nombreDeBanco, digitoControl, numeroCuenta )
            }
        })
        return true
    }else{
        console.log('error');
        
        return false
    }
};

const crearNombreBanco = (banco:any) => {
    const nombreBanco = document.createElement('p')
    nombreBanco.textContent = `Banco: ${banco}`
    
    return nombreBanco
}

const crearInforBanco = (codigo: any) => {
    const codigoSucursal = document.createElement('p')
    codigoSucursal.textContent = `Codigo Sucursal: ${codigo}`
    
    return codigoSucursal
}

const crearControlBanco = (control:any) => {
    const codigoDeControl = document.createElement('p')
    codigoDeControl.textContent = `Digito de control: ${control} `

    return codigoDeControl
}

const crearNumeroCuenta = (cuenta:string) => {
    const numeroDeCuenta = document.createElement('P')
    numeroDeCuenta.textContent = `Numero de cuenta: ${cuenta}`

    return numeroDeCuenta
}



const contenedorInfoBanco = (codigo:any, banco:any, control:any, cuenta:any) => {

    const listadoBanco = document.getElementById('contenedorListaBanco')
    if (listadoBanco) {
        listadoBanco.appendChild(crearInforBanco(codigo));
        listadoBanco.appendChild(crearNombreBanco(banco));
        listadoBanco.appendChild(crearControlBanco(control));
        listadoBanco.appendChild(crearNumeroCuenta(cuenta));
    } 
}

document.addEventListener("DOMContentLoaded", () => {
    validarFormatoIban('ES21 0188 0101 72 2030876295');
});