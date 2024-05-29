import { getDateApi } from "./fetchData";
import { Personajes } from "./model";


const crearImagenPersonajes = (personajes: string, apodo: string):HTMLImageElement => {
    
    const imagen = document.createElement("img");
    imagen.classList.add('personajes_img')
    imagen.src = `http://localhost:3000/${personajes}`;
    imagen.alt = apodo;
    
    return imagen
}

const crearTextoPersonajes = (nombre:string, especialidad:string, habilidades:string[]):HTMLParagraphElement => {
    const h2 = document.createElement('h2')
    h2.classList.add("title")
    h2.textContent = `Nombre: ${nombre}`

    const testoEspecialidad = document.createElement('p')
    testoEspecialidad.textContent = `Especialidad: ${especialidad}`

    const textoHabilidad = document.createElement('p')
    textoHabilidad.textContent = `Especialidad: ${habilidades}`

    const div = document.createElement('div')
    div.appendChild(h2)
    div.appendChild(testoEspecialidad)
    div.appendChild(textoHabilidad)

    return div
}

const crearContenedorPersonajes = (personajes: Personajes): HTMLDivElement => {
    
    const elementoPersonajes = document.createElement("div");
    elementoPersonajes.classList.add("personaje-contenedor");

    const imagen = crearImagenPersonajes(personajes.imagen, personajes.apodo)
    elementoPersonajes.appendChild(imagen)

    const nombre = crearTextoPersonajes(personajes.nombre, personajes.especialidad, personajes.habilidades)
    elementoPersonajes.appendChild(nombre)

    return elementoPersonajes;
}


const pintraPersonajes = async (): Promise<void> => {
    const personajes = await getDateApi();
    const listado:any = document.querySelector("#listado-personajes");
    const inputBusqueda = document.querySelector("#input-busqueda") as HTMLInputElement;

    const filtrarPersonajes = () => {
        const filtro = inputBusqueda.value.toLowerCase();
        const personajesFiltrados = personajes.filter((personaje: any) => {
            return personaje.nombre.toLowerCase().includes(filtro);
        });

        listado.innerHTML = '';

        personajesFiltrados.forEach((personaje: any) => {
            const contenedorPersonajes = crearContenedorPersonajes(personaje);
            listado.appendChild(contenedorPersonajes);
        });
    };

    inputBusqueda.addEventListener("input", filtrarPersonajes);

    filtrarPersonajes();
};

document.addEventListener("DOMContentLoaded", pintraPersonajes);

