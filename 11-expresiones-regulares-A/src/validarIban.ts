import { electronicFormatIBAN, isValidIBAN } from 'ibantools';

export const validarIban = (numeroIban: string) : boolean => {
    const iban:any = electronicFormatIBAN(numeroIban);
    const rendertext = document.createElement('p');
    const listadoBanco:any = document.getElementById('contenedorListaBanco');

    
    if (isValidIBAN(iban)) {
        rendertext.textContent = (`El IBAN es valido`);
        listadoBanco.appendChild(rendertext);
        return true
    } else {
        rendertext.textContent = `EL IBAN no es valido`;
        listadoBanco.appendChild(rendertext);
        return false
    }


};