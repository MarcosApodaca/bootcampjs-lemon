import React from "react";


interface Props {
    nombre: string;
}


export const Saludo: React.FC<Props> = (props) => {
    const {nombre} = props;

    return <h1>Hola {nombre}</h1>
}