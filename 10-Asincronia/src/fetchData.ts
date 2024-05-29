// import { Personajes } from "./model";


const DIRECTION_URL = 'http://localhost:3000/personajes'

export const getDateApi = async () => {
    
    try{
        const response = await fetch(DIRECTION_URL)
        if(!response.ok){
            throw new Error('Error en la respues de la API')
        }
        const data = await response.json();
        return data
    }catch(error){
        console.log('Error al obtener los datos',error);
    }

    
}
