import "./style.css";
import { bancos } from "./tablaDeBanco";
import { validarIban } from "./validarIban";


export const validarFormatoIban = (value: string): boolean => {
    const regexp = /^(?<codigoPais>[A-Z]{2})\d{2}(\s|-)?(?<codigoBanco>\d{4})(\s|-)?(?<codigoSucursal>\d{4})(\s|-)?(?<digitoControl>\d{2})(\s|-)?(?<numeroCuenta>\d{10})$/gm
    
    const coincidencia = regexp.exec(value);
    
    const listadoBanco = document.getElementById('contenedorListaBanco') as HTMLDivElement
    const validar = document.createElement('p');
    listadoBanco.innerHTML = '';
    if(coincidencia){
        
        validar.textContent = `EL IBAN esta bien formado`;
        listadoBanco?.appendChild(validar)
        if (validarIban(value)){
            const { codigoBanco, codigoSucursal, digitoControl , numeroCuenta} = coincidencia.groups as any
        
            bancos.map((bancos) =>{
                let nombreDeBanco = '' 
                
                if( codigoBanco === bancos.codigo){
                    nombreDeBanco = bancos.nombre
                    contenedorInfoBanco(codigoSucursal, nombreDeBanco, digitoControl, numeroCuenta )
                }
            })
        }
          
        return true
    }else{
        validar.textContent = `EL IBAN no esta bien formado`;
        listadoBanco?.appendChild(validar)
        return false
    }
};






const crearNombreBanco = (banco:string): HTMLElement => {
    const nombreBanco = document.createElement('p')
    nombreBanco.textContent = `Banco: ${banco}`
    
    return nombreBanco
}

const crearInforBanco = (codigo: string): HTMLElement => {
    const codigoSucursal = document.createElement('p')
    codigoSucursal.textContent = `Codigo Sucursal: ${codigo}`
    
    return codigoSucursal
}

const crearControlBanco = (control:string): HTMLElement => {
    const codigoDeControl = document.createElement('p')
    codigoDeControl.textContent = `Digito de control: ${control} `

    return codigoDeControl
}

const crearNumeroCuenta = (cuenta:string): HTMLElement => {
    const numeroDeCuenta = document.createElement('P')
    numeroDeCuenta.textContent = `Numero de cuenta: ${cuenta}`

    return numeroDeCuenta
}



const contenedorInfoBanco = (codigo:string, banco:string, control:string, cuenta:string):void => {

    const listadoBanco = document.getElementById('contenedorListaBanco')
    if (listadoBanco) {
        listadoBanco.appendChild(crearInforBanco(codigo));
        listadoBanco.appendChild(crearNombreBanco(banco));
        listadoBanco.appendChild(crearControlBanco(control));
        listadoBanco.appendChild(crearNumeroCuenta(cuenta));
    } 
}

const inputIban = () => {
    const input = document.getElementById('iban-input') as HTMLInputElement
    if (input) {
        const value = input.value;
        validarFormatoIban(value);
       

    } else {
        console.error('Input element not found');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const validateButton = document.getElementById('validate-button');
    if (validateButton) {
        validateButton.addEventListener('click', inputIban);
    }
});