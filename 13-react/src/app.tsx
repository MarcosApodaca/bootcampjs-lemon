import { useState } from "react";
import { Saludo } from "./saludo";
import { EdicionNombre } from "./edicion-nombre";

export const App = () => {
  const [nombre, setNombre] = useState('Marcos')
  return (
    <>
      <Saludo nombre={nombre}/>
      <EdicionNombre 
      nombre={nombre}
      onActualizarNombre={setNombre}
      />
     
    </>
  );
};
