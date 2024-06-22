import { electronicFormatIBAN, isValidIBAN } from 'ibantools';

export const validarIban = (numeroIban: string) => {
    const iban:any = electronicFormatIBAN(numeroIban);
    const rendertext = document.createElement('p');
    const listadoBanco:any = document.getElementById('contenedorListaBanco');

    
    if (isValidIBAN(iban)) {
        rendertext.textContent = (`El IBAN es valido`);
        
        } else {
        listadoBanco.innerHTML= '';
        rendertext.textContent = `EL IBAN no es valido`;
    }

    return listadoBanco.appendChild(rendertext);


};