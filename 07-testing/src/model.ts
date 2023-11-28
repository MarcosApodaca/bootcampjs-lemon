export interface Enumeracion {
    puntuacion:number;
}

export const createDefaultEnumeracion = (): Enumeracion => ({
    puntuacion: 0,
});