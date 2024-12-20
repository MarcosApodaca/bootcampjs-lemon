interface Props {
    nombre: string;
    onActualizarNombre: (nuevoNombre : string) => void
}

export const EdicionNombre: React.FC<Props> = (props) => {

    const {nombre, onActualizarNombre} = props;

    return (
        <div>
        <label>Nombre</label>
        <input
        value={nombre}
        onChange={ e => onActualizarNombre(e.target.value)
        }
        />
        <button
        onClick={(e) => onActualizarNombre(e.target.value)}
        >Actualizar nombre</button>
        </div>
    )
};