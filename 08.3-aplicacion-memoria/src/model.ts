export interface Carta {
    idFoto: number; 
    imagen: string; 
    estaVuelta: boolean;
    encontrada: boolean;
  }


interface InfoCarta {
    idFoto: number;
    imagen: string;
  }

 export const infoCartas: InfoCarta[] = [
    {
        idFoto: 1,
        imagen:"https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/1.png?raw=true",
      },
      {
        idFoto: 2,
        imagen: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/2.png?raw=true",
      },
      {
        idFoto: 3,
        imagen:"https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/3.png?raw=true",
      },
      {
        idFoto: 4,
        imagen: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/4.png?raw=true", 
      },
      {
        idFoto:5,
        imagen: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/5.png?raw=true",
      },
      {
        idFoto:6,
        imagen: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/6.png?raw=true",
      }
  ];  

  
  const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
    idFoto,
    imagen,
    estaVuelta: false,
    encontrada: false,
  });
  
  const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
    return infoCartas.flatMap((infoCarta) => [
      crearCartaInicial(infoCarta.idFoto, infoCarta.imagen),
      crearCartaInicial(infoCarta.idFoto, infoCarta.imagen),
    ]);
  };  


 
  
  
export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);

type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";

export interface Tablero {
  cartas: Carta[];
  estadoPartida: EstadoPartida;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
}

const crearTableroInicial = (): Tablero => ({
  cartas: cartas,
  estadoPartida: "PartidaNoIniciada",
});

export let tablero: Tablero = crearTableroInicial() ;