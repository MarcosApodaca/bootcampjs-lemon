import React from "react";

export const App = () => {
  const [nombre, setNombre] = React.useState<string>('Marcos');
  const [apellido, setApellido] = React.useState('Apodaca')

  return (
    <>
      <h1>Nombre: {nombre}</h1>
      <h1>Apellid: {apellido}</h1>
      <input 
      value={nombre}
      onChange={(e) =>  setNombre(e.target.value)}
      />
      <input 
      value={apellido}
      onChange={(e) => setApellido(e.target.value)}
      />
    </>
  );
};
