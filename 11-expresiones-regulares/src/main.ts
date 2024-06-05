import "./style.css";


export const estaBienFormadaLaIP = (value: string): boolean => {
    const regexp = /^(\d{1,3}\.){3}\d{1,3}$/gm
    return regexp.test(value);
   };

export const estaBienFormadoElNIF = (value: string): boolean => {
    const patron = /^\d{2}\.?\d{3}\.?\d{3}(\s|-|_)?[a-zA-Z]$/gm
    return patron.test(value);
   };
   