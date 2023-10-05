

interface GrupoMusical{
    nombre: string;
    añoDeFundacion: number;
    activo: boolean;
    generoMusical: string;
}

enum Genero {
     Rock = "🎸 Rock",
     PopRock = "🎵 PopRock",
     HardRock = "🤘 Hard Rock",
     Clasica = "🎼 Clásica",
}


const style = "font-weight: bold;  font-size: 20px; background-color: green;"

const grupoMusicalA: GrupoMusical = {
    nombre: "The Beatles",
    añoDeFundacion: 1960,
    activo: true,
    generoMusical: Genero.PopRock,
}

const grupoMusicalB: GrupoMusical = {
    nombre: "Queen",
    añoDeFundacion: 1970,
    activo: false,
    generoMusical: Genero.Rock,
}

const grupoMusicalC: GrupoMusical = {
    nombre: "AC DC",
    añoDeFundacion: 1973,
    activo: true,
    generoMusical: Genero.HardRock,
}

const grupoMusicalD: GrupoMusical = {
    nombre: "Ludwig van Beethoven",
    añoDeFundacion: 1770,
    activo: false,
    generoMusical: Genero.Clasica,
}

const grupoMusicalF: GrupoMusical = {
    nombre: "The Rolling Stones",
    añoDeFundacion: 1962,
    activo: true,
    generoMusical: Genero.Rock,
}

 
 

// console.log(grupoMusicalA, grupoMusicalB, grupoMusicalC, grupoMusicalD, grupoMusicalF);

console.log(`%c${grupoMusicalA.nombre}`,style, `/ ${grupoMusicalA.añoDeFundacion} / activo: ${grupoMusicalA.activo} / ${grupoMusicalA.generoMusical}`);
console.log(`%c${grupoMusicalB.nombre}`,style, `/ ${grupoMusicalB.añoDeFundacion} / activo: ${grupoMusicalB.activo} / ${grupoMusicalB.generoMusical}`);
console.log(`%c${grupoMusicalC.nombre}`,style, `/ ${grupoMusicalC.añoDeFundacion} / activo: ${grupoMusicalC.activo} / ${grupoMusicalC.generoMusical}`);
console.log(`%c${grupoMusicalD.nombre}`,style, `/ ${grupoMusicalD.añoDeFundacion} / activo: ${grupoMusicalD.activo} / ${grupoMusicalD.generoMusical}`);
console.log(`%c${grupoMusicalF.nombre}`,style, `/ ${grupoMusicalF.añoDeFundacion} / activo: ${grupoMusicalF.activo} / ${grupoMusicalF.generoMusical}`);






