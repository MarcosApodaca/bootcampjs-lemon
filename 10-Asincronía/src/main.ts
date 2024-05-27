import { getDateApi } from "./fetchData";
import { Personajes } from "./model";

const contenedor = document.createElement("div");
contenedor.className = "personaje-contenedor";


const crearImagenPersonajes = (portada: string,): HTMLImageElement => {
    const imagen = document.createElement("img");
    imagen.src = portada;
    return imagen;
};
   
// const crearImagenPersonajes = (personajes: string) => {
    
//     const imagen = document.createElement("img");
//     imagen.src = `http://localhost:3000/${personajes.imagen}`;
//     imagen.alt = personajes.apodo;
    
//     contenedor.appendChild(imagen);
// }

// const crearTextoPersonajes = (personajes:string) => {
//     const h2 = document.createElement('h2')
//     h2.textContent = personajes.nombre
// }

const crearContenedorPersonajes = (personajes: Personajes): HTMLDivElement => {
    
    const elementoPelicula = document.createElement("div");
    elementoPelicula.classList.add("pelicula-contenedor");

    const imagen = crearImagenPersonajes(personajes.imagen)
    elementoPelicula.appendChild(imagen)

    return contenedor;
}

const pintarPeliculas = async (): Promise<void> => {
    console.log( await getDateApi());
    const peliculas = await getDateApi();
    const listado = document.querySelector("#listado-personajes");
    if (listado && listado instanceof HTMLDivElement) {
        peliculas.forEach((personajes:any) => {
            const contenedorPelicula = crearContenedorPersonajes(personajes);
            listado.appendChild(contenedorPelicula);
        });
    } else {
        throw new Error("No se ha encontrado el contenedor del listado");
    }
};

document.addEventListener("DOMContentLoaded", pintarPeliculas);